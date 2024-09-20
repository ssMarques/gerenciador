import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Login from "../../pages/Login";
import Rodape from "../Rodape";
import { Cabecalho } from "../Cabecalho";


export const Rotas = () => {
    return(
        <>
            <BrowserRouter>

                <Cabecalho/>

                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="*" element={<Navigate to="/home"/>} />
                </Routes>

                <Rodape/>

            </BrowserRouter>

        </>
    );
}