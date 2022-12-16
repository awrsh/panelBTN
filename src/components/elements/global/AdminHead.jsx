import { Typography, Box } from '@mui/material'
import React from 'react'
import svgsicon from '../../../img/icons/copy-clipboard.svg'

export default function HeaderInfo({ userdata, svgsDash }) {
    const infobox = {
        backgroundColor: "#F2F5F9"
    }
    const minibox = {
        padding: " 16px 0px",
        fontSize: "12px",
        textAlign: "left"
    }
    const headtext = {
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold"
    }
    const typecss = {
        mt: "14px",
        color: "rgba(164, 166, 180, 1)",
        fontSize: "16px"
    }
    return (
        <Box sx={infobox} className="row d-flex justify-content-center mycontainer " >
            <Box className="row  align-items-center">
                <Box className="col-12 g-0" sx={minibox} >
                    <Box className="row">
                        <Box className="col-lg-12 col-12">
                            <Box className="row justify-content-between">
                                <Box className="col-1 box-data">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        USDT
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            نام ارز
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-1 box-data">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        1800
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            تعداد
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-1">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        خرید
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            عملیات
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-2">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        71,585,258                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            مبلغ نهایی
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-2">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        78545258
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            شماره سفارش
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-2">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        درحال پردازش
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        <span>
                                            وضعیت
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
