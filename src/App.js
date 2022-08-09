import React from 'react';
import styled from 'styled-components';

import Aside from './component/Aside';
import Header from './component/header';
import Footer from './component/Footer'


function App() {

  const Layout = styled.div`
    width:90%;
    height:2000px;
    display:flex;
    flex-direction: row;

    main{ // footer를 아래로 내려주기 위해 임시로 작성한 코드
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `

  
  
  return (
    <Layout className="App">
      <main> 
        <Header />
        <Footer />
      </main>
      <Aside />
      
    </Layout>
  );
}

export default App;
