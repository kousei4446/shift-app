import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

    // PDF生成用の関数
    const generatePDF = () => {
        const input = document.getElementById('shift-table');
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

    const renderEmptyCells = (userCount) => {
        // ユーザー数に応じた空のセルを生成
        const emptyCells = [];
        for (let i = 0; i < 2 - userCount; i++) {
            emptyCells.push(
                <td key={`empty-${i}`} style={cellStyle}></td>
            );
        }
        return emptyCells;
    };

    const cellStyle = {
        padding: '8px',
        textAlign: 'center',
        borderRight: '1px solid #ddd', // 列間の枠線
    };

    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
            {/* PDFダウンロードボタン */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <h3 style={{ marginRight: '20px', fontSize: "24px", fontWeight: "bold" }}>シフト一覧</h3>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: '#007bff',
                            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                    onClick={generatePDF}
                >
                    <FileDownloadIcon sx={{ mr: 1 }} />
                    PDFダウンロード
                </Button>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table id="shift-table" style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '16px',
                    tableLayout: 'fixed',
                    borderRadius: '8px', // テーブルの角を丸くする
                    border: '2px solid #ddd', // 薄い枠線
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 影を追加
                }}>
                    <thead>
                        <tr>
                            <th style={headerStyle}>日付</th>
                            <th style={headerStyle}>名前</th>
                            <th style={headerStyle}></th>
                            <th style={headerStyle}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedDates.map((date, index) => {
                            const isWednesday = new Date(date).getDay() === 3;
                            const userCount = groupedDatas[date].length;

                            return (
                                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{
                                        ...cellStyle,
                                        backgroundColor: isWednesday ? '#d0f0c0' : 'transparent',
                                    }}>
                                        {date.substring(5)}
                                    </td>
                                    {groupedDatas[date].map((user, userIndex) => (
                                        <td key={userIndex} style={cellStyle}>
                                            {user}
                                        </td>
                                    ))}
                                    {renderEmptyCells(userCount)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

const headerStyle = {
    padding: '12px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    fontSize: '0.9rem',
    borderBottom: '2px solid #ddd', // 下部の枠線
};

export default ShiftTable;
