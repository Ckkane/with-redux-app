
'use client'
import styles from '../styles/Menu.module.css'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import {
    switchToggle
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


const Menu = () => {


    let pathName = usePathname();
    const dispatch = useAppDispatch();

    let menuData = [
        {
            name: 'Пиццы',
            path: 'pizza',
        },
        {
            name: 'Комбо',
            path: 'kombo',
        },
        {
            name: 'Закуски',
            path: 'zakyski',
        },
        {
            name: 'Коктейли',
            path: 'coctails',
        },
        {
            name: 'Кофе',
            path: 'coffe',
        },
        {
            name: 'Напитки',
            path: 'drinks',
        },
        {
            name: 'Десерты',
            path: 'deserts',
        },
        {
            name: 'Любят дети',
            path: 'childs',
        },
        {
            name: 'Соусы',
            path: 'sous',
        },
        {
            name: 'Другие товары',
            path: 'other',
        },
        {
            name: 'Акции',
            path: 'promo',
        },
    ]

    return (
        <div className={styles.menu}>
            <div className='container'>
                <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'90px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'850px',fontSize:'14px', fontWeight:'500'}}>
                        {menuData.map((item)=>{
                            return <span><Link className={styles.link + " " + `${pathName === '/' + item.path ? styles.active : ''}`} href={'/product/' + item.path}>{item.name}</Link></span>
                        })}
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