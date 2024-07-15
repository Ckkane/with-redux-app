import styles from '../styles/Cart.module.css'


import {
    selectItems
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Cart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div style={{width:'100%'}}>
                    <h1 style={{textAlign:'center', margin:'40px 0px'}}>Shopping Cart</h1>
                    <div style={{}}>
                        
                    </div>
                </div>
                <div style={{backgroundColor:'#eee',width:'400px',height:'100%'}}>

                </div>
            </div>
        </div>
    )
}




export default Cart;