import React from 'react';
import { MenuItem } from '@mui/material';
import Dropdown from "@/Components/Dropdown";

function LogoutModal({ setOpen }) {


    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                zIndex: 1000,
            }}
        >
            <p style={{ marginBottom: '20px', color: "black" }}>本当にログアウトしますか？</p>
            <MenuItem
                sx={{
                    backgroundColor: '#E74C3C',
                    color: '#fff',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                }}
            >
                <Dropdown.Link style={{ color: "white" }} href={route('logout')} method="post" as="button">
                    はい
                </Dropdown.Link>

            </MenuItem>
            <button
                onClick={() => setOpen(false)}
                style={{
                    backgroundColor: '#3498DB',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                }}
            >
                いいえ
            </button>
        </div>
    );
}

export default LogoutModal;
