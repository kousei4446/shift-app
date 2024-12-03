import { Box, Modal, Typography, Button } from '@mui/material';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

function Confirm({ open, setOpen }) {
    const { setData, post, processing } = useForm({ date: [], });
    useEffect(() => {
        const storagedShifts = JSON.parse(localStorage.getItem('shifts') || '{}');

        // ローカルストレージから取得したデータを確認
        if (typeof storagedShifts !== 'object' || Array.isArray(storagedShifts)) {
            console.error('Invalid data format in localStorage. Expected an object.');
            return;
        }

        console.log(storagedShifts);
        setData('date', storagedShifts);
    }, [])

    const handleSubmit = () => {
        const storagedShifts = JSON.parse(localStorage.getItem('shifts') || '{}');

        // ローカルストレージから取得したデータを確認
        if (typeof storagedShifts !== 'object' || Array.isArray(storagedShifts)) {
            console.error('Invalid data format in localStorage. Expected an object.');
            return;
        }

        console.log(storagedShifts);
        setData('date', storagedShifts);
        // サーバーに送信
        post(route('master.store'), {
            data: { date: storagedShifts }, // データを明示的に送信
            headers: {
                'Content-Type': 'application/json', // ヘッダーを明示
            },
            onSuccess: () => {
                console.log('Success: Data posted successfully.');
                setOpen(false);
                setData({ date: {} }); // フォームをリセット
            },
            onError: (errors) => {
                console.error('Error during data posting:', errors);
            },
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
            <Typography variant="h6" component="h2" style={{ fontWeight: "bold" }}>
                現在の表で公開しますか？
            </Typography>



            <div style={{ gap: "8px", display: 'flex' }}>
                <Button onClick={() => setOpen(false)} variant="outlined" sx={{ mt: 2 }}>
                    いいえ
                </Button>
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                    はい
                </Button>
            </div>
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
                    height: '100vh',
                }}
            >
                {body}
            </Box>
        </Modal>
    );
}

export default Confirm;
