import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="viewer images" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="viewer images" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="viewer images" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="viewer images" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="viewer images" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr))

`
const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249,0.1);
    boder-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`