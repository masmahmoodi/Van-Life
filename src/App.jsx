import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans';
import VanDetail from './Pages/VanDetail';
import Dashboard from './Pages/Host/Dashboard';
import Reviews from './Pages/Host/Reviews';
import Income from './Pages/Host/Income';
import HostLayout from './Pages/Host/HostLayout';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail from "./Pages/Host/HostVanDetail"
// import HostVanLayout from './Pages/Host/HostVanLayout';
import HostVanPricing from './Pages/Host/HostVanPricing';
import HostVanPhotos from './Pages/Host/HostVanPhotos';
import HostVanInfo from './Pages/Host/HostVanInfo';
import "./server"
import { BrowserRouter, Routes, Route, Link }  from "react-router-dom"
import Layout from './Components/Layout';

 export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

/**
   * Challenge: add the /host/vans and /host/vans/:id routes, as well
   * as the "Vans" link in the Host navbar.
   * 
   * For now, just create the stubbed-out version of the pages (i.e.
   * components that just render an <h1>). Don't worry about adding
   * navigation from /host/vans to /host/vans/:id yet - the link to
   * /host/vans is enough for now.
   * 
   * When deciding whether or not to use nested routes, keep in mind
   * what will/won't be shared between these two pages. See the Figma
   * design file (or the screenshots) to help guide your choice.
   */