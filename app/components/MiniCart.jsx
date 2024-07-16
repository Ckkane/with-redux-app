
'use client'
import styles from '../styles/MiniCart.module.css'

import {
    switchToggle,
    getToggle
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


const Minicart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(getToggle);

    return (
        <div>
        </div>
    )
}




export default Minicart;