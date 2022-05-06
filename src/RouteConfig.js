import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./page/Login";
import Main from "./page/Main";
import TicketList from "./page/ticket/TicketList";

export const RouteConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tickets" element={<TicketList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}