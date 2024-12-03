import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ShiftTable.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';

function ShiftTable({ datas }) {

    const groupedDatas = datas.reduce((acc, curr) => {
        if (!acc[curr.date]) {
            acc[curr.date] = [];
        }
        acc[curr.date].push(curr.user_id);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedDatas).sort((a, b) => new Date(a) - new Date(b));

    // 日付ごとのシフトメンバーをグループ化する（既にオブジェクト形式なのでそのままでOK）

    // 日付をソート

    // PDF生成用の関数
    const generatePDF = () => {
        const input = document.getElementById('shift-table'); // テーブルのIDを指定
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 190; // PDF幅
                const pageHeight = pdf.internal.pageSize.height;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;

                let position = 0;

                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('shift_table.pdf'); // PDFファイル名を指定
            });
    };

    return (
        <div className="shift-table-container">
            <button onClick={generatePDF}><FileDownloadIcon /></button> {/* PDFダウンロードボタン */}
            <table id="shift-table">
                <thead>
                    <tr>
                        <th>日付</th>
                        <th>名前</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDates.map((date, index) => {
                        const isWednesday = new Date(date).getDay() === 3;
                        return (
                            <tr key={index}>
                                <td style={{ backgroundColor: isWednesday ? '#d0f0c0' : 'transparent' }}>{date}</td>
                                {groupedDatas[date].map((user, userIndex) => (
                                    <td key={userIndex}>{user}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ShiftTable;
