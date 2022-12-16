import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import {
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import AddCardBank from "../dialogs/AddCardBank";
import { ReactComponent as AddCircle } from "../../../img/icons/circle-add.svg";
import { ReactComponent as Trash } from "../../../img/icons/trash.svg";
import Svg from "../../utils/Svgs";
import { ReactComponent as Saman } from "../../../img/icons/bank-saman.svg";
import { authpost } from "../ApiConfig/ApiHeaders";
import { useSelector } from "react-redux";
import Api from "../ApiConfig/Api";
import { USER_BANK } from "../ApiConfig/Endpoints";
import { BeatLoader } from "react-spinners";
export default function CardsBank({
  listBanks,
  selectCart,
  setSelectCart,
}) {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useSelector((state) => state.authtoken);
  const [banks, setBanks] = React.useState([]);

  const getBanks = () => {
    setIsLoading(true);
    Api.get(USER_BANK, {
      headers: authpost(auth),
    }).then((res) => {
      if (res.data.statusCode === 200) {
        setBanks(res.data.data.result);
      }
      setIsLoading(false);
    });
  };
  React.useEffect(() => {
    if (banks.length === 0) {
      getBanks();
    }
  }, [banks]);

  const opendialog = (event) => {
    setOpen(true);
  };
  const closedialog = (event) => {
    setOpen(false);
    getBanks();
  };
  const handleArrow = (event) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleDelete = (ids) => (event) => {
    Api.delete(`${USER_BANK}?id=${ids}`, {
      headers: authpost(auth),
    }).then((res) => {
      if (res.data.statusCode === 200) {
        getBanks();
      }
    });
  };
  // const listdata=[
  //   {'bank':"بانک سامان",'number':"6104337391508790"},
  //   {'bank':"بانک سامان",'number':"6104337391508790"},

  // ]
  const StrToArray = (text, sidx, eidx) => {
    let strarray = [];
    for (let i = 0; i <= text.length; i++) {
      strarray.push(text[i]);
    }
    return strarray.slice(sidx, eidx).join("");
  };
  const cardstyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
  };
  const btnstyle = {
    width: "100%",
    height: "57px",
    borderRadius: "0px 0px 8px 8px",
    bottom: "0px",
    backgroundColor: "#f1f3fa",
    color: "#000",
    "&:hover": {
      backgroundColor: "#f1f3fa",
      color: "#000",
    },
  };

  const onClickCartBank = (cart) => {
    setSelectCart(cart);
  };
  return (
    <Box sx={cardstyle} className="full-border">
      <List>
        {isLoading ? (
          <BeatLoader
            className="d-flex justify-content-center my-3"
            color="#0096f5"
          />
        ) : (
          banks?.map((item) => (
            <Box
              onClick={() => onClickCartBank(item)}
              key={item.bankId}
              className={` d-flex justify-content-between ${
                selectCart.cardNumber === item.cardNumber ? "border border-danger" : ""
              }`}
              sx={{
                cursor: "pointer",
                pt: 2,
                px: "16px",
              }}
            >
              <div className="d-flex">
                <Svg
                  Component={Saman}
                  style={{ marginTop: "2px" }}
                />
                <ListItemText
                  primary={item.bankName}
                  sx={{ ml: "16px" }}
                />
              </div>
              <div className="d-flex">
                <ListItemText
                  primary={
                    <div>
                      <pre>
                        {StrToArray(
                          item.cardNumber,
                          12,
                          16
                        )}{" "}
                        {StrToArray(item.cardNumber, 8, 12)}{" "}
                        {StrToArray(item.cardNumber, 4, 8)}{" "}
                        {StrToArray(item.cardNumber, 0, 4)}
                      </pre>
                    </div>
                  }
                  primaryTypographyProps={{
                    fontSize: "17px",
                  }}
                />
                <Svg
                  Component={Trash}
                  style={{
                    marginRight: "20px",
                    marginLeft: "3px",
                    marginTop: "2px",
                  }}
                  onClick={handleDelete(item.id)}
                />
              </div>
            </Box>
          ))
        )}
      </List>
      <Button
        sx={btnstyle}
        startIcon={<AddCircle />}
        onClick={opendialog}
      >
        افزودن کارت بانکی
      </Button>
      <AddCardBank
        open={open}
        close={closedialog}
        fulling={false}
        sizewidth="auto"
      />
    </Box>
  );
}
