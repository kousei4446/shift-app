import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export function ShiftSummary({ data }) {
    return (
        <Card
            style={{
                margin: "16px 8px",
                padding: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
                maxWidth: "600px"
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '16px'
                    }}
                >
                    <CalendarTodayIcon
                        sx={{
                            marginRight: '8px',
                            fontSize: '28px',
                            color: '#1976d2'
                        }}
                    />
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontWeight: 'bold', color: '#333' }}
                    >
                        今週のシフト
                    </Typography>
                </Box>
                <List disablePadding>
                    {data.map((shift, index) => (
                        <React.Fragment key={index}>
                            <ListItem
                                disableGutters
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '8px 0'
                                }}
                            >
                                <EventAvailableIcon
                                    sx={{
                                        marginRight: '12px',
                                        color: '#4caf50',
                                        fontSize: '24px'
                                    }}
                                />
                                <ListItemText
                                    primary={new Date(shift.date).toLocaleDateString('ja-JP', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit'
                                    })}
                                    secondary={'18:30 - 20:30'}
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        fontWeight: '500'
                                    }}
                                    secondaryTypographyProps={{
                                        variant: 'body2',
                                        color: 'textSecondary'
                                    }}
                                />
                            </ListItem>
                            {index < data.length - 1 && <Divider variant="middle" />}
                        </React.Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
