import { useForm } from "@inertiajs/react";
import { Box, TextField, Typography, Button } from "@mui/material"; // ButtonをMUIからインポート
import { useEffect } from "react";
import { useState } from "react";

function AddMaster() {
    const { setData, post } = useForm({ email: "" });
    const [email, setEmail] = useState("");
    useEffect(() => {
        setData("email", email); // フォームにメールアドレスを設定

    }, [email])
    const handleSubmit = () => {
        if (email.length == 0) {
            return alert("メールアドレスを入力してください")
        }
        setData("email", email); // フォームにメールアドレスを設定
        setEmail(""); // 入力フィールドをクリア
        post(route("master.store3"), {
            onSuccess: () => {
                alert("登録に成功しました。");
            }
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80%',
                maxWidth: '400px',
                margin: '8px auto',
                marginBottom: "24px",
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 3,
                backgroundColor: 'white',
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
                追加する管理者のメールアドレスを記入してください
            </Typography>

            <TextField
                type="email"
                label="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ marginBottom: '16px' }}
            />

            <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    padding: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#1976d2',
                    },
                }}
            >
                追加
            </Button>
        </Box>
    );
}

export default AddMaster;
