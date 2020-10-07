import React from 'react'
import styled from'styled-components'

const Slide = styled.div`
    margin: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    overflow: hidden;
`

const SlideTitle = styled.div`
    position: absolute;
    margin-top: 20px;
    top: 0;
    font-size: 2em;
    color: #fff;
`

const SlideDiscription = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 2em;
    color: #fff;
`
const SlidePred = styled.div`
    left: 0px;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 4em;
    -webkit-transition: 0.6s ease;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    line-height: 0.5;
`
const SlideDarkFon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(000,000,000, 0.3);
`
const SlideNext = styled.div`
    right: 0px;
    border-radius: 3px 0 0 3px;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 4em;
    -webkit-transition: 0.6s ease;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    line-height: 0.5;
`


export default function Card({property, index, pred, next}) {
    return (
            <Slide style={{backgroundImage: `url(${property[index].picture})`}}>
                <SlideDarkFon>
                    <SlideTitle>{property[index].title}</SlideTitle>
                    <SlideDiscription>{property[index].discription}</SlideDiscription>
                    <SlidePred  onClick = {pred} > { '<' } </SlidePred>
                    <SlideNext  onClick = {next} > { '>' } </SlideNext>
                </SlideDarkFon>
            </Slide>
    )
}
