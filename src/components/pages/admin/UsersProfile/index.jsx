import { Box, Button, FormGroup, FormLabel, IconButton, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, ThemeProvider, Typography, createTheme, FormControlLabel } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import inputFontSize from '../../../elements/global/inputFontSize'
import PropTypes from 'prop-types';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AdminHead from '../../../elements/global/AdminHead'
import { UserProfileBuy, RialDeposit, cardNumber, WalletProfile, ReferalProfile } from '../../../utils/data';
import TableComponent from '../../../elements/global/TableComponent';
import { NorthEast } from '@mui/icons-material';
import FilterTable from '../../../elements/global/FilterTable';
import SpacialPagination from '../../../elements/global/SpacialPagination';
import DigiSwitch from '../../../elements/global/DigiSwitch';
import DAI from '../../../../img/icons/coin/dai.svg';
import StepOne from '../../../elements/verification/StepOne';
import StepThree from '../../../elements/verification/StepThree';
import SendIndentity from '../../../elements/global/SendIndentity';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const headstyle = {
    py: "16px",
    fontSize: "14px !important",
    textAlign: "left",
    color: "rgba(164, 166, 180, 1)",
    maxWidth: "200px",
    minWidth: "120px",
}

function PriceManagment() {
    const [tabvalue, setTabvalue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setTabvalue(newValue);
    };

    const handleOpenModal = (props) => (event) => {
        setopen(props)
    }

    function createData1(date, refcode, friendname, datecode, auth) {
        return { date, refcode, friendname, datecode, auth };
    }

    const rows = [
        {
            id: 1,
            date: "16 بهمن 1401",
            name: "تتر",
            DepositorName: "آرش زرندی",
            operation: "buy",
            number: "2154",
            rate: "29,500",
            total: "71,520,245",
            OrderNumber: "71520245",
            Condition: "success",
        },
    ];
    const rows1 = [
        {
            id: 1,
            date: "16 بهمن 1401",
            OrderNumber: "71520245",
            DepositorName: "آرش زرندی",
            mobile: "09154291249",
            cardnumber: "6104....9889",
            shabanumber: "52145....3658",
            price: "71,520,245",
            TrackingCode: "541541",
            Condition: "success",
            operation: "success",
        }
    ]

    const rowsWallet = [
        {
            id: 1,
            name: "دای",
            url: DAI,
            wallet: "VDDSVDBV968474SDBV3543DGKL",
            memo1: 5000,
            memo2: 5000,
            alt: "DAI"
        },

    ]
    const rowscardNumber = [
        {
            id: 1,
            bank: "16 بهمن 1401",
            cardnumber: "6104-5215-96549889",
            shabanumber: "5214521254895632153658",
            Condition: "success",
        }
    ]
    const rowsReferal = [
        {
            id: 1,
            date: "16 بهمن 1401",
            OrderNumber: "64516541",
            referalCode: "FEF5412",
            sahm: "10%",
            yourSahm: "45,000",
            TrackingCode: "15489632",
            Condition: "unseccess",
        }
    ]


    const cellstyle = {
        py: "24px",
        fontSize: "14px !important",
        textAlign: "center",
        fontWeight: "bold"
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: '#0f1628',
            },
        },
    });

    const boxbtnstyle = {
        border: "1px solid #afa6b4",
        borderRadius: "10px",
        height: "48px",
        width: "auto",
        px: "5px",
        py: "5px",
        display: "flex",
        ml: "auto"
    }

    const darkbtnstyle = {
        height: "35px",
        width: "auto",
        borderRadius: "8px",
    }

    const [btntext, setbtntext] = React.useState("withdraw")
    const handleBoxbtn = (props) => (event) => {
        setbtntext(props);
    }



    return (
        <>
            <AdminHead />
            <Box>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }} >
                    <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: { background: "#424BFB", height: 3 }
                        }}
                    >
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold" }} label={<span className={tabvalue === 0 ? "tab-color2" : ""}>خرید</span>} {...a11yProps(0)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 1 ? "tab-color2" : ""}>فروش</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 2 ? "tab-color2" : ""}>واریز و برداشت</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 3 ? "tab-color2" : ""}>همکاری در فروش</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 4 ? "tab-color2" : ""}>احراز هویت</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 5 ? "tab-color2" : ""}>کارت های بانکی</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 6 ? "tab-color2" : ""}>آدرس ولت ها</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold", margin: "0 10px" }} label={<span className={tabvalue === 7 ? "tab-color2" : ""}>تنظیمات</span>} {...a11yProps(1)} />
                        <Button sx={{ marginLeft: 'auto' }} color="inherit" className='boldfont' endIcon={<KeyboardArrowLeftIcon />} onClick={handleOpenModal(true)} >
                            مشاهده همه
                        </Button>
                    </Tabs>
                </Box>
            </Box>
            <Box>
                <TabPanel value={tabvalue} index={0}>
                    <Box className='row' >
                        <FilterTable />
                        <TableComponent TableHeader={UserProfileBuy}>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                                    style={{ border: "none" }}
                                >
                                    <TableCell sx={cellstyle} component="th" scope="row"> {row.date} </TableCell>
                                    <TableCell sx={cellstyle}>{row.name}</TableCell>
                                    <TableCell sx={cellstyle}>{row.operation === "buy" ? <span>خرید</span> : row.operation === "sell" ? <span>فروش</span> : "درحال بررسی"}</TableCell>
                                    <TableCell sx={cellstyle}>{row.number}</TableCell>
                                    <TableCell sx={cellstyle}>{row.rate}</TableCell>
                                    <TableCell sx={cellstyle}>{row.total}</TableCell>
                                    <TableCell sx={cellstyle}>{row.OrderNumber}</TableCell>
                                    <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در حال پردازش"}</TableCell>
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
                </TabPanel>
                <TabPanel value={tabvalue} index={1}>
                    <Box className='row ' >
                        <ThemeProvider theme={theme} >
                            <Box sx={boxbtnstyle} className="mb-4">
                                <Button variant={btntext === "processing" ? "contained" : "standard"}
                                    sx={btntext === "processing" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("processing")}
                                >درحال پردازش</Button>
                                <Button variant={btntext === "cancel" ? "contained" : "standard"}
                                    sx={btntext === "cancel" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("cancel")}
                                >لغو شده</Button>
                                <Button variant={btntext === "success" ? "contained" : "standard"}
                                    sx={btntext === "success" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("success")}
                                >تکمیل شده</Button>
                                <Button
                                    variant={btntext === "all" ? "contained" : "standard"}
                                    sx={btntext === "all" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("all")}
                                >همه</Button>
                            </Box>
                        </ThemeProvider>
                        <TableComponent TableHeader={UserProfileBuy}>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                                    style={{ border: "none" }}
                                >
                                    <TableCell sx={cellstyle} component="th" scope="row"> {row.date} </TableCell>
                                    <TableCell sx={cellstyle}>{row.name}</TableCell>
                                    <TableCell sx={cellstyle}>{row.operation === "buy" ? <span>خرید</span> : row.operation === "sell" ? <span>فروش</span> : "درحال بررسی"}</TableCell>
                                    <TableCell sx={cellstyle}>{row.number}</TableCell>
                                    <TableCell sx={cellstyle}>{row.rate}</TableCell>
                                    <TableCell sx={cellstyle}>{row.total}</TableCell>
                                    <TableCell sx={cellstyle}>{row.OrderNumber}</TableCell>
                                    <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در حال پردازش"}</TableCell>
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
                </TabPanel>
                <TabPanel value={tabvalue} index={2}>
                    <Box className='row' >
                        <FilterTable />
                        <TableComponent TableHeader={RialDeposit}>
                            {rows1.map((row) => (
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
                                    <TableCell sx={cellstyle}>{row.shabanumber}</TableCell>
                                    <TableCell sx={cellstyle}>{row.price}</TableCell>
                                    <TableCell sx={cellstyle}>{row.TrackingCode}</TableCell>
                                    <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>واریز شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در انتظار واریز"}</TableCell>
                                    {/* <TableCell sx={cellstyle}>{row.operation === "buy" ? <span>خرید</span> : row.operation === "sell" ? <span>فروش</span> : "درحال بررسی"}</TableCell> */}
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
                </TabPanel>
                <TabPanel value={tabvalue} index={3}>
                    <Box className='row' >
                        <FilterTable />
                        <TableComponent TableHeader={ReferalProfile}>
                            {rowsReferal.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                                    style={{ border: "none " }}
                                >
                                    <TableCell sx={cellstyle} component="th" scope="row">
                                        {/* <img src={row.url} alt="" /> */}
                                        {row.date}
                                    </TableCell>
                                    <TableCell sx={cellstyle} component="th" scope="row"> {row.OrderNumber} </TableCell>
                                    <TableCell sx={cellstyle}>{row.referalCode}</TableCell>
                                    <TableCell sx={cellstyle}>{row.sahm}</TableCell>
                                    <TableCell sx={cellstyle}>{row.yourSahm}</TableCell>
                                    <TableCell sx={cellstyle}>{row.TrackingCode}</TableCell>
                                    {/* <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در حال پردازش"}</TableCell> */}
                                    <TableCell sx={cellstyle} className="d-flex align-items-center justify-content-around">
                                        {row.Condition === "success" ? <span>واریز شده</span> : row.Condition === "unseccess" ? <span>واریز نشده</span> : <span>درحال بررسی</span>}
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
                </TabPanel>
                <TabPanel value={tabvalue} index={4}>
                    <Box className='row' >
                        <StepOne title="اطلاعات هویتی" btnname="تایید اطلاعات" btnClick={() => console.log("test")}  />
                        <hr />
                         <SendIndentity/>           
                    </Box>
                </TabPanel>
                <TabPanel value={tabvalue} index={5}>
                    <Box className='row' >
                        <FilterTable />
                        <TableComponent TableHeader={cardNumber}>
                            {rowscardNumber.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                                    style={{ border: "none" }}
                                >
                                    <TableCell sx={cellstyle} component="th" scope="row"> {row.bank} </TableCell>
                                    <TableCell sx={cellstyle}>{row.cardnumber}</TableCell>
                                    <TableCell sx={cellstyle}>{row.shabanumber}</TableCell>
                                    {/* <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در حال پردازش"}</TableCell> */}
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
                </TabPanel>
                <TabPanel value={tabvalue} index={6}>
                    <Box className='row' >
                        <ThemeProvider theme={theme} >
                            <Box sx={boxbtnstyle} className="mb-4">
                                <Button variant={btntext === "USDT" ? "contained" : "standard"}
                                    sx={btntext === "USDT" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("USDT")}
                                >USDT</Button>
                                <Button variant={btntext === "BUSD" ? "contained" : "standard"}
                                    sx={btntext === "BUSD" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("BUSD")}
                                >BUSD</Button>
                                <Button variant={btntext === "DAI" ? "contained" : "standard"}
                                    sx={btntext === "DAI" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("DAI")}
                                >DAI</Button>
                                <Button variant={btntext === "USDC" ? "contained" : "standard"}
                                    sx={btntext === "USDC" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("USDC")}
                                >USDC</Button>
                                <Button
                                    variant={btntext === "all" ? "contained" : "standard"}
                                    sx={btntext === "all" ? darkbtnstyle : {}}
                                    onClick={handleBoxbtn("all")}
                                >همه</Button>
                            </Box>
                        </ThemeProvider>
                        <TableComponent TableHeader={WalletProfile}>
                            {rowsWallet.map((row) => (
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
                                    <TableCell sx={cellstyle} component="th" scope="row"> {row.wallet} </TableCell>
                                    <TableCell sx={cellstyle}>{row.memo1}</TableCell>
                                    <TableCell sx={cellstyle}>{row.memo2}</TableCell>
                                    {/* <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>تکمیل شده</span> : row.status === "unsuccess" ? <span> لغو شده</span> : "در حال پردازش"}</TableCell> */}
                                    <TableCell sx={cellstyle} className="d-flex align-items-center justify-content-around">
                                        <Box className="d-flex align-items-end" dir="ltr">
                                            <div  >
                                                <IconButton
                                                    sx={{ border: "1px solid #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                                    fontSize="large"
                                                >
                                                    <NorthEast />


                                                </IconButton>
                                            </div>

                                        </Box>
                                        <DigiSwitch defaultChecked={true} cheched={true} />
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
                </TabPanel>
                <TabPanel value={tabvalue} index={7}>
                    <Box className='row' sx={{ width: "300px" }}>
                        <Box className="d-flex align-items-center  justify-content-between py-3">
                            <Box className="d-flex align-items-end" dir="ltr">
                                <Box className='ms-4'  >
                                    <Typography variant="span" component="div" className='boldfont'>
                                        وضعیت حساب کاربری
                                    </Typography>
                                </Box>
                            </Box>
                            <DigiSwitch defaultChecked={true} cheched={true} />
                        </Box>
                        <Box className="d-flex align-items-center  justify-content-between py-3">
                            <Box className="d-flex align-items-end" dir="ltr">
                                <Box className='ms-4'  >
                                    <Typography variant="span" component="div" className='boldfont'>
                                        معامله فروش
                                    </Typography>
                                </Box>
                            </Box>
                            <DigiSwitch defaultChecked={true} cheched={true} />
                        </Box>
                        <Box className="d-flex align-items-center  justify-content-between py-3">
                            <Box className="d-flex align-items-end" dir="ltr">
                                <Box className='ms-4'  >
                                    <Typography variant="span" component="div" className='boldfont'>
                                        معامله خرید
                                    </Typography>
                                </Box>
                            </Box>
                            <DigiSwitch defaultChecked={true} cheched={true} />
                        </Box>
                        <Box className="d-flex align-items-center  justify-content-between py-3">
                            <Box className="d-flex align-items-end" dir="ltr">
                                <Box className='ms-4'  >
                                    <Typography variant="span" component="div" className='boldfont'>
                                        کاربر VIP
                                    </Typography>
                                </Box>
                            </Box>
                            <DigiSwitch defaultChecked={true} cheched={true} />
                        </Box>
                    </Box>
                </TabPanel>
            </Box>
        </>
    )
}

export default PriceManagment