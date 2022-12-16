import SpacialPagination from '../elements/global/SpacialPagination';
import React from 'react'
import { useState } from 'react';
import TransactionHead from '../elements/transaction/TransactionHead'
import { Box, Table, TableBody, TableHead, TableCell, TableContainer, TableRow , Typography,Button} from '@mui/material'
import { SouthWest, NorthEast } from '@mui/icons-material'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Api from '../elements/ApiConfig/Api';
import { authpost } from '../elements/ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';
import {REQUEST_BUY_PAGE} from '../elements/ApiConfig/Endpoints';
import { useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SwitchControl from '../elements/switch/SwitchControl';



function createData(date, name, operation, count, address , txid,station)  {
  return {date, name, operation, count, address , txid,station };
}




const rows = [
  createData("ریال", "71867099", "0", "71867099", "0", "839900903", <SwitchControl />),
  createData("تتر", "71867099", "43949", "71867099","43949", "43949", <SwitchControl /> ),
  createData("بایننس کوین", "71867099", "43949", "71867099","43949", "43949", <SwitchControl /> ),
  createData("یو اس دی کوین","71867099", "43949", "71867099","43949", "43949", <SwitchControl /> ),
  createData("دای", "71867099", "43949", "71867099","43949", "43949", <SwitchControl /> ),

]

const rowstyle={
  '&:last-child td, &:last-child th': { border: 0 },
  borderTop:"1px solid #afa6b4",
  // borderTop:"1px solid rgba(203, 228, 235, 1)",
}
const headstyle={
  py:"16px",
  fontSize: "14px !important",
  textAlign:"center",
  color: "rgba(164, 166, 180, 1)",
  maxWidth:"200px",
  minWidth:"120px",
}
const cellstyle={
  py:"24px",
  fontSize: "14px !important",
  textAlign:"center"
}
const boxbtnstyle={
  border:"1px solid #afa6b4",
  borderRadius:"10px",
  height:"48px",
  width:"153px",
  px:"5px",
  py:"5px",
  display:"flex",
}

const darkbtnstyle={
  height: "35px",
  width: "77px",
  borderRadius:"8px",
}

export default function Transaction() {
  const {auth} =useSelector(state=>state.authtoken);

  const [btntext, setbtntext] = React.useState("withdraw")
  const handleBoxbtn=(props)=>(event)=>{
    setbtntext(props);
 }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0f1628',
      },
    },
  });
  
  const GetTransactionData=()=>{
    Api.get(REQUEST_BUY_PAGE(20,1),{
      headers:authpost(auth)
    }).then(res=>{
      console.log(res.data)
    })
   }
   useEffect(()=>{
      GetTransactionData();
   });
  return (
    <div>
      <Box>
        {/* <TransactionHead /> */}
        <div className='d-flex justify-content-between header-title'>
          <Typography className='boldfont' component="div" variant="p" sx={{pt:"10px"}}>
           مدیریت ارزها
          </Typography>
          <ThemeProvider theme={theme}>
            
            <Typography component="div" variant="p" sx={{pt:"10px"}}>
           افزودن ارز جدید<AddCircleOutlineIcon />
          </Typography>

          </ThemeProvider>
          
        </div>
          <Box className='row' >
            <TableContainer className="table-cnt">
              <Table size="small">
                <TableHead>
                  <TableRow>
                  <TableCell sx={headstyle}>نام ارز</TableCell>
                  <TableCell sx={headstyle}>حجم خرید</TableCell>
                  <TableCell sx={headstyle}>تعداد خرید</TableCell>
                  <TableCell sx={headstyle}>حجم فروش</TableCell>
                  <TableCell sx={headstyle}>تعداد فروش</TableCell>
                  <TableCell sx={headstyle}>موجودی</TableCell>
                  <TableCell sx={headstyle}>عملیات</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,idx) => (
                    <TableRow
                      key={idx}
                      sx={rowstyle}
                    >
                      <TableCell sx={cellstyle}>{row.date}</TableCell>
                      <TableCell sx={cellstyle}>
                        {row.name}
                      </TableCell>
                      <TableCell sx={cellstyle}>{row.operation}</TableCell>
                      <TableCell sx={cellstyle}>{row.count}</TableCell>

                      <TableCell sx={cellstyle}>
                            {row.address}
                      </TableCell>
                      
                      <TableCell sx={cellstyle}>
                            {row.txid}
                      </TableCell>
                      
                      <TableCell sx={cellstyle}>
                            {row.station}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className='d-flex justify-content-center mb-3' dir="ltr">
            <SpacialPagination 
              data={rows} 
              buttonConst={3}
              contentPerPage={1}
              siblingCount={1}
            />
          </div>
          </Box>
          
        </Box>
    </div>
  )
}
