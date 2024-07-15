'use client'
import Cart from './Cart'

import {
  getToggle
} from "@/lib/features/minicart/minicartSlice";


import { useAppSelector } from "@/lib/hooks";

const Background = () => {

    let toggle = useAppSelector(getToggle);

    return ( 
        <div>
            { toggle ? null : <Cart/>}
        </div>
    )
}




export default Background;