import { useState } from "react";
import { Box, Typography, List, ListItem, Paper, Divider, Button } from "@mui/material";
import Head from "../Home/Head";
import Sidevar from "../Home/Sidevar";
import ShiftTable from "../Master/ShiftTable";

function Confirm({ myShifts, compShift }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            {/* Header and Sidebar */}
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}

            {/* Main Content Section */}
            <br />

            {/* Shift Table */}

            <ShiftTable datas={compShift} />
            <Box
                sx={{
                    p: { xs: 2, sm: 3 },
                    maxWidth: "900px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    marginTop: { xs: 3, sm: 5 },
                    paddingBottom: 3,
                }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                >
                    あなたの提出したシフトは以下です。
                </Typography>

                {/* Shift List */}
                <Box>
                    {myShifts.length === 0 ? (
                        <Paper
                            sx={{
                                p: 3,
                                backgroundColor: "#e9ecef",
                                borderRadius: "8px",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                                color: "gray",
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                来月分シフトは提出されていません。
                            </Typography>
                        </Paper>
                    ) : (
                        <List sx={{ padding: 0 }}>
                            {myShifts.map((shift) => (
                                <Paper
                                    key={shift.id}
                                    sx={{
                                        mb: 2,
                                        p: 2,
                                        borderRadius: "8px",
                                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#ffffff",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <ListItem sx={{ p: 0 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            {shift.date}
                                        </Typography>
                                    </ListItem>
                                </Paper>
                            ))}
                        </List>
                    )}
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 3 }} />




            </Box>
        </Box>
    );
}

export default Confirm;
