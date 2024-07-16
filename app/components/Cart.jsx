import styles from '../styles/Cart.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

import FilledCart from './FilledCart';
import Empty from './EmptyCart';

import {
    getCartitems,
    switchToggle,
    getTotalPrice
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Cart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(getCartitems);
    const totalPrice = useAppSelector(getTotalPrice);

    return (
        <div className={styles.container}>
            <div></div>
            <div style={{height:"100%",display:'flex',alignItems:'center'}}>
                <button style={{backgroundColor:'transparent',border:'none', cursor:'pointer'}} onClick={()=>{dispatch(switchToggle())}}><IconContext.Provider value={{ size:'2.5em', color: "white", className: "global-class-name" }}>
                        <AiOutlineClose />
                </IconContext.Provider></button>
                {items.length > 0 ? <FilledCart/> : <Empty/>}
            </div>
        </div>
    )
}




export default Cart;