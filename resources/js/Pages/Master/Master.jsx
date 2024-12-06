import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Head from '../Home/Head';
import Sidevar from '../Home/Sidevar';
import "./Master.css";
import MasterModal from './MasterModal';
import ShiftTable from './ShiftTable';
import Confirm from './Confirm';
import OpenCa from './OpenCa';
import AddMaster from './AddMaster';
import { Button, Box, Typography, Paper, Grid } from '@mui/material';
import './Master.css'; // スタイルファイル

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

    useEffect(() => {
        // フィルタリングした来月のシフト以外を削除
        const selectedDates = shifts.filter(shift => {
            const shiftDate = new Date(shift.date);
            return shiftDate < nextMonthStart || shiftDate > nextMonthEnd;
        }).map(shift => shift.date); // 削除対象の日付を選定

        setData('dates', selectedDates); // 削除対象の日付データをセット

    }, [])
    // 来月以外のシフトを削除する
    const delShift = () => {
        // まず、nextMonthStart と nextMonthEnd を Date オブジェクトに変換
        const { nextMonthStart, nextMonthEnd } = getNextMonthRange();

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
    const [isOpenCall, setIsOpenCall] = useState(false)
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    return (
        <div className="master-container">
            {/* ヘッダーとサイドバー */}
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}

            {/* シフト削除ボタン */}
            <Box sx={{ marginTop: 3, marginRight: 1, textAlign: 'right' }}>
                <Button
                    onClick={delShift}
                    variant="contained"
                    color="error"
                    sx={{
                        fontWeight: 'bold',
                        padding: '4px 8px',
                        fontSize: '13px',
                        '&:hover': { backgroundColor: '#d32f2f' },
                    }}
                    disabled={processing}
                >
                    先月分のシフトの削除
                </Button>
            </Box>
            {/* シフトデータの表示 */}
            <Box sx={{ marginTop: 4, marginRight: 2, marginLeft: 2 }}>
                {sortedDatas.map((shift) => (
                    <Paper key={shift.date} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#f9f9f9' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                            日付: {shift.date}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {shift.members.map((member, index) => (
                                <Button
                                    key={`${member}-${index}`}
                                    variant="outlined"
                                    sx={{
                                        padding: '8px 16px',
                                        borderColor: selectedMembersByDate[shift.date]?.includes(member) ? 'primary.main' : 'grey.500',
                                        color: selectedMembersByDate[shift.date]?.includes(member) ? 'white' : 'black',
                                        backgroundColor: selectedMembersByDate[shift.date]?.includes(member) ? 'blue' : '',
                                        // '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                                    }}
                                    onClick={() => register(member, shift.date)}
                                >
                                    {member}
                                </Button>
                            ))}
                        </Box>
                    </Paper>
                ))}
            </Box>

            {/* ボタンを中央に配置 */}
            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Button
                    onClick={() => setOpen(true)}
                    variant="outlined"
                    sx={{
                        margin: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderColor: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                        },
                    }}
                >
                    表の作成
                </Button>
            </Box>

            {/* ShiftTable コンポーネント */}
            <ShiftTable datas={outputData} />

            {/* モーダルの表示 */}
            {open && <MasterModal open={open} setOpen={setOpen} datas={selectedMembersByDate} />}

            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Button
                    onClick={() => setOpenCon(true)}
                    variant="outlined"
                    sx={{
                        margin: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                    }}
                >
                    公開
                </Button>
            </Box>
            {openCon && <Confirm open={openCon} setOpen={setOpenCon} />}

            {/* 特定の日を入力できないようにするボタン */}
            <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                <Button
                    variant="outlined"
                    onClick={() => setIsOpenCall((prev) => !prev)}
                    sx={{
                        margin: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                    }}
                >
                    お盆など特定の日を入力できないようにする
                </Button>
                <p>※基本的にデフォルトで休日は除外されています</p>
                {isOpenCall && (
                    <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                        <OpenCa />
                    </Box>
                )}
            </Box>

            {/* 管理者の追加 */}
            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Button
                    variant="outlined"
                    onClick={() => setIsOpenAdd((prev) => !prev)}
                    sx={{
                        margin: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                    }}
                >
                    管理者の追加
                </Button>
                {isOpenAdd && <AddMaster />}
            </Box>
        </div>
    );
}

export default Master;
