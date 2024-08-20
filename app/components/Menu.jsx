
'use client'
import styles from '../styles/Menu.module.css'

import Link from 'next/link';

import {
    switchToggle
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


const Menu = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={styles.menu}>
            <div className='container'>
                <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'90px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'850px',fontSize:'14px', fontWeight:'500'}}>
                        <span><Link className={styles.link} href='/'>Пиццы</Link></span>
                        <span><Link className={styles.link} href='/kombo'>Комбо</Link></span>
                        <span><Link className={styles.link} href='/zakuski'>Закуски</Link></span>
                        <span><Link className={styles.link} href='/coctails'>Коктейли</Link></span>
                        <span><Link className={styles.link} href='/coffe'>Кофе</Link></span>
                        <span><Link className={styles.link} href='/drinks'>Напитки</Link></span>
                        <span><Link className={styles.link} href='/'>Десерты</Link></span>
                        <span><Link className={styles.link} href='/'>Любят дети</Link></span>
                        <span><Link className={styles.link} href='/'>Соусы</Link></span>
                        <span><Link className={styles.link} href='/'>Другие товары</Link></span>
                        <span><Link className={styles.link} href='/'>Акции</Link></span>
                    </div>
                    <div style={{width:'200px', display:'flex', justifyContent:'space-between'}}>
                        <Link href='/auth/login'><button className='btn-orange'>Войти</button></Link>
                        <button onClick={()=>{
                            dispatch(switchToggle());
                        }} className='btn-red'>Корзина</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}




export default Menu;