'use client'
import Cart from './Cart'
import Twopizzas from './Twopizzas'

import { useEffect } from 'react';

import {
  getToggle,
  updateState
} from "@/lib/features/minicart/minicartSlice";


import {
    getPizzasToggle
  } from "@/lib/features/product/productSlice";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";

const Background = () => {

    let toggle = useAppSelector(getToggle);
    let pizzasToggle = useAppSelector(getPizzasToggle);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        dispatch(updateState())
    },[])


    return ( 
        <div>
            { toggle ? null : <Cart/>}
            { pizzasToggle ? <Twopizzas/> : null}
        </div>
    )
}




export default Background;