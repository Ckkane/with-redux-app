import Link from 'next/link';
import styles from '../styles/Menu.module.css'
// import { useEffect } from 'react';


let footerData1 = [
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

let footerData2 = [
    {
        name: 'Новости и акции',
        path: 'pizza',
    },
    {
        name: 'Доставка и оплата',
        path: 'kombo',
    },
    {
        name: 'Вакансии',
        path: 'zakyski',
    },
    {
        name: 'Контакты',
        path: 'coctails',
    },
    {
        name: 'Отзвывы',
        path: 'coffe',
    }
]

const Footer = () => {

    return (
        <div style={{backgroundColor:'rgb(245, 234, 233)'}}>
            <div className='container'> 
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'400px', display:'flex', justifyContent:'space-between', margin:'50px 0px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            {footerData1.map((item)=>{
                                return <Link style={{color:'black', textDecoration:'none'}} href={'/' + item.path}>{item.name}</Link>
                            })}
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            {footerData2.map((item)=>{
                                return <Link style={{color:'black', textDecoration:'none'}} href={'/' + item.path}>{item.name}</Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Footer;