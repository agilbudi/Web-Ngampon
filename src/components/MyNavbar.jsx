import React, { useState, useEffect } from 'react'
import { UserProvider, useUser } from "../lib/context/user"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import "./MyNavbar.css";

export const MyNavbar = () => {
    const pathUrl = window.location.pathname
    const user = useUser()
    const [icon, setIcon] = useState(false)
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        if(!pathUrl === '/login'){
            setLogin(false)
        }
    }, [isLogin])
    
    const menuHandler = () => setLogin(false)
    const stateButton = () => setLogin(!isLogin)

    useEffect(() => {
        const showIcon = () => {
            if (window.scrollY >= 140) {
                setIcon(true)
            } else {
                setIcon(false)
            }
        }
        window.addEventListener('scroll', showIcon)
        return () => window.removeEventListener('scroll', showIcon)
    }, [icon])
    

    return (
        <Navbar expand="md" data-bs-theme='dark' sticky='top' className='myNavbar shadow-lg'>
            <Container fluid className='mx-5'>
                <Navbar.Brand href="#">
                    <img className={icon ? 'd-inline-block align-top' : 'd-none align-top'} src='https://firebasestorage.googleapis.com/v0/b/business-project-4040.appspot.com/o/public%2Flogo-karangtaruna-ngampon.png?alt=media&token=e0832986-0ceb-4616-a169-062ab44e1b36' />
                    Ngampon
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/" className='nav-link'  onClick={menuHandler}>Home</NavLink>
                        <NavLink to="/about" className='nav-link'  onClick={menuHandler}>Tentang</NavLink>
                    </Nav>
                    <Nav className='ms-auto'>
                        {
                            user.current ? (
                                // path=/
                                <>
                                    <span>{user.current.email}</span>
                                    <Button variant="outline-danger"  onClick={menuHandler}>Logout</Button>{() => user.logout()}
                                </>
                            ) : (
                                // path= selain /
                                //<NavLink to="/login" className='nav-link'>Login</NavLink>
                                <NavLink className='nav-link' to={isLogin ? '/register' : '/login'} onClick={stateButton}>
                                    {isLogin ? 'Register' : 'Login'}
                                </NavLink>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function LogoutButton(props) {
    return (
        <>
            <span>{user.current.email}</span>
            <Button variant="outline-danger">Logout</Button>{() => user.logout()}
        </>
    );
}