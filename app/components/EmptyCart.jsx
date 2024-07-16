import styles from '../styles/Cart.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

import {
    getCartitems,
    minusItem,
    plusItem,
    getTotalPrice
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const FilledCart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(getCartitems);
    const totalPrice = useAppSelector(getTotalPrice);

    return (<div className={styles.wrapper}>
                <div style={{width:'100%', display:'flex',flexDirection:"column",justifyContent:'center'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:"column"}}>
                    <h1 style={{textAlign:'center', margin:'40px 0px'}}>Корзина пуста</h1>
                    <img height={100} src="https://cdn-icons-png.flaticon.com/512/34/34568.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
    )
}




export default FilledCart;