import { Box, Button, IconButton, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import AdminHead from '../../../elements/global/AdminHead'
import TableComponent from '../../../elements/global/TableComponent'
// import { ReactComponent as DAI } from '../../../img/icons/coin/dai.svg';
// import { ReactComponent as USD } from '../../../img/icons/coin/Group 3.svg';
// import { ReactComponent as Qr } from '../../../img/icons/qr.svg';
// import DigiSwitch from '../../elements/global/DigiSwitch'
import Svg from '../../../utils/Svgs'
import SpacialPagination from '../../../elements/global/SpacialPagination'
import DigiSwitch from '../../../elements/global/DigiSwitch'
import { RialDeposit } from '../../../utils/data'
import FilterTable from '../../../elements/global/FilterTable'
import { NorthEast } from '@mui/icons-material'

function deposit() {
    function createData(date, OrderNumber, DepositorName, mobile, network, txid, wallet, number, Condition, operation) {
        return { date, OrderNumber, DepositorName, mobile, network, txid, wallet, number, Condition, operation };
    }

    const rows = [
        {
            id: 1,
            date: "16 بهمن 1401",
            OrderNumber: "64516541",
            DepositorName: "آرش زرندی",
            mobile: "09154291249",
            cardnumber: "6215...1254",
            shabaNumber: "2154....3258",
            countToman: "75,254,023",
            number: "52000",
            Condition: "success",
        },
    ];
    const cellstyle = {
        py: "24px",
        fontSize: "14px !important",
        textAlign: "center",
        fontWeight: 'bold'
    }
    return (
        <>
            <Box>
                <AdminHead />
            </Box>
            <Box className='py-3'>
                <FilterTable title="تراکنش واریز بانکی - ریال" />
                <TableComponent TableHeader={RialDeposit}>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                            style={{ border: "none" }}
                        >
                            <TableCell sx={cellstyle} component="th" scope="row"> {row.date} </TableCell>
                            <TableCell sx={cellstyle}>{row.OrderNumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.DepositorName}</TableCell>
                            <TableCell sx={cellstyle}>{row.mobile}</TableCell>
                            <TableCell sx={cellstyle}>{row.cardnumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.shabaNumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.countToman}</TableCell>
                            <TableCell sx={cellstyle}>{row.number}</TableCell>
                            <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تایید شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در انتظار تایید"}</TableCell>
                            <TableCell sx={cellstyle}>
                                <Box dir="ltr">
                                    <Box>
                                        <IconButton
                                            sx={{ border: "1px solid #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                            fontSize="large"
                                        >
                                            <NorthEast />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableComponent>
                <Box className='d-flex justify-content-center mb-3' dir="ltr">
                    <SpacialPagination
                        data={rows}
                        buttonConst={2}
                        contentPerPage={3}
                        siblingCount={4}
                    />
                </Box>
            </Box>
        </>
    )
}

export default deposit