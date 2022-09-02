// import React from 'react';
import styled from 'styled-components';
import Sticky from './메뉴바/sticky'

// import DropDown from "./메뉴바/DropDown";

// import Exam1 from "./recoil/exam1";
// import Exam2 from "./recoil/exam2";

// import Aside from './component/Aside';
// import Header from './component/header';
// import Footer from './component/Footer'
// import MenuBar from './component/menubar/MenuBar';
// import Item1 from "./zustand/Zustand1";
// import Item2 from "./zustand/Zustand2";


function App() {

  // const Layout = styled.div`
  //   width:90%;
  //   height:2000px;
  //   display:flex;
  //   flex-direction: row;

  //   article{ // footer를 아래로 내려주기 위해 임시로 작성한 코드
  //     display:flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //   }
  // `

  
  
  return (
    <Content>
      <header>This it menu</header>
      <main>
        <Sticky />
        <section>hello world</section>
        <aside>This is aside</aside>
      </main>
      <footer>This is footer </footer>
    </Content>
  );
}

const Content = styled.article`
  display: flex;
  flex-direction: column;

  header{
    width:100%;
    height:100px;
    text-align: center;
    padding-top:50px;
    background-color: yellow;
    position:fixed;
    z-index:99;
  }
  main{
    width:100%;
    background-color: green;
    margin-top:150px;
    height: 2000px;
    display: flex;
    justify-content: space-between;
  }

  aside{
    width:20%;
    height:500px;
    background-color: white;
  }

  section{
    width:100%;
    border:1px solid black;
  }

  footer{
    background-color: gray;
    height:500px;
  }
`

export default App;
