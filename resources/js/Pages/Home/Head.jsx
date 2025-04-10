import { Avatar, Button, IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from "react";
import { Logout } from "@mui/icons-material";
import Dropdown from "@/Components/Dropdown";

export default function Head({ isOpen, setIsOpen }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            sx={{
                padding: "12px 24px",
                height: "64px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#2c3e50", // ダークグレーの背景
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // シャドウ
                borderBottom: "2px solid #34495e", // 境界線に微妙な変化
            }}
        >
            {/* アプリタイトル */}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: "700",
                    color: "#ecf0f1", // 明るいテキストカラー
                    marginLeft: "8px",
                }}
            >
                シフトアプリ
            </Typography>

            {/* メニュー */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: "#34495e", // メニューの背景を暗いグレーに
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // やや濃いシャドウ
                        borderRadius: "8px",
                        color: "#ecf0f1", // テキストカラー
                    },
                }}
            >
                <MenuItem onClick={handleClose} sx={{ '&:hover': { backgroundColor: "#2c3e50" } }}>
                    <Logout sx={{ marginRight: 1, color: "#e74c3c" }} />
                    <Dropdown.Link href={route('logout')} method="post" as="button" style={{ color: "#ecf0f1" }}>
                        ログアウト
                    </Dropdown.Link>
                </MenuItem>
            </Menu>

            {/* ナビゲーションのトグルボタン */}
            <IconButton
                onClick={handleToggle}
                sx={{
                    padding: "8px",
                    backgroundColor: "#34495e",
                    borderRadius: "50%",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    '&:hover': {
                        backgroundColor: "#2c3e50",
                    },
                }}
            >
                <DensityMediumIcon sx={{ color: "#ecf0f1" }} />
            </IconButton>
        </Box>
    );
}
