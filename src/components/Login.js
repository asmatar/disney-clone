import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            login
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);

    
    &:before {

        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        // to cover all the page, all the div
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // z-index to not cover the content of the div
        z-index: -1;
    }


`
