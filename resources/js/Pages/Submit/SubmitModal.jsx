import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Box, Modal, Typography, Button } from '@mui/material';

function SubmitModal({ open, setOpen, selectedDates, hasSubmittedShifts }) {
    const { setData, post, processing, errors } = useForm({
        date: [], // 配列に変更
    });
    useEffect(() => {
        setData('date', newDates);
    }, [selectedDates]); // selectedDatesが更新されるたびにリセット
    const [mes, setMes] = useState(false);
    const newDates = Array.from(selectedDates).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    const handleSubmit = () => {
        if (newDates.length == 0) {
            setMes(true);
        };
        setMes(false);
        setData('date', newDates); // 'date'を使用
        // console.log(data.date); // 追加: 送信前のデータを確認

        post(route('submit.store'), {
            onSuccess: () => {
                setOpen(false);
                // 成功メッセージを表示する処理を追加することも考慮
                setData('date', []); // 送信後に date を空にリセット
            },
            onError: () => {
                // エラーをユーザーに表示する処理を追加することを検討
                console.error(errors);
            }
        });
    };

    const body = (
        <Box
            sx={{
                width: "320px",
                borderRadius: '8px',
                bgcolor: 'background.paper',
                border: 'none',
                boxShadow: 24,
                p: 4,
                margin: '0 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h5" component="h2" style={{ fontWeight: "bold" }}>
                こちらで{hasSubmittedShifts && "再"}提出しますか？
            </Typography>

            <Typography>
                {newDates.length > 0 ? (
                    <div>
                        <p style={{ marginBottom: "8px" }}>
                            選択された日付は以下です
                        </p>
                        <ul>
                            {newDates.map((date) => (
                                <li key={date}>{date}</li>
                            ))}
                        </ul>
                    </div>
                ) : "選択された日付はありません"}
            </Typography>
            <div style={{ gap: "8px", display: 'flex', }}>
                <Button onClick={() => setOpen(false)} variant="outlined" sx={{ mt: 2 }}>
                    いいえ
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }} disabled={processing}>
                    はい
                </Button>
            </div>
            {mes && <p style={{ color: "red", marginTop: "8px", fontWeight: "bold" }}>日程を選択してください。</p>}
        </Box>
    );

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh', // 画面全体の高さ
                }}
            >
                {body}
            </Box>
        </Modal>
    );
}

export default SubmitModal;
