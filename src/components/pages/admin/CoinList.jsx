import React from 'react'
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import { TableHeaderCoinList } from '../../utils/data'
import { ReactComponent as Qr } from '../../../img/icons/qr.svg';
import { ReactComponent as AddCircle } from '../../../img/icons/circle-add.svg';
import AdminHead from '../../elements/global/AdminHead'
import TableComponent from '../../elements/global/TableComponent'
import DAI from '../../../img/icons/coin/dai.svg';
import binance from '../../../img/icons/coin/binance.svg';
import tether from '../../../img/icons/coin/tether.svg';
import usd from '../../../img/icons/coin/usd.svg';
import DigiSwitch from '../../elements/global/DigiSwitch'
import Svg from '../../utils/Svgs'
import SpacialPagination from '../../elements/global/SpacialPagination'





function CoinList() {
    function createData(name, PurchaseVolume, PurchaseNumber, SalesVolume, SalesNumber, inventory, operation) {
        return { name, PurchaseVolume, PurchaseNumber, SalesVolume, SalesNumber, inventory, operation };
    }

    // const rows = [
    //     createData('23 بهمن 1401', "71,545,230", "0", "71,545,230", "0", "71,545,230"),
    // ];
    const rows = [
        {
            id: 1,
            name: "دای",
            url: DAI,
            PurchaseVolume: 0,
            PurchaseNumber: 5000,
            SalesVolume: 5000,
            SalesNumber: 5000,
            inventory: 5000,
            operation: '',
            alt: "DAI"
        },
        {
            id: 2,
            name: "بایننس کوین",
            url: binance,
            PurchaseVolume: 0,
            PurchaseNumber: 5000,
            SalesVolume: 5000,
            SalesNumber: 5000,
            inventory: 5000,
            operation: '',
            alt: "BINANCE"
        },
        {
            id: 3,
            name: "تتر",
            url: tether,
            PurchaseVolume: 0,
            PurchaseNumber: 5000,
            SalesVolume: 5000,
            SalesNumber: 5000,
            inventory: 5000,
            operation: '',
            alt: "tether"
        },
        {
            id: 4,
            name: "یو اس دی کوین",
            url: usd,
            PurchaseVolume: 0,
            PurchaseNumber: 5000,
            SalesVolume: 5000,
            SalesNumber: 5000,
            inventory: 5000,
            operation: '',
            alt: "usd"
        },
    ];
    const cellstyle = {
        py: "24px",
        fontSize: "14px !important",
        textAlign: "left",
        fontWeight: 'bold'
    }

    return (
        <>
            <Box>
                <AdminHead />
            </Box>
            <Box className='py-3'>
                <Box className='d-flex align-items-center '>
                    <Typography variant="p" component="div" className='boldfont title-info'>
                        مدیریت ارزها
                    </Typography>
                    <Button sx={{ marginLeft: 'auto' }} color="inherit" className='boldfont' startIcon={<AddCircle />}  >
                        افزودن ارز جدید
                    </Button>
                </Box>
                <TableComponent TableHeader={TableHeaderCoinList} style={{ textAlign: "right !important" }}>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                            style={{ border: "none" }}
                        >
                            <TableCell sx={cellstyle} component="th" scope="row">
                                {/* <img src={row.url} alt="" /> */}
                                <img src={row.url} alt={row.alt} className="ms-2" width={25} />
                                {row.name}
                            </TableCell>
                            <TableCell sx={cellstyle}>{row.PurchaseVolume}</TableCell>
                            <TableCell sx={cellstyle}>{row.PurchaseNumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.SalesVolume}</TableCell>
                            <TableCell sx={cellstyle}>{row.SalesNumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.inventory}</TableCell>
                            <TableCell sx={cellstyle}>{row.operation}</TableCell>
                            <TableCell sx={cellstyle}>
                                <Svg Component={Qr} alt="trash" className='ms-4' style={{ cursor: "pointer" }} />
                                <DigiSwitch defaultChecked={true} cheched={true} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableComponent>
                <Box className='d-flex justify-content-center mb-3' dir="ltr">
                    <SpacialPagination
                        data={rows}
                        buttonConst={3}
                        contentPerPage={6}
                        siblingCount={4}
                    />
                </Box>
            </Box>
        </>
    )
}

export default CoinList