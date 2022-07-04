import Reset from '../theme/reset.js';
import GlobalStyle from '../theme/globalstyle.js';
import Login from './Login';
import Register from './Register';
import General from './General';
import Input from './Input';
import Output from './Output';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenContext from '../contexts/TokenContext.js';
import UserContext from '../contexts/UserContext.js';
import RecordsContext from '../contexts/RecordsContext.js';
import { useState } from 'react';

export default function App() {
    const [token, setToken] = ('');
    const [user, setUser] = ('');
    const [records, setRecords] = useState([]);
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser }}>
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
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}