import React from 'react'
import { Box, Button, IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { Lastpay, TableHeaderCoinList } from '../../utils/data'
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
import { Add, NorthEast, SouthWest } from '@mui/icons-material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';




function CoinList() {
   

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


    const rows2 = [
        {
            id: 1,
            name: "دای",
            date: "23 بهمن 1504",
            operation: 'sell',
            number: 852,
            price: "29.200",
            total: "215,202,012",
            OrderNumber: 20154895,
            Condition: "success",
        },
    ]



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
                <Box className='d-flex align-items-center '>
                    <Typography variant="p" component="div" className='boldfont title-info'>
                        لیست ارزها
                    </Typography>
                    <Button sx={{ marginLeft: 'auto' }} color="inherit" className='boldfont' endIcon={<KeyboardArrowLeftIcon />}  >
                        مشاهده همه
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
                            <TableCell sx={cellstyle} className="d-flex align-items-center justify-content-around">
                                <Box className="d-flex align-items-end" dir="ltr">
                                    <div  >
                                        <IconButton
                                            sx={{ border: "1px solid #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                            fontSize="large"
                                        >
                                            <NorthEast />
                                        </IconButton>
                                        <IconButton
                                            sx={{ border: "1px solid #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                            fontSize="large"
                                        >
                                            <SouthWest />
                                        </IconButton>
                                        <IconButton
                                            sx={{ border: "1px dashed #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                            fontSize="large"
                                        >
                                            <Add />
                                        </IconButton>
                                    </div>

                                </Box>
                                <DigiSwitch defaultChecked={true} cheched={true} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableComponent>
            </Box>
            <Box className='py-5'>
                <Box className='d-flex align-items-center '>
                    <Typography variant="p" component="div" className='boldfont title-info'>
                        آخرین معاملات
                    </Typography>
                    <Button sx={{ marginLeft: 'auto' }} color="inherit" className='boldfont' endIcon={<KeyboardArrowLeftIcon />}  >
                        مشاهده همه
                    </Button>
                </Box>
                <Box>
                    <TableComponent TableHeader={Lastpay}>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.name}

                                sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                                style={{ border: "none" }}
                            >
                                <TableCell sx={cellstyle} component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell sx={cellstyle}>{row.name}</TableCell>
                                <TableCell sx={cellstyle} >{row.operation === "buy" ? <span>خرید</span> : row.operation === "sell" ? <span>فروش</span> :  "ثیت نشده"}</TableCell>
                                <TableCell sx={cellstyle}>{row.number}</TableCell>
                                <TableCell sx={cellstyle}>{row.price}</TableCell>
                                <TableCell sx={cellstyle}>{row.total}</TableCell>
                                <TableCell sx={cellstyle}>{row.OrderNumber}</TableCell>
                                <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.Condition === "processing" ? <span>درحال پردازش</span> : ""}</TableCell>
                                <TableCell sx={cellstyle} className="d-flex align-items-center justify-content-around">
                                <Box className="d-flex align-items-end" dir="ltr">
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
                </Box>
            </Box>
        </>
    )
}

export default CoinList