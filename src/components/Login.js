import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Cupiditate eos cum libero, qui vero reprehenderit voluptatem 
                    excepturi, ut iusto, officiis sint consequuntur? Dolore 
                    vitae architecto, exercitationem doloremque ab animi corrupti.
                </Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
  
    
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
        opacity: 0.7;
        // z-index to not cover the content of the div
        z-index: -1;
    }


`

const CTA = styled.div`
    max-width:650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`
    
const CTALogoOne = styled.img``

const CTALogoTwo = styled.img``
    
    const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-botton: 12px;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height: 1.5;
`
