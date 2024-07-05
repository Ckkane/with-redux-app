import styles from '../styles/Header.module.css'
import Image from 'next/image'


const Header = () => {
    return (
        <div style={{marginTop:'90px'}} className={styles.head + " container"}>
            <div className={styles.right}>
                <Image width={120} height={120} src='/logo.png'/>
                <span style={{marginLeft:'30px'}}>Доставка пиццы в <a style={{color:'#f53823'}} href='https://ya.ru'>Москва</a> </span>
            </div>

            <div className={styles.left}>
                <button style={{display:'flex',alignItems:'center',justifyContent:'space-between', backgroundColor: "#f0f0f0",border: 'none',padding: '3px 15px',borderRadius: '322px'}}>
                    <span style={{color: 'rgb(179, 178, 178)', fontSize:'15px'}}>Coins</span>
                    <Image width={25} height={25} src='/coins.png'/>
                </button>
                <button className='btn-red'>Войти</button>

            </div>
        </div>
    )
}




export default Header;