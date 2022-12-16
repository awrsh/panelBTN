import { Box, Button, FormGroup, FormLabel, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import inputFontSize from '../../elements/global/inputFontSize'
import PropTypes from 'prop-types';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



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

    const infobox = {
        height: "auto",
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: "8px",
    }
    const textfieldstyle = {
        mb: "24",
    }
    const handleOpenModal = (props) => (event) => {
        setopen(props)
    }
    function createData(date, time, putchasePrice, salesPrice, purchaseBuyChanges, purchaseSaleChanges) {
        return { date, time, putchasePrice, salesPrice, purchaseBuyChanges, purchaseSaleChanges };
    }
    function createData1(date, refcode, friendname, datecode, auth) {
        return { date, refcode, friendname, datecode, auth };
    }

    const rows = [
        createData("23 بهمن 1405", "20:20:20", "35,250", "35,250", "-0.05%", "-0.05%"),
    ]
    const rows1 = [
        createData1("1", "FBGHFKJF", "آرش  زرندی", "23 تیر 1378", "احراز هویت شده "),
    ]

    const rowstyle = {
        '&:last-child td, &:last-child th': { border: 0 },
        borderTop: "1px solid #afa6b4",
        // borderTop:"1px solid rgba(203, 228, 235, 1)",
    }
    const cellstyle = {
        py: "24px",
        fontSize: "14px !important",
        textAlign: "left",
        fontWeight: "bold"
    }
    return (
        <>
            <Box className="row d-flex justify-content-center mycontainer backgroundClr" >
                <Box sx={infobox} className="row justify-content-between align-items-center">
                    <Typography variant="h6" component="div" className='boldfont title-info'>
                        مدیریت قیمت
                    </Typography>
                    <Box className='d-flex justify-content-between flex-wrap'>
                        <Box sx={{ pb: "32px", pt: "24px" }} className="col-lg-6 col-12 px-3">
                            <form>
                                <Box className="row" >
                                    <FormGroup sx={{ mb: "32px" }}>
                                        <FormLabel>قیمت خرید</FormLabel>
                                        <TextField
                                            color='digi'
                                            variant="outlined"
                                            type="number"
                                            placeholder="مثال : 39,520"
                                            sx={textfieldstyle}
                                            // helperText={errortext.phone}
                                            // value={formdata.phone}
                                            // onChange={handleChnageFormData('phone')}
                                            InputProps={{
                                                style: inputFontSize,
                                            }}
                                        />
                                    </FormGroup>
                                </Box>
                            </form>
                        </Box>
                        <Box sx={{ pb: "32px", pt: "24px" }} className="col-lg-6 col-12 pe-3">
                            <form>
                                <Box className="row" >
                                    <FormGroup sx={{ mb: "32px" }}>
                                        <FormLabel>قیمت فروش</FormLabel>
                                        <TextField
                                            color='digi'
                                            variant="outlined"
                                            type="number"
                                            placeholder="مثال : 39,520"
                                            sx={textfieldstyle}
                                            // helperText={errortext.phone}
                                            // value={formdata.phone}
                                            // onChange={handleChnageFormData('phone')}
                                            InputProps={{
                                                style: inputFontSize,
                                            }}
                                        />
                                    </FormGroup>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                    <Box className='col-12 col-lg-2 col-md-4 mb-5 me-auto'>
                        <Button
                            variant="contained"
                            sx={{ fontSize: "14px", height: "55px", borderRadius: "8px", BoxShadow: "unset", backgroundColor: "rgba(66, 75, 251, 1)" }}
                            fullWidth
                        >
                            ثبت تغییرات
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Typography variant="h6" component="div" className='boldfont title-info'>
                تاریخچه تغییرات قیمت
            </Typography>
            <Box>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }} >
                    <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: { background: "#424BFB", height: 3 }
                        }}
                    >
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold" }} label={<span className={tabvalue === 0 ? "tab-color2" : ""}>نمایش جدولی</span>} {...a11yProps(0)} />
                        <Tab sx={{ padding: "32px 0 16px 1px", fontWeight: "bold" , marginLeft: "15px"}} label={<span className={tabvalue === 1 ? "tab-color2" : ""}>نمایش نموداری</span>} {...a11yProps(1)} />
                        <Button sx={{ marginLeft: 'auto' }} color="inherit" className='boldfont' endIcon={<KeyboardArrowLeftIcon />} onClick={handleOpenModal(true)} >
                            مشاهده همه
                        </Button>
                    </Tabs>
                </Box>
            </Box>
            <Box>
                <TabPanel value={tabvalue} index={0}>
                    <Box className='row' >
                        <TableContainer className="table-cnt">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={headstyle}>تاریخ</TableCell>
                                        <TableCell sx={headstyle}>ساعت</TableCell>
                                        <TableCell sx={headstyle}>قیمت خرید</TableCell>
                                        <TableCell sx={headstyle}>قیمت فروش</TableCell>
                                        <TableCell sx={headstyle}>درصد تغییرات قیمت خرید</TableCell>
                                        <TableCell sx={headstyle}>درصد تغییرات قیمت فروش</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, idx) => (
                                        <TableRow
                                            key={idx}
                                            sx={rowstyle}
                                        >
                                            <TableCell sx={cellstyle}>{row.date}

                                            </TableCell>
                                            <TableCell sx={cellstyle}>
                                                {row.time}
                                            </TableCell>
                                            <TableCell sx={cellstyle}>{row.putchasePrice}</TableCell>
                                            <TableCell sx={cellstyle} className="d-flex align-items-center">
                                                {row.salesPrice}
                                            </TableCell>
                                            <TableCell sx={cellstyle}>
                                                {row.purchaseBuyChanges}
                                            </TableCell>
                                            <TableCell sx={cellstyle}>
                                                {row.purchaseSaleChanges}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </TabPanel>
                <TabPanel value={tabvalue} index={1}>
                    <Box className='row' >
                        <TableContainer className="table-cnt">
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={headstyle}>ردیف</TableCell>
                                        <TableCell sx={headstyle}>کد دعوت</TableCell>
                                        <TableCell sx={headstyle}>نام دوست شما</TableCell>
                                        <TableCell sx={headstyle}>تاریخ استفاده از کد دعوت</TableCell>
                                        <TableCell sx={headstyle}>وضعیت حساب کاربری</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows1.map((row, idx) => (
                                        <TableRow key={idx} sx={rowstyle} >
                                            <TableCell sx={cellstyle}>{row.date}

                                            </TableCell>
                                            <TableCell sx={cellstyle}>
                                                {row.refcode}
                                                {/* <Svg Component={svgsicon} alt="copy-clipboard" className='me-4' style={{ cursor: "pointer" }} /> */}

                                            </TableCell>
                                            <TableCell sx={cellstyle}>{row.friendname}</TableCell>
                                            <TableCell sx={cellstyle}>{row.datecode}</TableCell>
                                            <TableCell sx={cellstyle}>{row.auth}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </TabPanel>
            </Box>
        </>
    )
}

export default PriceManagment