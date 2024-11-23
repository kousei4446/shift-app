import React, { useEffect, useState } from 'react';
import holidayJp from 'holiday-jp';

function NextMonthDates() {
    const [validDates, setValidDates] = useState([]);

    useEffect(() => {
        const getNextMonthMondaysAndWednesdays = () => {
            const today = new Date();
            const nextMonth = today.getMonth() + 1; // 次の月を取得
            const startDate = new Date(today.getFullYear(), nextMonth, 1);
            const endDate = new Date(today.getFullYear(), nextMonth + 1, 0);

            const dates = [];

            // 月初から月末までループ
            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                const dayOfWeek = d.getDay(); // 曜日を取得
                const formattedDate = d.toISOString().split('T')[0];

                // 月曜日 (1) または水曜日 (3) かつ祝日でない場合のみ追加
                if ((dayOfWeek === 1 || dayOfWeek === 3) && !holidayJp.isHoliday(d)) {
                    dates.push(formattedDate);
                }
            }

            setValidDates(dates);
        };

        getNextMonthMondaysAndWednesdays();
    }, []);

    return (
        <div>
            <h2>来月の祝日を除いた月曜日と水曜日</h2>
            <ul>
                {validDates.map((date) => (
                    <li key={date}>{date}</li>
                ))}
            </ul>
        </div>
    );
}

export default NextMonthDates;
