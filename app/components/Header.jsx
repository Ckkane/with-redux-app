import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='container'>
            <div style={{marginTop:'90px'}} className={styles.head}>
                <div className={styles.right}>
                    <Image width={120} height={120} src='/logo.png'/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span>240-88-88</span>
                        <span style={{color:'rgb(147, 147, 147)', fontSize:'12px'}}>Доставка еды в <span style={{color:'rgb(255 183 75)'}}>Москве</span></span>
                    </div>
                </div>
            </div>
            <div style={{width:'600px',height:'50px', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span>Новости и акции</span>
                <span>Доставка и оплата</span>
                <span>Отзвывы</span>
                <span>Вакансии</span>
                <span>Контакты</span>
            </div>
        </div>
    )
}




export default Header;