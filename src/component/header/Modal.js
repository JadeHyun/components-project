import React, { useEffect, useState } from 'react'
import styled from "styled-components"; //npm i styled-components
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from 'react-icons/si'
import naver from '../../img/naver_sprite.png'
import {AiFillHome} from 'react-icons/ai'


const Background = styled.div`
    .modal{
        /* 콘텐츠 크기와 배경 */
        width:500px;
        height:400px;
        background-color: white;
        color:black;
        border:1px solid black;
        /* 상단 코드는 위치를 잡아주는 코드 */
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        /* 내부 콘텐츠를 정렬해주는 코드 */
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    .modal button {
        width:50px;
        position:relative;
        top:10%;
        left:0;
    }

    .login_box{
        margin-top: 20px;
    }

    .login_box  a {
        margin:0 10px;
    }

    /* icons */
    #naver_icon{
        font-size: 44px;
        color:#19ce60;
    }

    #fb_icon{
        font-size: 44px;
        color:#0000ff;
    }

    #google_icon{
        font-size: 44px;
    }

    .box-shadow{
        box-shadow:1px 1px 1px 1px black;
    }

    /* ID & PW 입력 레이아웃 */
    input{
        display:block;
        margin-bottom: 10px;
    }

`;

const Modal = () => {
    const [open, setOpen] = useState(false);
    
    const onModal = () => {
        setOpen(!open)
    }

    return (
        <Background>
            <AiFillHome />
            <button className='openModalBtn' onClick={onModal}>모달창 클릭!</button>
            {open ? <div className='modal'>
                <h1>로그인</h1>
                <form>
                    <label for="id" className='layout'>아이디</label>
                    <input id='id' type="text" placeholder='ID' />
                    <label for="password" className='layout'>비밀번호</label>
                    <input id='password' type='password' placeholder='PASSWORD' />
                </form>
                <div className='login_box'>
                    <a id='naver_icon' href='https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com'><SiNaver className='box-shadow'/></a>
                    <a id='fb_icon' href='https://www.facebook.com/'><GrFacebook className='box-shadow'/></a>
                    <a id='google_icon' href='https://www.google.co.kr/'><FcGoogle className='box-shadow'/></a>
                </div>
                <button onClick={onModal}>닫기</button>
            </div> : null}
        </Background>
    )
}

export default Modal