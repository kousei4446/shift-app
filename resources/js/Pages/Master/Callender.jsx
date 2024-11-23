import FullCalendar from '@fullcalendar/react';
import React, { useEffect, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import holiday from 'holiday-jp';
import '../Submit/Submit.css';

function Callender() {
    const [events, setEvents] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date()); // 現在の日付を管理

    const dayCellDidMount = (info) => {
        const date = info.date;
        const day = date.getDay();
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = date.getDate();
        const checkDate = new Date(year, month, days);
        const holidayCheck = holiday.isHoliday(checkDate);

        if ((day !== 1 && day !== 3) || holidayCheck) {
            info.el.style.color = 'rgba(0, 0, 0, 0.5)';
            info.el.style.cursor = 'not-allowed';
            info.el.style.pointerEvents = 'none';
        } else {
            info.el.style.fontWeight = 'bold';
        }
    };

    // 来月の最初の日付を計算
    const getNextMonthDate = () => {
        const currentDate = new Date();
        const nextMonth = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        return new Date(year, nextMonth, 1);
    };

    useEffect(() => {
        setCurrentDate(getNextMonthDate()); // コンポーネントがマウントされたときに来月の日付を設定
    }, []);

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                currentDate={currentDate} // 現在の日付を指定
                headerToolbar={{
                    start: 'title',
                    center: '',
                    end: ''
                }}
                height={"480px"}
                locale={jaLocale}
                fixedWeekCount={false}
                showNonCurrentDates={false}
                hiddenDays={[0, 6]}
                dayCellDidMount={dayCellDidMount}
                events={events}
            />
        </div>
    );
}

export default Callender;
