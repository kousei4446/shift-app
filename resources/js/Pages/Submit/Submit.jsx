import { useEffect, useState } from "react";
import Head from "../Home/Head";
import Sidevar from "../Home/Sidevar";
import { Button } from "@mui/material";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import holiday from 'holiday-jp';
import './Submit.css'; // あなたのスタイル
import SubmitModal from "./SubmitModal";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { format } from 'date-fns'; // date-fnsを利用して日付をフォーマット


function Submit({ hasSubmittedShifts, prohibitdays, email }) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState(new Set());
    // console.log(hasSubmittedShifts)
    const handleDateClick = (info) => {
        const date = info.date;
        const day = date.getDay();
        const year = date.getFullYear();
        const month = date.getMonth(); // 例: 0（1月）
        const days = date.getDate(); // 例: 15
        const checkDate = new Date(year, month, days);
        const holidayCheck = holiday.isHoliday(checkDate);
        // 月曜日（1）と水曜日（3）の場合のみクリックを有効にする
        if ((day === 1 || day === 2 || day === 3|| day === 4|| day === 5) && !holidayCheck && !prohibitDates.includes(info.dateStr)) {
            const dateString = info.dateStr; // YYYY-MM-DD形式の文字列
            const newSelectedDates = new Set(selectedDates);

            // 既に選択されている場合は削除、そうでなければ追加
            if (newSelectedDates.has(dateString)) {
                newSelectedDates.delete(dateString);
            } else {
                newSelectedDates.add(dateString);
            }

            setSelectedDates(newSelectedDates);
            info.dayEl.classList.toggle('selected');
        }
    };


    const prohibitDates = prohibitdays.map(day => day.date); // prohibitdaysから禁止日を抽出

    const dayCellDidMount = (info, prohibitdays) => {
        const prohibitDates = prohibitdays.map(day => day.date); // prohibitdaysから禁止日を抽出
        const date = info.date;
        const day = date.getDay();
        const year = date.getFullYear();
        const month = date.getMonth(); // 例: 0（1月）
        const days = date.getDate(); // 例: 15
        const checkDate = new Date(year, month, days);
        const holidayCheck = holiday.isHoliday(checkDate);
        const formattedDate = format(info.date, 'yyyy-MM-dd'); // 日付をフォーマット
        // console.log(formattedDate)
        // 月曜日（1）と水曜日（3）の場合以外はスタイルを適用
        if ((day === 1 || day === 2 || day === 3|| day === 4|| day === 5) && !holidayCheck && !prohibitDates.includes(formattedDate)) {
            info.el.style.fontWeight = 'bold';
        } else {
            info.el.style.color = 'rgba(0, 0, 0, 0.5)'; // 薄い字にする
            info.el.style.cursor = 'not-allowed'; // カーソルを無効の指にする
            info.el.style.pointerEvents = 'none'; // クリックイベントを無効化
        }

    };
    const today = new Date();
    const [openCa, setOpenCa] = useState(false)
    useEffect(() => {
        const today = new Date();
        const day = today.getDate();

        // console.log(day)
        if (day >= 15 && day <= 25) {
            setOpenCa(false)
            // console.log('今日の日付は15日から25日の間です。');
        } else {
            setOpenCa(false)
            // console.log('今日の日付は15日から25日の間ではありません。');
        }
    }, [])

    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    return (
        <>
            <div>
                <Head isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen && <Sidevar setIsOpen={setIsOpen} />}
                {openCa ?
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "80vh",
                            textAlign: "center",
                            background: "linear-gradient(135deg, #f7f9fc, #e0e7ff)",
                            borderRadius: "16px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            margin: "16px",
                            padding: "24px",
                        }}
                    >
                        <EditCalendarIcon
                            style={{
                                fontSize: "64px",
                                color: "#1976d2",
                                marginBottom: "16px",
                            }}
                        />
                        <h1
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "#333",
                            }}
                        >
                            提出日までお待ちください。
                        </h1>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#555",
                                marginTop: "8px",
                            }}
                        >
                            シフト提出の受付は15日から25日の間で行われます。
                        </p>
                    </div>
                    :
                    <>
                        <div style={{ marginTop: "24px", marginLeft: "16px", marginRight: "16px" }}>
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                initialDate={nextMonth} // 来月の初日を設定
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
                                dayCellDidMount={(info) => dayCellDidMount(info, prohibitdays)} // dayCellDidMountイベントハンドラを追加
                            />
                        </div>
                        <br />
                        <div style={{
                            width: "100vw",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Button
                                className="subBtn"
                                variant="outlined"
                                onClick={() => setOpen(!open)}
                            >
                                <EditCalendarIcon style={{ fontSize: "16px" }} />{hasSubmittedShifts && "再"}提出
                            </Button>
                        </div>
                    </>
                }

            </div>
            {open && <SubmitModal open={open} setOpen={setOpen} selectedDates={selectedDates} hasSubmittedShifts={hasSubmittedShifts} />}
        </>
    );
}

export default Submit;
