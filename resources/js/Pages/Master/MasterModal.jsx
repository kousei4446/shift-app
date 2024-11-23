import { useForm } from '@inertiajs/react';
import { Box, Modal, Typography, Button } from '@mui/material';
import { useEffect } from 'react';

function MasterModal({ open, setOpen, datas, count }) {
    const { setData, post } = useForm({ datas: {} });
    console.log(datas)
    const handleSubmit = () => {
        setData("datas", datas);
        post(route("master.store"), {
            onSuccess: () => {
                console.log(datas)
                setOpen(false); // モーダルを閉じる
                route('/master')
            }
        });
    };
    useEffect(() => {
        setData("datas", datas);
    }, [datas])
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
                現在選択されたメンバーでシフト表をつくりますか？
            </Typography>
            {/* 
            <Typography>
                <div>
                    {Object.entries(datas).map(([date, members], index) => (
                        <div key={index} >
                            <p>{date}:</p>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {members.map((member, i) => (
                                    <p key={i} style={{ marginLeft: "16px" }}>{member}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Typography> */}

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

export default MasterModal;
