import React from 'react'
import { Card, CardContent, Typography, Box, Button } from '@mui/material'
import UploadButton from '../verification/UploadButton'
import { Cancel, CheckCircle } from '@mui/icons-material'
export default function SendIndentity() {
    const cardstyle = {
        border: "1px dashed #cbe4eb",
        borderRadius: "8px",
        width: "470px",
        height: "231px",
        mx: "13px",
        my: '2%',
        p: "32px",
        fontSize: "14px",
      }
  return (
    <div>
      <Typography variant="h6" component="div" className="boldfont">
        مدارک احراز هویت
      </Typography>
      <div className="row">
      <Box sx={cardstyle} className="col-lg-6 col-12">
          <Box className="d-flex">
            <Box sx={{ borderRadius: "15px", maxWidth: "72px", minWidth: "72px", maxHeight: "72px", minHeight: "72px", backgroundColor: "rgba(236, 237, 247, 1)" }} />
            <Box sx={{ width: "300px", pl: "20px" }}>
              <Typography variant='p' component="div" sx={{ color: "#505159" }}>
              سلفی با کارت ملی و دست نوشته
              </Typography>
              <Typography variant='p' component="div" sx={{ color: "#a4a6b4", fontSize: "13px", py: 1 }}>
              دقت کنید که تصویر کاملا واضح باشد
              </Typography>
            </Box>

          </Box>
          <Box className='d-flex justify-content-end align-items-center' sx={{ pt: "40px" }}>
            
            <UploadButton text="آپلود تصویر جدید" />
            <Cancel sx={{fontSize:"60px",mx:"16px"}} color="error"/>
            <CheckCircle sx={{fontSize:"60px"}} color="success" />
          </Box>
        </Box>
        <Box sx={cardstyle} className="col-lg-6 col-12">
          <Box className="d-flex">
            <Box sx={{ borderRadius: "15px", maxWidth: "72px", minWidth: "72px", maxHeight: "72px", minHeight: "72px", backgroundColor: "rgba(236, 237, 247, 1)" }} />
            <Box sx={{ width: "300px", pl: "20px" }}>
              <Typography variant='p' component="div" sx={{ color: "#505159" }}>
              ویدئو چهره و دست نوشته
              </Typography>
              <Typography variant='p' component="div" sx={{ color: "#a4a6b4", fontSize: "13px", py: 1 }}>
              دقت کنید که ویدئو کاملا واضح و با جزئیات خواسته شده باشد
              </Typography>
            </Box>

          </Box>
          <Box className='d-flex justify-content-center align-items-center' sx={{ pt: "40px" }}>
            
            <UploadButton text="آپلود ویدیو جدید" />
            <Cancel sx={{fontSize:"60px",mx:"16px"}} color="error"/>
            <CheckCircle sx={{fontSize:"60px"}} color="success" />
          </Box>
        </Box>

      </div>
      <Box className='d-flex justify-content-end'>
        <Button
            variant="contained"
            sx={{ fontSize: 14, backgroundColor: "rgba(121, 123, 148, 1)", height: "55px", width: "205px", mt: "45px", borderRadius: "8px" }}
          >
         ارسال پیام جهت رفع نقص ها
        </Button>
        <Button
            variant="contained"
            sx={{ fontSize: 14, height: "55px", width: "205px", mt: "45px", borderRadius: "8px",mx:2 }}
          >
         تایید و فعالسازی حساب کاربری 
        </Button>
      </Box>
    </div>
  )
}
