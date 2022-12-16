import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const headstyle = {
    py: "16px",
    fontSize: "14px !important",
    textAlign: "center",
    color: "rgba(164, 166, 180, 1)",
    maxWidth: "200px",
    minWidth: "120px",
}



function TableComponent({ TableHeader, children }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {TableHeader.map(item => (
                            <TableCell key={item.id} style={headstyle}>
                                {item.header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody >
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent