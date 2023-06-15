import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatalogPage from "./containers/CatalogPage/CatalogPage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import {Stack} from "@mui/material";
import CartPage from "./containers/CartPage/CartPage";

function App() {
    return (
        <Stack sx={{minHeight: '100vh', flexDirection: 'column'}}>
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/catalog'} element={<CatalogPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </Stack>
    );
}

export default App;

