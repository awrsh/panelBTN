import { Box, Button, FormGroup, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import DatePicker from 'react-multi-date-picker'
import TransactionHead from '../transaction/TransactionHead'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


function FilterTable({ title }) {
    const [value, setValue] = React.useState(new Date())
    const [open, setOpen] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState(new Date());
    const [textval, setTextval] = React.useState("");
    const [isfocus, setIsfocus] = React.useState(false);
    const dates = [
        { "value": 1, "label": "انتخاب تاریخ" },
    ]
    const stateopt = [
        { "value": 1, "label": "تکمیل شده" },
        { "value": 1, "label": "ناموفق" },
    ]
    const selectstyle = {
        minWidth: "165px",
        maxWidth: "165px",
        borderRadius: "8px",
        height: "56px",
        backgroundColor: '#fff',
        textAlign: "center",
        borderColor: "#cbe4eb"
    }
    return (
        <Box className='d-flex align-items-center justify-content-between'>
          
                <Typography variant="p" component="div" className='boldfont  '>
                    {title}
                </Typography>
            <FormGroup>
                <TextField
                    color="digi"
                    variant="outlined"
                    placeholder="شماره سفارش"
                    // sx={textfieldstyle}
                    type="number"
                // value={phone}
                // onChange={handlePhone}
                // helperText={errortext}
                // inputProps={{ disableUnderline: true, style: inputFontSize }}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    color="digi"
                    variant="outlined"
                    placeholder="شماره موبایل"
                    // sx={textfieldstyle}
                    type="tel"
                // value={phone}
                // onChange={handlePhone}
                // helperText={errortext}
                // inputProps={{ disableUnderline: true, style: inputFontSize }}
                />
            </FormGroup>
            <DatePicker
                style={selectstyle}
                value={value}
                onChange={setValue}
                calendar={persian}
                locale={persian_fa}
            />

            <Select sx={selectstyle} style={{ marginRight: "24px" }} color="digi" defaultValue={stateopt[0]['label']}>
                {stateopt.map((item, idx) => (
                    <MenuItem key={idx} value={item.label}>{item.label}</MenuItem>
                ))}
            </Select>
            <Box className='col-lg-1 col-6'>
                <Button
                    variant="contained"
                    sx={{ fontSize: "14px", height: "55px", borderRadius: "8px", BoxShadow: "unset", backgroundColor: "#424bfb" }}
                    fullWidth
                >فیلتر

                </Button>
            </Box>
        </Box>
    )
}

export default FilterTable