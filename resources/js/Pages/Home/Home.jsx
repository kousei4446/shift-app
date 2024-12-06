import { useState } from "react";
import Head from "./Head";
import Sidevar from "./Sidevar";
import { QuickActions } from "./QuickAction";
import { UserSummary } from "./UserSummary";
import { ShiftSummary } from "./ShiftSummary";

function Home({ compShift }) {
    const [isOpen, setIsOpen] = useState(false);

    // 日付でソートされたデータ
    const sortedData = compShift.sort((a, b) => new Date(a.date) - new Date(b.date));

    const now = new Date(); // 現在の日時オブジェクト
    const currentMonth = now.getMonth(); // 現在の月 (0-11)
    const currentYear = now.getFullYear(); // 現在の年

    // 現在の月以降の日付をフィルタリング（現在の月または未来の月）
    const data = sortedData.filter(day => {
        const shiftDate = new Date(day.date);
        const shiftMonth = shiftDate.getMonth();
        const shiftYear = shiftDate.getFullYear();

        // もしシフトの月が現在の月以降（年を跨ぐ場合も対応）
        return shiftYear > currentYear || (shiftYear === currentYear && shiftMonth >= currentMonth);
    });

    // 最初に見つかるシフト日を取得、見つからなければメッセージを表示
    const mes = sortedData.find((day) => new Date(day.date) >= now)?.date || "シフトがまだ確定していません。";

    return (
        <div>
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}
            <div style={{ marginBottom: "8px" }}></div>
            <UserSummary mes={mes} />
            <QuickActions />
            <ShiftSummary data={data} />
        </div>
    );
}

export default Home;
