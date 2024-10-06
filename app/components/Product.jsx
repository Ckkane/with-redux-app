import styles from '../styles/Product.module.css'
import React, { } from 'react';

import {
    selectItems,
    selectStatus,
    switchToggle
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from '@/lib/features/minicart/minicartSlice';

const Product = ({product}) => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const status = useAppSelector(selectStatus);
    return (
        <div className={styles.product}>
            <img src={product.image} style={{zIndex:'2'}} width={250} alt="" srcset="" />
            <h1 style={{fontSize:'25px'}}>{product.title}</h1>
            <div style={{width:'330px',height:'300px'}}>
                <span style={{color:'rgb(147, 147, 147)', fontSize:'13px'}}>{product.description}</span>
            </div>
            <div className={styles.checkout}>
                {product.discount > 0 ? <div style={{display:'flex',flexDirection:'column'}}>
                    <span style={{fontSize:'20px', textDecoration:'line-through'}}>{product.price}₽</span>
                    <span style={{fontSize:'20px'}}>{(((100 - product.discount) / 100) * product.price).toFixed(0)}₽</span>
                </div> : <span style={{fontSize:'20px'}}>{product.price}₽</span>}
                {product.title === 'Пицца из половинок' ? 
                    <button onClick={()=> {
                        dispatch(switchToggle(true))
                    }} className='btn-orange'>Собрать</button> : 
                    <button onClick={()=> {
                        dispatch(addToCart(product))
                        console.log(product)
                    }} className='btn-red'>Добавить</button>}
            </div>
        </div>


    )
}




export default Product;