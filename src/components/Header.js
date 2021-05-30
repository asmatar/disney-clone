import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto, setUserLogin } from '../features/user/userSlice';
import { auth, provider } from '../firebase';

function Header() {

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

        const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })
    }

    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            {
                //  if userName doesn't exist 
                !userName 
                // we show the login button
                ? 
                (
                    <LoginContainer>
                        <Login onClick = {signIn}>Login</Login>
                    </LoginContainer>
                )
                //otherwise ( if userName exist we show the menu)
                :
                <>
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" alt="" />
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" alt="" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src='/images/arthur.jpg' />
                </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`nav
height: 70 px;
background : #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflox-y: hidden;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px; 
        cursor: pointer;

        img {
            height: 20px;
        }
        
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right:0;
                bottom: -6px;
                // we hide the div and make it begin to 0 ( doesn't exist)
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                // this div will pass from 0 to 1
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border-color: transparent;
    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex:1;

`