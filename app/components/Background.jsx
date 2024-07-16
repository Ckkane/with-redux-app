'use client'
import Cart from './Cart'

import { useEffect } from 'react';

import {
  getToggle,
  updateState
} from "@/lib/features/minicart/minicartSlice";


import { useAppSelector, useAppDispatch } from "@/lib/hooks";

const Background = () => {

    let toggle = useAppSelector(getToggle);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        dispatch(updateState())
    },[])


    return ( 
        <div>
            { toggle ? null : <Cart/>}
        </div>
    )
}




export default Background;