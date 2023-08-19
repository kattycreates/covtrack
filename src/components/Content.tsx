import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Map from "./Map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import MapChart from "../pages/MapChart";
import EditContact from "../pages/EditContact";
import CreateContact from "../pages/CreateContact";
type Props = {};

const Content = (props: Props) => {
  return (
    <div className="p-4 sm:ml-64">
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/map" element={<MapChart />} />
      </Routes>
    </div>
  );
};

export default Content;
