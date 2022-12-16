import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
// import AdminHead from '../../../elements/global/AdminHead'
import AdminHead from '../../elements/global/AdminHead'
import TableComponent from '../../elements/global/TableComponent'
// import { ReactComponent as DAI } from '../../../img/icons/coin/dai.svg';
// import { ReactComponent as USD } from '../../../img/icons/coin/Group 3.svg';
// import { ReactComponent as Qr } from '../../../img/icons/qr.svg';
// import DigiSwitch from '../../elements/global/DigiSwitch'
import SpacialPagination from '../../elements/global/SpacialPagination'
import DigiSwitch from '../../elements/global/DigiSwitch'
import { Referal } from '../../utils/data'
import FilterTable from '../../elements/global/FilterTable'

function deposit() {
    function createData(date, OrderNumber, DepositorName, mobile, network, txid,wallet, number, Condition, operation) {
        return { date, OrderNumber, DepositorName, mobile, network, txid,wallet, number, Condition, operation };
    }

    const rows = [
        {
            id: 1,
            date: "16 بهمن 1401",
            OrderNumber: "64516541",
            DepositorName: "آرش زرندی",
            mobile: "09154291249",
            referalCode: "FEF5412",
            sahm: "10%",
            yourSahm: "45,000",
            TrackingCode: "15489632",
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
                <FilterTable title="همکاری در فروش"/>
                <TableComponent TableHeader={Referal}>
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
                            <TableCell sx={cellstyle}>{row.referalCode}</TableCell>
                            <TableCell sx={cellstyle}>{row.sahm}</TableCell>
                            <TableCell sx={cellstyle}>{row.yourSahm}</TableCell>
                            <TableCell sx={cellstyle}>{row.TrackingCode}</TableCell>
                            <TableCell sx={cellstyle} >
                                {/* <Svg Component={Qr} alt="trash" className='ms-4' style={{ cursor: "pointer" }} /> */}
                                {row.Condition === "success" ? <span>واریز شده</span> : row.status === "unsuccess" ? <p > واریز نشده</p> : "درحال بررسی"}
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