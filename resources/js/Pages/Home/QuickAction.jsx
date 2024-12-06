import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { router } from '@inertiajs/react';
import { Logout } from '@mui/icons-material';
import { useState } from 'react';
import LogoutModal from '../LogoutModal';

export function QuickActions() {
    const [open, setOpen] = useState(false);
    return (
        <Card sx={{ margin: "auto 8px", boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
            <CardContent>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                    クイックアクション
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={4}>
                        <Button
                            variant="outlined"
                            startIcon={<CalendarTodayIcon />}
                            fullWidth
                            sx={{
                                height: '100%',
                                textAlign: 'center',
                                padding: '16px',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: "#f5f5f5",
                                    borderColor: "#1976d2",
                                },
                            }}
                            onClick={() => router.get('/submit')}
                        >
                            シフト提出
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button
                            onClick={() => router.get('/confirm')}
                            variant="outlined"
                            startIcon={<AssignmentIcon />}
                            fullWidth
                            sx={{
                                height: '100%',
                                textAlign: 'center',
                                padding: '16px',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: "#f5f5f5",
                                    borderColor: "#1976d2",
                                },
                            }}
                        >
                            シフト確認
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Button
                            onClick={() => setOpen(prev => !prev)}
                            variant="outlined"
                            startIcon={<Logout />}
                            fullWidth
                            sx={{
                                height: '100%',
                                textAlign: 'center',
                                padding: '16px',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: "#f5f5f5",
                                    borderColor: "#1976d2",
                                },
                            }}
                        >
                            ログアウト
                        </Button>
                    </Grid>
                    {open && <LogoutModal setOpen={setOpen} />}
                </Grid>
            </CardContent>
        </Card>
    );
}
