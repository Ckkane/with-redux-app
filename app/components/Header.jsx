import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../components/Background'


const Header = () => {
    return (
        <div>
            <Background/>
            <div style={{marginTop:'90px'}} className='container'>
                <div className={styles.head}>
                    <div className={styles.right}>
                        <Image width={120} height={120} src='/logo.png'/>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <span>240-88-88</span>
                            <span style={{color:'rgb(147, 147, 147)', fontSize:'12px'}}>Доставка еды в <span style={{color:'rgb(255 183 75)'}}>Москве</span></span>
                        </div>
                    </div>
                </div>
                <div style={{width:'550px',height:'50px', display:'flex',justifyContent:'space-between',alignItems:'center', fontSize:'15px'}}>
                    <span><Link style={{textDecoration:'none', color:'rgb(147, 147, 147)'}} href="/news">Новости и акции</Link></span>
                    <span><Link style={{textDecoration:'none', color:'rgb(147, 147, 147)'}} href="/delivery">Доставка и оплата</Link></span>
                    <span><a style={{textDecoration:'none', color:'rgb(147, 147, 147)'}} href="">Вакансии</a></span>
                    <span><a style={{textDecoration:'none', color:'rgb(147, 147, 147)'}} href="">Контакты</a></span>
                    <span><a style={{textDecoration:'none', color:'rgb(147, 147, 147)'}} href="">Отзвывы</a></span>
                </div>
            </div>
        </div>
    )
}




export default Header;