import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // CSRFトークンをAxiosのデフォルトヘッダーに設定
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            // 成功時の処理
        } catch (err) {
            setError('登録に失敗しました。');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>名前:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>メールアドレス:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>パスワード:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">新規登録</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default RegisterForm;
