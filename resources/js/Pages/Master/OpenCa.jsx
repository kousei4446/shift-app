import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import holiday from 'holiday-jp';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useForm } from "@inertiajs/react";


function OpenCa() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState(new Set());

    const handleDateClick = (info) => {
        const date = info.date;
        const day = date.getDay();
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = date.getDate();
        const checkDate = new Date(year, month, days);
        const holidayCheck = holiday.isHoliday(checkDate);

        if ((day === 1 || day === 3) && !holidayCheck) {
            const dateString = info.dateStr;
            const newSelectedDates = new Set(selectedDates);

            if (newSelectedDates.has(dateString)) {
                newSelectedDates.delete(dateString);
            } else {
                newSelectedDates.add(dateString);
            }

            setSelectedDates(newSelectedDates);
            info.dayEl.classList.toggle('selected');
        }
    };
    // console.log(selectedDates)
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

    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    const { setData, post } = useForm({ datas: [] });
    useEffect(() => {
        const newSelectedDates = Array.from(selectedDates);
        setData('datas', newSelectedDates);
    }, [selectedDates]); // selectedDatesが更新されるたびにリセット
    const handleSubmit = async () => {
        // 選択された日付をセット

        const newSelectedDates = Array.from(selectedDates);
        // console.log(newSelectedDates)
        // console.log(selectedDates)
        setData('datas', newSelectedDates);

        // データ送信後に状態リセット
        post(route('master.store2'));
        setData('datas', []); // 送信後に date を空にリセット
    };


    return (
        <>
            <div>
                <div style={{ marginTop: "24px", marginLeft: "16px", marginRight: "16px" }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        initialDate={nextMonth}
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
                        dateClick={handleDateClick}
                        dayCellDidMount={dayCellDidMount}
                    />
                </div>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button
                        className="subBtn"
                        variant="outlined"
                        onClick={handleSubmit}
                    >
                        <EditCalendarIcon style={{ fontSize: "16px" }} />選択した日付を無効にしてカレンダーを公開する
                    </Button>
                </div>
            </div>
        </>
    );
}

export default OpenCa;
