import { Box, Modal, Typography, Button } from '@mui/material';

function Confirm({ open, setOpen }) {


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
                <Button variant="contained" sx={{ mt: 2 }} >
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
