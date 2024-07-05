// import styles from '../styles/Product.module.css'
'use client'
import React from 'react';

import {
    addToList,
    selectItems
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Product = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    return (
        <div>
            {items.map((item)=> {
                return <h1>{item}</h1>
            })}
        </div>
    )
}




export default Product;