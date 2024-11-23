import React, { useState, useEffect } from 'react';
import Head from '../Home/Head';
import Sidevar from '../Home/Sidevar';
import Callender from './Callender';
import { Button } from '@mui/material';
import "./Master.css";
import MasterModal from './MasterModal';
import NextMonthDates from './NextMonthDates';
import ShiftTable from './ShiftTable';
import Confirm from './Confirm';
import OpenCa from './OpenCa';

function Master({ shifts, count, datas }) {
    const [isOpen, setIsOpen] = useState(false);
    const [newDatas, setNewDatas] = useState([]);
    const [selectedMembersByDate, setSelectedMembersByDate] = useState({}); // 日付ごとの選択メンバー
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [openCon, setOpenCon] = useState(false);
    useEffect(() => {
        const updatedDatas = [];
        shifts.forEach((shift) => {
            const existingData = updatedDatas.find((data) => data.date === shift.date);
            if (existingData) {
                if (!existingData.members.includes(shift.user.name)) {
                    existingData.members.push(shift.user.name);
                }
            } else {
                updatedDatas.push({ date: shift.date, members: [shift.user.name] });
            }
        });
        setNewDatas(updatedDatas);
    }, [shifts]);

    const sortedDatas = [...newDatas].sort((a, b) => new Date(a.date) - new Date(b.date));

    const register = (mem, day) => {
        setSelectedMembersByDate(prevState => {
            const currentMembers = prevState[day] || [];
            if (currentMembers.includes(mem)) {
                // 選択解除
                return { ...prevState, [day]: currentMembers.filter(member => member !== mem) };
            } else {
                // 選択追加
                return { ...prevState, [day]: [...currentMembers, mem] };
            }
        });
        setSelectedDate(day);
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <div>
            <div>
                <Head isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            </div>
            <div>
                {sortedDatas.map((shift) => (
                    <div key={shift.date}>
                        <p>日付: {shift.date}</p>
                        <p style={{ display: "flex", flexWrap: "wrap" }}>
                            {shift.members.map((member, index) => (
                                <div
                                    key={`${member}-${index}`}
                                    className={`shift-button ${selectedMembersByDate[shift.date]?.includes(member) ? 'selected' : ''}`}
                                    onClick={() => register(member, shift.date)}
                                >
                                    {member}
                                </div>
                            ))}
                        </p>
                        <br />
                    </div>
                ))}
            </div>
            <div>
                <Button onClick={handleClick} className="subBtn" variant="outlined">表の作成</Button>
            </div>
            {/* ShiftTableにselectedMembersByDateをdatasとして渡す */}
            <ShiftTable datas={datas} />
            {open && <MasterModal open={open} setOpen={setOpen} datas={selectedMembersByDate} count={count} />}
            <Button onClick={() => setOpenCon(true)} className="subBtn" variant="outlined">公開</Button>
            {openCon && <Confirm open={openCon} setOpen={setOpenCon} />}
            <OpenCa />
        </div>
    );
}

export default Master;
