import React, {useState} from 'react';
import './../../메뉴바/style.css'
import { BsPlusLg,BsKey,BsCameraVideo } from 'react-icons/bs'
import { FiUser, FiSettings, FiHome } from 'react-icons/fi'
import { BiEnvelope, BiCamera } from 'react-icons/bi'
import {GrGamepad} from 'react-icons/gr'



const MenuBar = () => {
    const [plus, setPlus] = useState(false)
    const onClick = () => {
        setPlus(!plus)
    }
    return (
        // <div className='menu'>
            
            // plus === false ? ( <div className='menu' onClick={onClick}>
            // <div className='toggle'><BsPlusLg /></div> </div>)
            //     : (<div className='menu active' onClick={onClick}>
            //             <div className='toggle'><BsPlusLg /></div>
                        
            //                 <li style="--i:0;"><a href='#'><FiUser/></a></li>
            //                 <li style="--i:1;"><a href='#'><FiSettings /></a></li>
            //                 <li style="--i:2;"><a href='#'><BiEnvelope /></a></li>
            //                 <li style="--i:3;"><a href='#'><BsKey /></a></li>
            //                 <li style="--i:4;"><a href='#'><BsCameraVideo /></a></li>
            //                 <li style="--i:5;"><a href='#'><GrGamepad /></a></li>
            //                 <li style="--i:6;"><a href='#'><BiCamera /></a></li>
            //                 <li style="--i:7;"><a href='#'><FiHome /></a></li>
                        
            //         </div>)
            <div className='menu' onClick={onClick}>
                <div className='toggle'><BsPlusLg /><BsPlusLg /></div>
                <li style="--i:0;"><a href='#'><FiUser/></a></li>
                <li style="--i:1;"><a href='#'><FiSettings /></a></li>
                <li style="--i:2;"><a href='#'><BiEnvelope /></a></li>
                <li style="--i:3;"><a href='#'><BsKey /></a></li>
                <li style="--i:4;"><a href='#'><BsCameraVideo /></a></li>
                <li style="--i:5;"><a href='#'><GrGamepad /></a></li>
                <li style="--i:6;"><a href='#'><BiCamera /></a></li>
                <li style="--i:7;"><a href='#'><FiHome /></a></li>
            </div >

    )
}
export default MenuBar