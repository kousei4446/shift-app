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
                <table id="shift-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', tableLayout: 'fixed' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '12px', textAlign: 'center', backgroundColor: '#f1f1f1', fontSize: '0.9rem' }}>日付</th>
                            <th style={{ padding: '12px', textAlign: 'center', backgroundColor: '#f1f1f1', fontSize: '0.9rem' }}>名前</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedDates.map((date, index) => {
                            const isWednesday = new Date(date).getDay() === 3;
                            return (
                                <tr key={index}>
                                    <td style={{ padding: '12px', textAlign: 'center', backgroundColor: isWednesday ? '#d0f0c0' : 'transparent' }}>{date}</td>
                                    {groupedDatas[date].map((user, userIndex) => (
                                        <td key={userIndex} style={{ padding: '12px', textAlign: 'center' }}>{user}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShiftTable;
