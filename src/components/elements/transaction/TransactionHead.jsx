import { MenuItem, Select,FormGroup, TextField,Box } from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog';
import DatePicker, { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function TransactionHead() {
  const [value, setValue] = React.useState(new Date())
  const [open,setOpen]=React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(new Date());
  const [textval,setTextval]=React.useState("");
  const [isfocus,setIsfocus]=React.useState(false);
  const dates = [
    {"value":1,"label":"انتخاب تاریخ"},
  ]
  const stateopt = [
    {"value":1,"label":"تکمیل شده"},
    {"value":1,"label":"ناموفق"},
  ]
  const selectstyle={
    minWidth:"165px",
    maxWidth:"165px",
    borderRadius:"8px",
    height:"56px",
    marginTop:"32px",
    backgroundColor:'#fff',
    textAlign:"center",
    borderColor:"#cbe4eb"
  }
  return (
    <Box className='row d-flex justify-content-start mycontainer backgroundClr'>
          <div className='col-lg-5 col-12 gx-0 d-flex justify-content-start'>
             <DatePicker 
                style={selectstyle}
                value={value}
                onChange={setValue}
                calendar={persian}
                locale={persian_fa}
              /> 

            <Select sx={selectstyle} style={{marginRight:"24px"}} color="digi" defaultValue={stateopt[0]['label']}>
            {stateopt.map((item,idx)=>(
                <MenuItem key={idx} value={item.label}>{item.label}</MenuItem>
            ))}
            </Select>
                          
          </div>
    </Box>
  )
}
