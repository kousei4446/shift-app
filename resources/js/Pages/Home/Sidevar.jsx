import React from 'react';
import { Drawer, Box, List, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from '@inertiajs/react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import { Logout } from '@mui/icons-material';
import Dropdown from '@/Components/Dropdown';
import EngineeringIcon from '@mui/icons-material/Engineering';
// import HistoryIcon from '@mui/icons-material/History';

function Sidevar({ setIsOpen }) {
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && event.key === 'Tab' || event.key === 'Shift') {
            return;
        }
        setIsOpen(open);
    };

    return (
        <Drawer
            anchor="right"
            variant="temporary"
            open={true}
            onClose={toggleDrawer(false)}
            sx={{
                width: '70vw',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '70vw',
                    backgroundColor: '#f5f5f5', // 背景色を白っぽい灰色に
                    padding: '20px',
                },
            }}
        >
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    padding: '10px',
                }}
            >
                {/* タイトル */}
                <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
                    メニュー
                </Typography>

                {/* メニューリスト */}
                <List >
                    <Link href="/home" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px", marginTop: "16px" }}>
                        <ListItemIcon>
                            <HomeIcon sx={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="ホーム" />
                    </Link>
                    <Link href="/submit" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px", marginTop: "16px" }}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon sx={{ color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText primary="シフト提出" />
                    </Link>
                    <Link href="/confirm" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>

                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#43a047' }} />
                        </ListItemIcon>
                        <ListItemText primary="シフト確認" />
                    </Link>
                    <Link href="/profile" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="プロフィール" />
                    </Link>
                    <Link href="/master" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                        <ListItemIcon>
                            <EngineeringIcon style={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="管理者用" />
                    </Link>
                    {/* <Link href="/login" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                        <ListItemIcon>
                            <Logout sx={{ marginLeft: "4px", color: "black" }} ></Logout>
                        </ListItemIcon>
                        <ListItemText primary="ログアウト" />

                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            <p>ログアウト</p>
                        </Dropdown.Link>
                    </Link> */}


                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                        <ListItemIcon>
                            <HistoryIcon sx={{ color: '#ff7043' }} />
                        </ListItemIcon>
                        <ListItemText primary="これまでの記録" />
                    </div> */}
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidevar;
