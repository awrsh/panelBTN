import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box ,FormGroup,FormLabel,InputAdornment,TextField} from '@mui/material'
import DigiSelect from '../global/DigiSelect';
import CardWallet from '../global/CardWallet';
import inputFontSize from '../global/inputFontSize';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const btnbg={
    backgroundColor:"#eef1ff",
    borderRadius:"8px"
  }
  const adornmentstyle={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:-14,
    paddingLeft:4,
  }
const subbtnstyle={
  fontSize:"16px", height: "55px",borderRadius:"8px"
}
export default function WalletWithdraw({open,close,options,sizewidth}) {


  
  const [sizew, setSizew] = React.useState(sizewidth);
  React.useEffect(() => {
    setSizew(sizewidth)
  }, [sizewidth]);
   
 
  return (
      <BootstrapDialog
        fullScreen
        sx={{direction:"ltr",left:0,width:sizewidth}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont-dialog dialog-title-container">
           برداشت ارز از  کیف پول
        </BootstrapDialogTitle>
        
        <DialogContent className='mycontainer'>
        
        <Box className="border-right-marginboldblue titlemindialog">
           <Typography variant="p" component="div">
                انتخاب  ارز
           </Typography>
         </Box>
        <Box sx={{pb:"24px"}}>
            <DigiSelect options={options}/>
        </Box>
         <Box className="border-right-marginboldblue">
           <Typography variant="p" component="div" >
                انتخاب آدرس کیف پول
           </Typography>
         </Box>
         <Box>
          <CardWallet options={options} />
         </Box>
         <Box>
         <FormGroup sx={{my:"2%"}}>
            <FormLabel sx={{color:"#000"}}>تعداد</FormLabel>
            <TextField
            color='digi'
             type="number"
             sx={{"& :focus":btnbg}}
             fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment:(
                  <Box sx={adornmentstyle}>
                      <InputAdornment position="end">BUSD</InputAdornment>
                  </Box>
                ),
                style:inputFontSize,
              }}
              
            />
            </FormGroup>
         </Box>
    
        </DialogContent>
        <DialogActions >
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    ثبت درخواست برداشت 
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
