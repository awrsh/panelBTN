import React from 'react'
import Table from './CurencyTable';
import {Typography , Box} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function CurencyMange() {
    return (
            <Box container classname="container" position="static">
                <div className="row">
                    <div className="col-6">
                        <Typography sx={{px:"1%" , py:"3%"}} variant="body2">افزودن ارز جدید <AddCircleOutlineIcon /></Typography>
                    </div>
                    <div className="col-6">
                        <Typography dir="rtl" sx={{px:"1%" , py:"3%"}} variant="h6" >مدیریت ارز‌ها</Typography>
                    </div>
                </div>
                <Table/>
            </Box>
            
    )
}
