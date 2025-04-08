import React from 'react';
import { MenuItem } from '@mui/material';
import Dropdown from "@/Components/Dropdown";
import './LogoutModal.css';

function LogoutModal({ setOpen }) {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <p className="modal-message">本当にログアウトしますか？</p>
                <MenuItem className="modal-button red-button">
                    <Dropdown.Link className="modal-link" href={route('logout')} method="post" as="button">
                        はい
                    </Dropdown.Link>
                </MenuItem>
                <button
                    onClick={() => setOpen(false)}
                    className="modal-button blue-button"
                >
                    いいえ
                </button>
            </div>
        </div>
    );
}

export default LogoutModal;
