import styles from '../styles/Product.module.css'
import React from 'react';
import emptyPizza from "./../../public/emptypizza.svg";

import {
    selectItems,
    selectStatus,

  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from '@/lib/features/minicart/minicartSlice';

const Twopizzas = ({product, id, title, imgUrl, description, price, popular, rating}) => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const status = useAppSelector(selectStatus);

    return (


        <div style={{backgroundColor:'#cacacae5', position:'fixed', top:0, left:0, zIndex:'99999',width:'100%',height:'100%', display:'flex', justifyContent:'center', alignItems:'center', backgroundcolor:'red'}}>
            <div style={{display:'flex', width:'900px', height:'700px', backgroundColor:'white',borderRadius:'20px'}}>
                <div style={{width:'600px', height:'100%' }}>
                    <h1 style={{textAlign:'center', fontSize:'30px'}}>Выберите пиццы для левой и правой половинки</h1>

                    <div style={{display:'flex', width:'100%',flexWrap:'wrap', justifyContent:'center', overflowY:'scroll', maxHeight:'550px'}}>
                        {items.map((item)=>{
                            return <div style={{display:'flex',flexDirection:'column', width:'190px', justifyContent:'center',alignItems:'center', height:'220px'}}>
                                <img src={item.imgUrl} width={150} alt="" srcset="" />
                                <span style={{fontSize:'20px'}}>{item.title}</span>
                                <span style={{color:'#919191'}}>{item.price}</span>
                            </div>
                        })}
                    </div>

                </div>
                <div style={{width:'300px', height:'100%', display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                    <div style={{height:'100px', backgroundColor:'red'}}>
                        <img src={emptyPizza} alt="" />
                        <span>Выберите левую половинку</span>
                    </div>
                    <div style={{height:'100px'}}>
                        <span>Выберите правую половинку</span>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Twopizzas;