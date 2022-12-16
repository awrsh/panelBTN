import { NorthEast } from '@mui/icons-material'
import { Box, IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import FilterTable from '../../elements/global/FilterTable'
import SpacialPagination from '../../elements/global/SpacialPagination'
import TableComponent from '../../elements/global/TableComponent'
import { userIdentityList2 } from '../../utils/data'
import AdminHead from '../../elements/global/AdminHead'
import { ReactComponent as listData } from '../../../img/icons/listData.svg';
import { ReactComponent as verifySuccess } from '../../../img/icons/verifySuccess.svg';
import { ReactComponent as verifyDefect } from '../../../img/icons/verifyDefect.svg';
import { ReactComponent as verifyUnsuccess } from '../../../img/icons/verifyUnsuccess.svg';
import { ReactComponent as waiting } from '../../../img/icons/waiting.svg';



import Svg from '../../utils/Svgs'

function UserIdentityList() {

    const rowscardNumber = [
        {
            id: 1,
            registryDate: "16 بهمن 1401",
            appNumber: 56145614,
            name: "آرش زرندی",
            mobile: "09154291249",
            identity: "waiting",
            Condition: "waiting",
        }
    ]
    const cellstyle = {
        py: "24px",
        fontSize: "14px !important",
        textAlign: "center",
        fontWeight: "bold"
    }
    return (
        <div>
            <AdminHead />

            <Box className='row py-5'>
                <FilterTable title="درخواست های احراز هویت" />
                <TableComponent TableHeader={userIdentityList2}>
                    {rowscardNumber.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: "none" } }}
                            style={{ border: "none" }}
                        >
                            <TableCell sx={cellstyle} component="th" scope="row"> {row.registryDate} </TableCell>
                            <TableCell sx={cellstyle}>{row.appNumber}</TableCell>
                            <TableCell sx={cellstyle}>{row.name}</TableCell>
                            <TableCell sx={cellstyle}>{row.mobile}</TableCell>
                            <TableCell sx={cellstyle}>
                                {row.identity === "success" ? <Svg Component={verifySuccess} style={{ marginLeft: "2%", fill: "#424BFB" }} /> : row.identity === "unsuccess" ? <Svg Component={verifyUnsuccess} style={{ marginLeft: "2%", fill: "rgba(251, 66, 66, 1)" }} /> : row.identity === "defect" ? <Svg Component={verifyDefect} style={{ marginLeft: "2%", fill: "rgba(179, 181, 199, 1)" }} /> : row.identity === "waiting" ? <Svg Component={waiting} style={{ marginLeft: "2%" }} /> : <span>علت نامشخص</span>}
                            </TableCell>
                            <TableCell sx={cellstyle}>{row.Condition === "success" ? <span>فعال</span> : row.Condition === "unsuccess" ? <span>رد درخواست</span> : row.Condition === "defect" ? <span>نقص مدارک</span> : row.Condition === "waiting" ? <span>در انتظار بررسی اپراتور</span> : <span>علت نامشخص</span>}</TableCell>
                            <TableCell sx={cellstyle}>
                                <Box dir="ltr">
                                    <Box>
                                        <IconButton
                                            sx={{ border: "1px solid #CBE4EB", borderRadius: '8px', ml: 1, color: "rgba(164, 166, 180, 1)" }}
                                            fontSize="large"
                                        >
                                            <Svg Component={listData} style={{ marginLeft: "2%", fill: "rgba(164, 166, 180, 1)" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableComponent>
                <Box className='d-flex justify-content-center mb-3' dir="ltr">
                    <SpacialPagination
                        data={rowscardNumber}
                        buttonConst={2}
                        contentPerPage={3}
                        siblingCount={4}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default UserIdentityList