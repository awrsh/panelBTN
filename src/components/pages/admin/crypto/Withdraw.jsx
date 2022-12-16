import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
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
import { CryptoDeposit } from '../../../utils/data'
import FilterTable from '../../../elements/global/FilterTable'


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
            network: "TRC-20",
            txid: "ERWRWE.....2345DV",
            wallet: "ERWRWE.....2345DV",
            number: "52000",
            Condition: "در انتظار تایید",
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
                <FilterTable  title="درخواست های برداشت - تتر"/>
                <TableComponent TableHeader={CryptoDeposit}>
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
                            <TableCell sx={cellstyle}>{row.network}</TableCell>
                            <TableCell sx={cellstyle}>{row.txid}</TableCell>
                            <TableCell sx={cellstyle}>{row.wallet}</TableCell>
                            <TableCell sx={cellstyle}>{row.number}</TableCell>
                            <TableCell sx={cellstyle}>{row.Condition}</TableCell>
                            <TableCell sx={cellstyle}>{row.operation}</TableCell>
                            <TableCell sx={cellstyle}>
                                {/* <Svg Component={Qr} alt="trash" className='ms-4' style={{ cursor: "pointer" }} /> */}
                                {row.status === "success" ? <p>Grenn</p> : row.status === "warning" ? <p > yellow</p> : "error"}
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