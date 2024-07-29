import styles from '../styles/Product.module.css'
import React from 'react';
import Image from 'next/image'
import emptyPizza from "../../public/emptypizza.svg";

import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

import {
    switchToggle
  } from "@/lib/features/product/productSlice";

import {
    selectItems,
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from '@/lib/features/minicart/minicartSlice';

const Twopizzas = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);



    function selectPizza(item, event) {

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');


        div1.style.position = 'absolute'

        div2.style.position = 'relative'
        div2.style.background = 'white';
        div2.style.width = '100px'
        div2.style.height = '100px'
        div2.style.top = 0
        div2.style.left = 0


        div1.appendChild(div2)

        event.targetaa

        event.target.appendChild(div1)


    }

    return (
        <div style={{backgroundColor:'#cacacae5', position:'fixed', top:0, left:0, zIndex:'99999',width:'100%',height:'100%', display:'flex', justifyContent:'center', alignItems:'center', backgroundcolor:'red'}}>
            <div style={{display:'flex', width:'950px', height:'700px', backgroundColor:'white',borderRadius:'20px'}}>
                <div style={{width:'600px', height:'100%' }}>
                    <h1 style={{textAlign:'center', fontSize:'30px'}}>Выберите пиццы для левой и правой половинки</h1>

                    <div style={{display:'flex', width:'100%',flexWrap:'wrap', justifyContent:'center', overflowY:'scroll', maxHeight:'550px'}}>
                        {items.map((item)=>{
                            return <div onClick={(event)=> selectPizza(item, event)} style={{display:'flex',flexDirection:'column', width:'190px', justifyContent:'center',alignItems:'center', height:'220px'}}>
                                <img src={item.imgUrl} width={150} alt="" srcset="" />
                                <span style={{fontSize:'20px'}}>{item.title}</span>
                                <span style={{color:'#919191'}}>{item.price}</span>
                            </div>
                        })}
                    </div>

                </div>
                <div style={{width:'350px', height:'100%', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                    <div style={{height:'100px', display:'flex', alignItems:'center'}}>
                        <Image
                            priority
                            src={emptyPizza}
                            height={75}
                            alt=""
                            />
                        <span style={{color:'#bdbbbb'}}>Выберите левую половинку</span>
                    </div>
                    <div style={{height:'70px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Image
                            priority
                            src={emptyPizza}
                            height={75}
                            alt=""
                            />
                        <span style={{color:'#bdbbbb'}}>Выберите правую половинку</span>
                    </div>
                </div>
            </div>
            <button style={{backgroundColor:'transparent',border:'none', cursor:'pointer'}} onClick={()=>{dispatch(switchToggle(false))}}><IconContext.Provider value={{ size:'2.5em', color: "white", className: "global-class-name" }}>
                        <AiOutlineClose />
                </IconContext.Provider></button>
        </div>
    )
}




export default Twopizzas;