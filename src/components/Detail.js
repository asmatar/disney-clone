import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';
function Detail() {

    const {id} = useParams();
    // console.log(id)
    const [movie, setMovie] = useState({})
    useEffect(()=> {
        // gra the movie info from database
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc)=> {
            if (doc.exists) {
                // save the movie data
                setMovie(doc.data())
            } else {
                //redirect to home page if the movie doesn't exist

            }
        })
    }, [])

    console.log('movie is ', movie)

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="img details" />
            </Background>
            <ImageTitle>
                <img src={movie.cardImg} alt="image title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="group watch button" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.subTitle}
            </Subtitle>
            <Description>
               {movie.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0; 
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle= styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
const Controls= styled.div`
    display: flex;
    align-items: center;

`

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249 ,249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8p;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198 ,198);
    }
`
// the 2 button have more or less the same style, we can 'impo' the style ofPlayButton
const TrailerButton = styled(PlayButton)`
    background: rgba(0 ,0 ,0 ,0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);

`

const Subtitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    color: rgb(249, 249, 249);
`
const Description = styled.div`
    max-width: 760px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`
