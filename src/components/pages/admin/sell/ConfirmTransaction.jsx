import React from 'react'
import FormInfo from '../../../elements/buy/FormInfo'
import AdminHead from '../../../elements/global/AdminHead'
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import { items3, TableHeader, walletTitle2 } from '../../../utils/data'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ReactComponent as svgsicon } from '../../../../img/icons/copy-clipboard.svg'
import Svg from '../../../utils/Svgs'
import TextField from '@mui/material/TextField';
import { ThreeSixtyRounded } from '@mui/icons-material'
import TableComponent from '../../../elements/global/TableComponent'



function SendUser() {
    const walletUser = {
        wallet: "ADSGDSG454350LHJ235235235FSADlksjdvlkhdsv"
    }
    const walletAdmin = {
        wallet: "asfsadf324235243653245235234ADSGDSG454350LHJFSADlksjdvlkhdsv"
    }
    const txid = {
        wallet: "ADSGDSG454350LHJFSAasfsafsafsafsafsafDlksjdvlkhdsv"
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    return (
        <Box>
            <AdminHead />
            <Box className="d-flex row">
                <Box className="col-lg-6 col-12 mycontainer">
                    <FormInfo title="جزئیات سفارش" items={items3} />
                    <Button
                        variant="contained"
                        sx={{ fontSize: "14px", height: "55px", borderRadius: "8px", BoxShadow: "unset", backgroundColor: "rgba(121, 123, 148, 1)" }}
                        fullWidth
                    >
                        ویرایش سفارش
                    </Button>
                </Box>
                <Box className='col-lg-6 col-12 mycontainer'>
                    <Typography variant="h5" component="div" className='boldfont title-info'>
                        توضیحات سفارش
                    </Typography>
                    <Stack sx={{ width: '100%', fontSize: "20px" }} spacing={2}>
                        <Alert severity="error" icon={false} sx={{ fontSize: "14px", fontWeight: "bold" }} > اپراتور گرامی ، پس از چک کردن دقیق تعداد ارز واریزی توسط کاربر و TXID ، نسبت به تایید انتقال ارز اقدام نمایید.</Alert>
                    </Stack>
                    <Box className='titlemini py-1 mt-3'>
                        <Box className="border-right-marginboldblue titlemindialog">
                            {walletTitle2.map(item => (
                                <Typography variant="p" component="div" sx={{ fontSize: "14px" }} >
                                    <span className='desc-icon'>
                                        {item.price}
                                    </span>   
                                    {' '}
                                    از ولت زیر
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Alert severity="info" icon={false} className='py-2'>
                            <Box className='d-flex align-items-center '>
                                <Box>
                                    <Svg Component={svgsicon} alt="copy-clipboard" className='ms-4' style={{ cursor: "pointer" }} />
                                </Box>
                                <Typography >
                                    {walletUser.wallet}
                                </Typography>
                            </Box>
                        </Alert>
                    </Box>
                    <Box className='titlemini py-1 mt-3'>
                        <Box className="border-right-marginboldblue titlemindialog">
                            {walletTitle2.map(item => (
                                <Typography variant="p" component="div" sx={{ fontSize: "14px" }} >
                                   به ولت
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Alert severity="info" icon={false} className='py-2'>
                            <Box className='d-flex align-items-center '>
                                <Box>
                                    <Svg Component={svgsicon} alt="copy-clipboard" className='ms-4' style={{ cursor: "pointer" }} />
                                </Box>
                                <Typography >
                                    {walletAdmin.wallet}
                                </Typography>
                            </Box>
                        </Alert>
                    </Box>
                    <Box className='titlemini py-1 mt-3'>
                        <Box className="border-right-marginboldblue titlemindialog">
                            {walletTitle2.map(item => (
                                <Typography variant="p" component="div" sx={{ fontSize: "14px" }} >
                                   با TXID زیر
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Alert severity="info" icon={false} className='py-2'>
                            <Box className='d-flex align-items-center '>
                                <Box>
                                    <Svg Component={svgsicon} alt="copy-clipboard" className='ms-4' style={{ cursor: "pointer" }} />
                                </Box>
                                <Typography >
                                    {txid.wallet}
                                </Typography>
                            </Box>
                        </Alert>
                    </Box>
                    <Box>
                        <Typography className='py-4' sx={{ fontSize: "14px", fontWeight: "bold" }}>
                            باید واریز شده باشد. اگر تراکنش انجام شده است ، نسبت به تایید اقدام نمایید.
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { mt: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField disabled id="outlined-basic" label={txid.text} variant="outlined" />
                        </Box>
                    </Box>
                    <Box className="d-flex flex-wrap row justify-content-between py-3">
                        <Box className='col-lg-6 col-12'>
                            <Button
                                variant="contained"
                                sx={{ fontSize: "14px", height: "55px", borderRadius: "8px", BoxShadow: "unset", backgroundColor: "rgba(209, 92, 92, 1)" }}
                                fullWidth
                            >
                                لغو سفارش
                            </Button>
                        </Box>
                        <Box className='col-lg-6 col-12'>
                            <Button
                                variant="contained"
                                sx={{ fontSize: "14px", height: "55px", borderRadius: "8px", BoxShadow: "unset", backgroundColor: "rgba(79, 199, 140, 1)" }}
                                fullWidth
                            >
                                تایید انتقال ارز
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default SendUser