import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./styles/dashboard.css"
import "./styles/transactions.css"
import "./styles/fonts.css";
import "./styles/colors.css";
import "./styles/stepper.css";
import "./styles/containers.css";
import "./styles/menu.css";


import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import Dashboard from './components/pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./components/pages/Transaction";
import BankAccount from "./components/pages/BankAccount";
import Wallet from "./components/pages/Wallet";
import OrderHistory from './components/pages/OrderHistory'
import React from 'react'
import Verification from "./components/pages/Verification";
import PrivateRoute from "./components/elements/global/PrivateRoute";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MainDashboard from "./components/pages/MainDashboard";
import textTheme from "./components/elements/global/TextFieldTheme";
import Confirm from './components/pages/Confirm';
import Referral from './components/pages/Referral';
import Payment from './components/pages/Payment';
import SenduserHistory from './components/pages/admin/buy/SenduserHistory';
import SendUser from './components/pages/admin/buy/SendUser';
import PriceManagment from './components/pages/admin/PriceManagment';
import ConfirmTransaction from './components/pages/admin/sell/ConfirmTransaction';
import CoinList from './components/pages/admin/CoinList';
import Deposit from './components/pages/admin/crypto/Deposit';
import Withdraw from './components/pages/admin/crypto/Withdraw';
import DashboardPanel from './components/pages/admin/DashboardPanel'
import ReferalManagment from './components/pages/admin/ReferalManagment'
import DepositRial from './components/pages/admin/rial/Deposit'
import WithdrawRial from './components/pages/admin/rial/Withdraw'
import Trades from './components/pages/admin/Trades'
import UserProfiles from './components/pages/admin/UsersProfile/index'
import UserManagment from './components/pages/admin/UserManagment';
import UserIdentityList from './components/pages/admin/UserIdentityList';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={textTheme}>
        <BrowserRouter>
        <Routes>

          <Route path="/panelBTN/buy"  element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          } />
          <Route path="/panelBTN" exact element={
            <PrivateRoute>
              <MainDashboard/>
            </PrivateRoute>
          } />
         <Route path="/panelBTN/payment" exact element={
              <Payment/>
          } />
          <Route path="/panelBTN/transactions" element={
            <PrivateRoute>
              <Transaction/>
            </PrivateRoute>
          } />
          <Route path="/panelBTN/bankaccount" element={
            <PrivateRoute>
              <BankAccount/>
            </PrivateRoute>
          } />  
          <Route path="/panelBTN/wallet" element={
            <PrivateRoute>
              <Wallet/>
            </PrivateRoute>
          } />  
          <Route path="/panelBTN/orderhistory" element={
            <PrivateRoute>
              <OrderHistory/>
            </PrivateRoute>
          } />  
          <Route path="/panelBTN/verification" element={
            <PrivateRoute>
              <Verification/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/verification/info" element={
            <PrivateRoute>
              <Verification stepNumber={0}/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/verification/rule" element={
            <PrivateRoute>
              <Verification stepNumber={1}/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/verification/document" element={
            <PrivateRoute>
              <Verification stepNumber={2}/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/referral" element={
            <PrivateRoute>
              <Referral/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/send-to-user" element={
            <PrivateRoute>
              <SendUser/>
            </PrivateRoute>
          }/>
          <Route path="/panelBTN/send-to-user/history" element={
            <PrivateRoute>
              <SenduserHistory/>
            </PrivateRoute>
          }/>
           <Route path="/panelBTN/price-managment" element={
            <PrivateRoute>
              <PriceManagment/>
            </PrivateRoute>
          }/>
           <Route path="/panelBTN/confirm-transaction" element={
            <PrivateRoute>
              <ConfirmTransaction/>
            </PrivateRoute>
          }/>
           <Route path="/panelBTN/coin-list" element={
            <PrivateRoute>
              <CoinList/>
            </PrivateRoute>
          }/>
           <Route path="/crypto/deposit" element={
            <PrivateRoute>
              <Deposit/>
            </PrivateRoute>
          }/>
           <Route path="/crypto/withdraw" element={
            <PrivateRoute>
              <Withdraw/>
            </PrivateRoute>
          }/>
           <Route path="/dashboard-panel" element={
            <PrivateRoute>
              <DashboardPanel/>
            </PrivateRoute>
          }/>
           <Route path="/referal-managment" element={
            <PrivateRoute>
              <ReferalManagment/>
            </PrivateRoute>
          }/>
           <Route path="/rial/deposit" element={
            <PrivateRoute>
              <DepositRial/>
            </PrivateRoute>
          }/>
           <Route path="/rial/withdraw" element={
            <PrivateRoute>
              <WithdrawRial/>
            </PrivateRoute>
          }/>
           <Route path="/trades" element={
            <PrivateRoute>
              <Trades/>
            </PrivateRoute>
          }/>
           <Route path="/usersprofile" element={
            <PrivateRoute>
              <UserProfiles/>
            </PrivateRoute>
          }/>
           <Route path="/user-managment" element={
            <PrivateRoute>
              <UserManagment />
            </PrivateRoute>
          }/>
           <Route path="/user-identity-list" element={
            <PrivateRoute>
              <UserIdentityList />
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
