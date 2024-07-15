
'use client'
import styles from '../styles/MiniCart.module.css'

import {
    switchToggle,
    getToggle
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


const MiniCart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(getToggle);

    return (
        <div className={styles.minicart}>
            <div className='container'>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'90px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'850px',fontSize:'14px'}}>
                        <span><a className={styles.link} href='/'>Пиццы</a></span>
                        <span><a className={styles.link} href='/'>Комбо</a></span>
                        <span><a className={styles.link} href='/'>Закуски</a></span>
                        <span><a className={styles.link} href='/'>Коктейли</a></span>
                        <span><a className={styles.link} href='/'>Кофе</a></span>
                        <span><a className={styles.link} href='/'>Напитки</a></span>
                        <span><a className={styles.link} href='/'>Десерты</a></span>
                        <span><a className={styles.link} href='/'>Любят дети</a></span>
                        <span><a className={styles.link} href='/'>Соусы</a></span>
                        <span><a className={styles.link} href='/'>Другие товары</a></span>
                        <span><a className={styles.link} href='/'>Акции</a></span>
                    </div>
                    <div style={{width:'140px'}}>
                        <button onClick={()=>{
                            dispatch(switchToggle());
                        }} className='btn-red'>Корзина</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default MiniCart;