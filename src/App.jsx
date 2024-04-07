import { UserProvider } from "./lib/context/user"
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register, ComingSoon } from './routes'
import { MyNavbar, BrandBar, PrivateRoutes } from './components'

function App() {
    return (
        <>
            <BrandBar />
            <UserProvider>
                <MyNavbar />
                <main className="d-flex min-vh-100">
                    <Routes>
                        <Route path="/login" element={<Login />} />,
                        <Route path="/register" element={<Register />} />,
                        <Route path="/about" element={<ComingSoon/>}/>,
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<ComingSoon />} />,
                        </Route>
                    </Routes>
                </main>
            </UserProvider>
        </>
    )
}

export default App