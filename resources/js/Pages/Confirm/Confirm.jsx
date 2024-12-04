import { useState } from "react";
import Head from "../Home/Head";
import Sidevar from "../Home/Sidevar";
import ShiftTable from "../Master/ShiftTable";

function Confirm({ myShifts, compShift }) {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(compShift);
    return (
        <div>
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            <p>あなたの提出したシフトは以下です。</p>
            <ul>
                {myShifts.length === 0 ?
                    <p style={{ color: "red" }}> シフトが提出されていません。</p>
                    :
                    myShifts.map((shift) => (
                        <li key={shift.id}>{shift.date}</li> // 日付をリストとして表示
                    ))}
            </ul>
            <ShiftTable datas={compShift} />
        </div >
    );
}

export default Confirm;
