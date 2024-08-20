'use client'
import styles from '../styles/Menu.module.css'

import Link from 'next/link';

import {
    selectItems
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from 'react';


const TopOffers = () => {

    const dispatch = useAppDispatch();

    let items = useAppSelector(selectItems);

    return (
        <div className='container'>
            <h1 style={{fontSize:'25px'}}>Часто заказывают</h1>
            <div style={{display:'flex'}}>
                {[...items].sort((a,b)=> b.rating - a.rating).slice(0,3).map(e=> {
                    // backgroundColor:'#f5eae9'
                    return <div style={{width:'180px',display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', backgroundColor:'#fafafa', boxShadow:'1px 1px 10px #f2f2f2', margin:'10px',borderRadius:'10px'}}>
                        <img height={70} src={e.imgUrl} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                            <span style={{fontWeight:'500'}}>{e.title}</span>
                            <span style={{fontSize:'12px', color:'#939393'}}>{e.price}₽</span>
                        </div>
                    </div>
                })} 
            </div>  
        </div>
    )
}




export default TopOffers;