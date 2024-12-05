import React from 'react';
import { Drawer, Box, List, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from '@inertiajs/react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { usePage } from "@inertiajs/react";
import { Logout } from '@mui/icons-material';
import Dropdown from '@/Components/Dropdown';

function Sidevar({ setIsOpen }) {
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && event.key === 'Tab' || event.key === 'Shift') {
            return;
        }
        setIsOpen(open);
    };
    const { props } = usePage();
    const { url } = usePage();

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
                    backgroundColor: '#2C3E50', // ダークな背景色
                    padding: '20px',
                    borderRadius: '8px',
                    color: '#ecf0f1',
                },
            }}
        >
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                {/* タイトル */}
                <Typography variant="h5" gutterBottom sx={{ color: '#ECF0F1', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    メニュー
                </Typography>

                {/* メニューリスト */}
                <List>
                    <Link href="/home" style={{ display: 'flex', alignItems: 'center', padding: '12px', borderRadius: '8px', marginBottom: '16px', backgroundColor: url == "/home" ? '#8A9A5B' : 'transparent' }}>
                        <ListItemIcon>
                            <HomeIcon sx={{ color: '#ECF0F1' }} />
                        </ListItemIcon>
                        <ListItemText primary="ホーム" sx={{ color: '#ECF0F1', fontSize: '1rem' }} />
                    </Link>
                    <Link href="/submit" style={{ display: 'flex', alignItems: 'center', padding: '12px', borderRadius: '8px', marginBottom: '16px', backgroundColor: url == "/submit" ? '#8A9A5B' : 'transparent' }}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon sx={{ color: '#3498DB' }} />
                        </ListItemIcon>
                        <ListItemText primary="シフト提出" sx={{ color: '#ECF0F1', fontSize: '1rem' }} />
                    </Link>
                    <Link href="/confirm" style={{ display: 'flex', alignItems: 'center', padding: '12px', borderRadius: '8px', marginBottom: '16px', backgroundColor: url == "/confirm" ? '#8A9A5B' : 'transparent' }}>
                        <ListItemIcon>
                            <CheckIcon sx={{ color: '#27AE60' }} />
                        </ListItemIcon>
                        <ListItemText primary="シフト確認" sx={{ color: '#ECF0F1', fontSize: '1rem' }} />
                    </Link>
                    {props.allowedEmail.length >= 1 &&
                        <Link href="/master" style={{ display: 'flex', alignItems: 'center', padding: '12px', borderRadius: '8px', marginBottom: '16px', backgroundColor: 'transparent' }}>
                            <ListItemIcon>
                                <EngineeringIcon sx={{ color: '#E74C3C' }} />
                            </ListItemIcon>
                            <ListItemText primary="管理者用" sx={{ color: '#ECF0F1', fontSize: '1rem' }} />
                        </Link>
                    }
                    <Link href="/login" style={{ display: 'flex', alignItems: 'center', padding: '12px', borderRadius: '8px', marginBottom: '16px', backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <Logout sx={{ marginLeft: '4px', color: '#F39C12' }} />
                        </ListItemIcon>
                        <ListItemText primary="ログアウト" sx={{ color: '#ECF0F1', fontSize: '1rem' }} />
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidevar;
