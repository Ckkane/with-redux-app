import styles from '../styles/Product.module.css'
import React, { } from 'react';

import {
    selectItems,
    selectStatus,

  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from '@/lib/features/minicart/minicartSlice';

const Product = ({product, id, title, imgUrl, description, price, popluar, rating}) => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const status = useAppSelector(selectStatus);

    return (
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',flexDirection:'column',height:'450px',minWidth:'350px', padding:'10px', margin:'10px 0px'}}>
            <img src={imgUrl} style={{zIndex:'2'}} width={250} alt="" srcset="" />
            <h1 style={{fontSize:'25px'}}>{title}</h1>
            <div style={{width:'300px',height:'300px'}}>
                <span style={{color:'#797878', fontSize:'15px'}}>{description}</span>
            </div>
            <div className={styles.checkout}>
                <span style={{fontSize:'20px'}}>{price}₽</span>
                <button onClick={()=> dispatch(addToCart(product))} className='btn-red'>Добавить</button>
            </div>
        </div>
    )
}




export default Product;