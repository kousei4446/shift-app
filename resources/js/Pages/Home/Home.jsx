import { useState } from "react";
import Head from "./Head";
import Sidevar from "./Sidevar";
import { QuickActions } from "./QuickAction";
import { UserSummary } from "./UserSummary";
import { ShiftSummary } from "./ShiftSummary";

function Home({ compShift }) { // csrfTokenをpropsから受け取る
    const [isOpen, setIsOpen] = useState(false);
    // console.log(compShift)
    const sortedData = compShift.sort((a, b) => new Date(a.date) - new Date(b.date));
    const now = new Date(); // 現在の日時オブジェクト
    const mes = sortedData.find((day) => new Date(day.date) >= now)?.date || "シフトがまだ確定していません。";
    return (
        <div>
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            <div style={{ marginBottom: "8px" }}></div>
            <UserSummary mes={mes} />
            <QuickActions />
            <ShiftSummary data={sortedData} />

        </div>
    );
}

export default Home;
