import { Typography,Box, FormGroup, FormControlLabel,Button,Checkbox  } from '@mui/material'
import React from 'react'
import DigiAlert from '../global/DigiAlert';
import { useSelector } from 'react-redux';
import Api from '../ApiConfig/Api';
import { VERIFICATION_RULE } from '../ApiConfig/Endpoints';
import { authpost } from '../ApiConfig/ApiHeaders';
export default function StepTwo({onNext}) {
  const {verifyRules}=useSelector(state=>state.userstate);
  const {auth}=useSelector(state=>state.authtoken);
    const [checked, setChecked] = React.useState(verifyRules);
    const [open, setopen] = React.useState(false);

    const [message, setmessage] = React.useState("")
    const handleCheckBox=(event)=>{
        setChecked(event.target.checked);
    }
    const submit=()=>{
      if(checked===false){
          setmessage("تیک اعلام موافقت با متن فوق را انتخاب نکرده اید")
          setopen(true)
      }else{
        Api.post(VERIFICATION_RULE,'',{headers:authpost(auth)}).then(res=>{
          if(res.data.statusCode===200){
            onNext();
          }else{
            console.log(res.data);
          }
        })
      }
    }
  return (
    <div className='maincontent'>
        <form>
        <Box className="d-flex justify-content-start" >
        <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>
            قبول قوانین
        </Typography>
       </Box>
       <Box sx={{py:"32px"}}>
        <Typography variant="p" component="div" sx={{lineHeight:"27px",fontSize:14}}>
        صرافی آنلاین دیجیکس ۲۴، مرجعی برای خرید تتر و فروش تتر ، خرید بیت کوین و فروش بیت کوین و خرید ارز دیجیتال با دلار میباشد و بستری امن را برای شما ایجاد نموده تا در سریع ترین زمان و بهترین قیمت، اقدام به خرید و فروش ارز دیجیتال نمایید. صرافی آنلاین دیجیکس ۲۴، مرجعی برای خرید تتر و فروش تتر ، خرید بیت کوین و فروش بیت کوین و خرید ارز دیجیتال با دلار میباشد و بستری امن را برای شما ایجاد نموده تا در سریع ترین زمان و بهترین قیمت، اقدام به خرید و فروش ارز دیجیتال نمایید.
        </Typography>
        <FormGroup sx={{py:"32px",px:"4px"}}>
            <FormControlLabel control={<Checkbox  checked={checked} onChange={handleCheckBox} color="primary"/>} label="متن فوق را بطور کامل خوانده ام و قبول دارم"/>
        </FormGroup>
       </Box>

       <div className='d-lg-block d-md-none d-sm-none d-none'>
            <Box className="d-flex justify-content-end">
             <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"205px",mt:"85px",borderRadius:'8px'}}
                onClick={submit}  

              >
            قبول قوانین و مرحله بعد            
            </Button>
        </Box>
        </div>
        <div className='d-lg-none d-md-block d-sm-block d-block'>
           <Box className="d-flex justify-content-end">
            <Button 
                 fullWidth
                 variant="contained" 
                 sx={{ fontSize: 14, height: "55px",mt:"10%",borderRadius:"8px"}}
                onClick={submit}  
            >
            قبول قوانین و مرحله بعد            
            </Button>
          </Box>
        </div>
        </form>
        <DigiAlert open={open} close={()=>setopen(false)} message={message}/>
    </div>
  )
}
