import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

function Home() {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5wh + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
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