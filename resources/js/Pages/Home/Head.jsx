import { Avatar, Button, IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from "react";
import { Logout } from "@mui/icons-material";
import Dropdown from "@/Components/Dropdown";

export default function Head({ isOpen, setIsOpen }) {
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                padding: "16px 24px",
                height: "64px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f5c542", // 明るい黄色
                boxShadow: 2, // シャドウを追加
            }}
        >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ marginLeft: "-16px" }}
            >
                <Avatar sx={{ bgcolor: "primary.main" }}>D</Avatar> {/* 初期を「D」に変更 */}
            </Button>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: "-8px", marginTop: "4px" }}>
                シフト提出アプリ
            </Typography>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Logout sx={{ marginRight: 1 }} />
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                        ログアウト
                    </Dropdown.Link>
                </MenuItem>
            </Menu>
            <IconButton onClick={handleToggle} sx={{ paddingLeft: 1 }}>
                <DensityMediumIcon sx={{ color: "black" }} />
            </IconButton>
        </Box>
    );
}
