import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { usePage } from '@inertiajs/react';

export function UserSummary({ mes }) {
    const { props } = usePage();
    const name = props.auth.user.name;

    return (
        <Card sx={{
            bgcolor: '#ffffff', // 背景色を白に設定
            color: '#333', // テキスト色を濃い灰色に設定
            margin: 'auto 8px',
            marginBottom: '16px',
            borderRadius: '10px', // 角を丸くして柔らかい印象に
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // 軽いシャドウで立体感を追加
            '&:hover': {
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)', // ホバー時にシャドウを強調
            },
        }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        alt={name}
                        src="/placeholder-user.jpg"
                        sx={{
                            width: 64, height: 64, mr: 2, border: '2px solid #8A9A5B', // アバターのボーダー追加
                        }}
                    />
                    <Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                            {name}さん
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#7f8c8d' }}>
                            次回: {mes} 18:30 - 20:30
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
