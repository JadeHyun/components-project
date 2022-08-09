import React from 'react';
import styled from "styled-components";

const AsideController = styled.aside`

    .aside_maker{
        width:100%;
        padding:20px;
        background-color:white;
        color:black;
        position: sticky;
        top: 100px;
        border:1px solid black;
    }
    .aside_maker a{
        text-align: center;
        display: block;
        margin: 20px 0;
    }
`

export default function Aside(){
    return (
        <AsideController>
            <section className='aside_maker'>
                <a href='#top'>TOP</a>
                <a href='#bottom'>BOTTOM</a>
            </section>
        </AsideController>
    )
}