import React from 'react'
import FormInfo from '../../../elements/buy/FormInfo'
import AdminHead from '../../../elements/global/AdminHead'
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import { items2, TableHeader, walletTitle } from '../../../utils/data'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ReactComponent as svgsicon } from '../../../../img/icons/copy-clipboard.svg'
import Svg from '../../../utils/Svgs'
import TextField from '@mui/material/TextField';
import { ThreeSixtyRounded } from '@mui/icons-material'
import TableComponent from '../../../elements/global/TableComponent'



function SendUser() {
  const txid = {
    text: "DGFKDafgadsgf325235LNDFKVNHDFV"
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('23 بهمن 1401', "کاهش", 1, "به دلیل درنظر نگرفتن کارمزد 1 واحد از واریزی کاربر کسر میگردد"),
    createData('23 بهمن 1401', "کاهش", 1,  "TXID در اینجا نمایش داده شود"),
    createData('23 بهمن 1401', "کاهش", 1, "لورم اپیسوم"),
  ];
  const cellstyle={
    py:"24px",
    fontSize: "14px !important",
    textAlign:"center",
    fontWeight: 'bold'
  }

  return (
    <Box>
      <AdminHead />
      <Box className="d-flex row">
        <Box className="col-lg-6 col-12 mycontainer">
          <FormInfo title="جزئیات سفارش" items={items2} />
        </Box>
        <Box className='col-lg-6 col-12 mycontainer'>
          <Typography variant="h5" component="div" className='boldfont title-info'>
            توضیحات سفارش
          </Typography>
          <Stack sx={{ width: '100%', fontSize: "20px" }} spacing={2}>
            <Alert severity="error" icon={false} sx={{ fontSize: "14px", fontWeight: "bold" }} >اپراتور گرامی ، دقت فرمایید که شما باید پس از کسر کارمزد ، تعداد 1799 تتر به ولت کاربر ارسال نمایید.</Alert>
          </Stack>
          <Box className='titlemini py-1 mt-3'>
            <Box className="border-right-marginboldblue titlemindialog">
              {walletTitle.map(item => (
                <Typography variant="p" component="div" sx={{ fontSize: "14px" }} >
                  <span className='desc-icon'>
                    {item.price}

                  </span>  {' '} در  {' '}
                  <span className='desc-icon'>
                    {item.network}  {' '}
                  </span>
                  به آدرس ولت زیر ارسال گردید
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
                  ADSGDSG454350LHJFSADlksjdvlkhdsv
                </Typography>
              </Box>
            </Alert>
          </Box>
          <Box>
            <Typography className='py-4' sx={{ fontSize: "14px", fontWeight: "bold" }}>
              اپراتور گرامی ، TXID این تراکنش به شرح زیر میباشد.
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
        </Box>
      </Box>
      <Box className='pb-5'>
        <Box className='d-flex justify-content-between header-title'>
          <Typography className='boldfont' component="div" variant="p" sx={{ pt: "10px" }}>
            تاریخچه سفارش
          </Typography>
        </Box>
        <TableComponent  TableHeader={TableHeader}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
             
              sx={{ '&:last-child td, &:last-child th': { border: "none" } } }
              style={{border: "none"}}
            >
              <TableCell sx={cellstyle} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={cellstyle}>{row.calories}</TableCell>
              <TableCell sx={cellstyle}>{row.fat}</TableCell>
              <TableCell sx={cellstyle}>{row.carbs}</TableCell>
              <TableCell sx={cellstyle}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableComponent>
      </Box>
    </Box>
  )
}

export default SendUser