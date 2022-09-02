import styled from 'styled-components'

const Sticky = () => {
    return <Style>
        <a href="*" className='after'>naver</a>
        <a href="*" className='layout'>google</a>
        <a href="*" className='layout'>daum</a>
        <a href="*" className='layout'>hello</a>
        <a href="*" className='layout'>world</a>
    </Style>
}

export default Sticky;

const Style = styled.nav`
    width:20%;
    height:20%;
    display:flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid black;
    position:sticky;
    top:150px;
    left:0;

    .layout{    
        margin-left: 10px;
    }

    .after::before{
        background: url('https://cdn.pixabay.com/photo/2013/04/01/08/26/browser-98386__340.png');
        background-size: cover;
        content:'';
        display:inline-block;
        height:10px;
        width:10px;
    }
`