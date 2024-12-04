import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

function AddMaster() {
    const { setData, post } = useForm({ email: "" })
    const [email, setEmail] = useState("")
    const handleSubmit = () => {
        setData("email", email);
        setEmail("")
        post(route("master.store3"), {
            onSuccess: () => {
                alert("登録に成功しました。")
            }
        })
    }
    useEffect(() => {
        setData("email", email);
    }, [email])
    return (
        <>
            <p>追加する管理者のメールアドレスを記入してください</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>追加</button>
        </>
    )
}
export default AddMaster;