import { Card, CardContent, Typography, Box, Button } from '@mui/material'
import React, { useRef } from 'react'
import { SELFIE_IMAGE, SELFIE_VIDEO, VERIFICATION_DOCUMENTS } from '../ApiConfig/Endpoints'
import UploadButton from './UploadButton';
import DigiAlert from '../global/DigiAlert'
import Api from '../ApiConfig/Api'
import { useNavigate } from 'react-router';
import { authfile, authpost } from '../ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';
import {Cancel} from "@mui/icons-material"

const cardstyle = {
  border: "1px dashed #cbe4eb",
  borderRadius: "8px",
  width: "440px",
  height: "322px",
  mx: "13px",
  my: '2%',
  p: "32px",
  fontSize: "14px",
}
export default function StepThree({ onNext, title, btnname, showSecond }) {
  const { auth } = useSelector(state => state.authtoken);
  const fileRef = useRef([])
  const [load, setLoad] = React.useState({
    image: false,
    video: false,
  });
  const [message, setMessage] = React.useState("")
  const [mesType, setMestype] = React.useState("")

  const [open, setOpen] = React.useState(false)
  let navigate = useNavigate()

  const handleChange = (props) => (event) => {
    if (event.target.files[0]) {
      if (props === 'image') {
        uploadImage(event.target.files[0]);
      }
      else if (props === 'video') {
        uploadVideo(event.target.files[0]);
      }
    }

  }
  const imageClick = () => {
    fileRef.current[0].click();
  }

  const videoClick = () => {
    fileRef.current[1].click();
  }
  const uploadImage = (files) => {
    let formdata = new FormData();
    formdata.append('file', files)
    Api.post(
      SELFIE_IMAGE,
      formdata,
      {
        headers: authfile(auth)
      }
    ).then((res) => {
      if (res.data.statusCode === 200) {
        setLoad({ ...load, image: true });
        setMessage("با موفقیت انجام شد");
        setOpen(true);
        setMestype('info')
      } else {
        setLoad({ ...load, image: false });
        setMessage(res.data.data.message);
        setOpen(true);
        setMestype('error')

      }
    }).catch(err => {
      setLoad({ ...load, image: false });
      setMessage(err.response.data.data.message);
      setOpen(true);
      setMestype('error')

    });
  }
  const uploadVideo = (files) => {
    let forms = new FormData();
    forms.append('file', files);
    Api.post(
      SELFIE_VIDEO,
      forms,
      {
        headers: authfile(auth)
      }
    ).then((res) => {
      if (res.data.statusCode === 200) {
        setLoad({ ...load, video: true });
        setMessage("با موفقیت انجام شد");
        setOpen(true);
        setMestype('info')

      } else {
        setLoad({ ...load, video: false });
        setMessage(res.data.data.message);
        setOpen(true);
        setMestype('error')

      }
    }).catch(err => {
      setLoad({ ...load, video: false });
      setMessage(err.response.data.data.message);
      setOpen(true);
      setMestype('error')

    });

  }

  const gotoNext = () => {
    console.log(load)
    if (load.video === true && load.image === true) {
      Api.post(VERIFICATION_DOCUMENTS, '', {
        headers: authpost(auth),
      }).then(res => {
        if (res.data.statusCode === 200) {
          navigate('/');
        }
        else {
          console.log(res.data)
        }
      })
    }
  }
  return (
    <div>
      <Box className="d-flex justify-content-start">
        {title ? <Typography variant="h6" component="div" className="boldfont">
          بارگذاری مدارک
        </Typography> : <div></div>}
      </Box>
      <Box className="row d-flex justify-content-center" sx={{ my: "10px" }}>
        <Box sx={cardstyle} className="col-lg-6 col-12">
          <Box className="d-flex">
            <Box sx={{ borderRadius: "15px", width: "72px", height: "72px", backgroundColor: "rgba(236, 237, 247, 1)" }} />
            <Box sx={{ width: "300px", pl: "20px" }}>
              <Typography variant='p' component="div" sx={{ color: "#505159" }}>
                سلفی با کارت ملی و دست نوشته
              </Typography>
              <Typography variant='p' component="div" sx={{ color: "#a4a6b4", fontSize: "13px", py: 1 }}>
                طبق نمونه زیر، تصویر را آپلود نمایید. دقت کنید که حجم تصویر زیر ۱۶ مگابایت باشد.
              </Typography>
            </Box>
          </Box>
          <Box className='d-flex justify-content-center ' sx={{ pt: "73px", pb: "16px" }}>
            <input type="file" ref={myref => fileRef.current[0] = myref} name="image" multiple
              accept=".png,.jpeg,.jpg" style={{ display: "none" }} onChange={handleChange('image')}
            />
            <UploadButton text="آپلود تصویر" click={imageClick} />
          </Box>
          <Box className='d-flex justify-content-center' sx={{ pb: "32px" }}>
            <Button fontSize={12} sx={{ color: "#a4a6b4" }}>
              مشاهد نمونه
            </Button>
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
                هنگامی که چهره خود را در ویدئو نشان میدهید، متن دست نوشته را قرائت کنید و در پایان ویدئو مدارک (کارت ملی + دست نوشته) خود را نیز نشان دهید.
              </Typography>
            </Box>

          </Box>
          <Box className='d-flex justify-content-center ' sx={{ pt: "50px", pb: "16px" }}>
            <input type="file" accept=".mp4,.avi"
              ref={myref => fileRef.current[1] = myref} name="video"
              style={{ display: "none" }} onChange={handleChange('video')}
            />
            <UploadButton text="آپلود ویدیو" click={videoClick} />
          </Box>
          <Box className='d-flex justify-content-center'>
            <Button fontSize={12} sx={{ color: "#a4a6b4" }}>
              مشاهد نمونه
            </Button>
          </Box>


        </Box>

      </Box>
      <div className='d-lg-block d-md-none d-sm-none d-none'>
        <Box className="d-flex justify-content-end" sx={{ py: "2%" }}>
          {showSecond ? <Button
            variant="contained"
            sx={{ fontSize: 14, backgroundColor: "rgba(121, 123, 148, 1)", height: "55px", width: "205px", mt: "45px", borderRadius: "8px" }}
            onClick={gotoNext}
          >
            ارسال پیام جهت رفع نقص ها
          </Button> : null}
          <Button
            variant="contained"
            sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px", width: "205px", mt: "45px", marginLeft: "30px" ,borderRadius: "8px" }}
            onClick={gotoNext}
          >
            {btnname ? btnname : "ارسال مدارک"}
          </Button>
        </Box>
      </div>
      <div className='d-lg-none d-md-block d-sm-block d-block'>
        <Box className="d-flex justify-content-end" sx={{ py: "2%" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px", mt: "10%", borderRadius: "8px" }}
            onClick={gotoNext}
          >
            ارسال مدارک
          </Button>
        </Box>
      </div>
      <DigiAlert open={open} close={() => setOpen(false)} message={message} type={mesType} />
    </div>
  )
}
