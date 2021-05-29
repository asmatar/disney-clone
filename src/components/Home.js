import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setMovies } from '../features/movie/movieSlice';
import db from '../firebase';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';

function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            //console.log(snapshot)
            let tempMovies = snapshot.docs.map((doc)=>{
                // console.log(doc.data())
                return { id: doc.id, ...doc.data() }
            })
            // console.log(tempMovies)
            dispatch(setMovies(tempMovies))

        })
    }, [])


    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
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