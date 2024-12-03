import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Head from '../Home/Head';
import Sidevar from '../Home/Sidevar';
import { Button } from '@mui/material';
import "./Master.css";
import MasterModal from './MasterModal';
import ShiftTable from './ShiftTable';
import Confirm from './Confirm';
import OpenCa from './OpenCa';

function Master({ shifts, count, datas }) {
    const { setData, delete: deleteRequest, processing, errors } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [newDatas, setNewDatas] = useState([]);
    const [selectedMembersByDate, setSelectedMembersByDate] = useState({});
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

    // 来月の開始日と終了日を計算
    const getNextMonthRange = () => {
        const now = new Date();
        const currentMonth = now.getMonth(); // 現在の月 (0-11)
        const year = now.getFullYear();

        // 来月の初日
        const nextMonthStart = new Date(year, currentMonth + 1, 1);
        // 来月の最終日
        const nextMonthEnd = new Date(year, currentMonth + 2, 0);

        return { nextMonthStart, nextMonthEnd };
    };

    const { nextMonthStart, nextMonthEnd } = getNextMonthRange();

    // 来月以外のシフトを削除する
    const delShift = () => {
        // まず、nextMonthStart と nextMonthEnd を Date オブジェクトに変換
        const { nextMonthStart, nextMonthEnd } = getNextMonthRange();

        // シフトの日付が来月分かどうかでフィルタリング
        const filteredShifts = shifts.filter(shift => {
            const shiftDate = new Date(shift.date); // 日付を Date オブジェクトに変換
            return shiftDate >= nextMonthStart && shiftDate <= nextMonthEnd;
        });

        // フィルタリングした来月のシフト以外を削除
        const selectedDates = shifts.filter(shift => {
            const shiftDate = new Date(shift.date);
            return shiftDate < nextMonthStart || shiftDate > nextMonthEnd;
        }).map(shift => shift.date); // 削除対象の日付を選定

        setData('dates', selectedDates); // 削除対象の日付データをセット

        // 削除リクエストを送信
        deleteRequest(route('master.del'), {
            onSuccess: () => {
                alert('削除が成功しました');
                setNewDatas([]); // 削除後、データをリセット
                setOpen(false);
            },
            onError: () => {
                alert('削除に失敗しました');
            },
        });
    };

    // localStorage から取得
    const storagedShifts = JSON.parse(localStorage.getItem('shifts')) || {}; // データがない場合は空のオブジェクトを使用
    // console.log(storagedShifts)
    const convertToArray = (data) => {
        const result = [];
        let idCounter = 1; // IDカウンタを初期化
        const createdAt = new Date().toISOString(); // 作成日時

        for (const [date, users] of Object.entries(data)) {
            users.forEach(user => {
                result.push({
                    id: idCounter++,
                    user_id: user,
                    date: date,
                    created_at: createdAt,
                    updated_at: createdAt,
                });
            });
        }

        return result;
    };
    const outputData = convertToArray(storagedShifts);
    // console.log(outputData)
    const register = (mem, day) => {
        setSelectedMembersByDate(prevState => {
            const currentMembers = prevState[day] || [];
            if (currentMembers.includes(mem)) {
                return { ...prevState, [day]: currentMembers.filter(member => member !== mem) };
            } else {
                return { ...prevState, [day]: [...currentMembers, mem] };
            }
        });
        setSelectedDate(day);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const sortedDatas = [...newDatas].sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div>
            <div>
                <Head isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            </div>
            <Button onClick={delShift} style={{ color: "red" }} disabled={processing}>
                来月分以外のシフトの削除
            </Button>

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
            <ShiftTable datas={outputData} />
            {open && <MasterModal open={open} setOpen={setOpen} datas={selectedMembersByDate} count={count} />}
            <Button onClick={() => setOpenCon(true)} className="subBtn" variant="outlined">公開</Button>
            {openCon && <Confirm open={openCon} setOpen={setOpenCon} />}
            <OpenCa />
            <input type='date' />
        </div>
    );
}

export default Master;
