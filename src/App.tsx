'use client'

import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Login from './pages/Login'
import Home from './pages/Home'
import Setting from './pages/Setting'
import NotFound from './pages/NotFound'
import Footer from './components/footer'
import { Navigation, SidebarContent, MobileSidebar } from './components/sidebar'
import './App.css'

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    const [login, setLogin] = useState(true)
    const [collaps, setCollaps] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log('test mulai');
    }, [])

    const isLogin = (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent collaps={collaps} /*setCollaps={setCollaps}*/ display={{ base: 'false', md: 'block' }} />
            <Drawer
                size="full"
                isOpen={open}
                placement="left"
                onClose={() => setOpen(!open)}
                returnFocusOnClose={false}
            >
                <DrawerContent>
                    <MobileSidebar open={open} setOpen={setOpen}/>
                </DrawerContent>
            </Drawer>

            <Navigation collaps={collaps} setCollaps={setCollaps} open={open} setOpen={setOpen}/>
            <Box ml={{ base: 0, md: !collaps ? 20 : 60 }} p="4" minH="80vh">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    )

    const notLogin = (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )

    return (
        <BrowserRouter>
            { login ? isLogin : notLogin }
        </BrowserRouter>
    )
}

export default App
