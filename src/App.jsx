import Reset from './theme/reset.js';
import GlobalStyle from './theme/globalstyle.js';
import Login from './components/login/Login';
import Register from './components/register/Register';
import General from './components/general/General';
import Input from './components/newInput/Input';
import Output from './components/newOutput/Output';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecordsContext from './contexts/RecordsContext.js';
import { useState } from 'react';

export default function App() {
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [records, setRecords] = useState([]);
    return (

        <RecordsContext.Provider value={{ records, setRecords }}>
            <BrowserRouter>
                <Reset />
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/general' element={<General />} />
                    <Route path='/input' element={<Input />} />
                    <Route path='/output' element={<Output />} />
                </Routes>
            </BrowserRouter>
        </RecordsContext.Provider>

    );
}