import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/admin-home-page/AdminHomePage";
import ApplicationsFormPage from "../pages/applications-form-page/ApplicationsFormPage";
import CreateTripPage from "../pages/create-trip-page/CreateTripPage";
import HomePage from "../pages/home-page/HomePage";
import ListTripsPage from "../pages/list-trip-page/ListTripsPage";
import LoginPage from "../pages/login-page/LoginPage";
import TripDetailsPage from "../pages/trip-details-page/TripDetailsPage";

function Router() {

    return(
        <BrowserRouter>
        
            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path='/trips/application' element={<ApplicationsFormPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/trips/list' element={<ListTripsPage/>}/>
                <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
                <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
                <Route path='/admin/trips/:id' element={<TripDetailsPage/>}/>

            </Routes>
        
        </BrowserRouter>
    );
}

export default Router;

