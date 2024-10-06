import styles from '../styles/Menu.module.css'

import Link from 'next/link';


const TopOffers = ({data}) => {
    let items = data.product;

    return (
        <div className='container'>
            <h1 style={{fontSize:'25px'}}>Часто заказывают</h1>
            <div style={{display:'flex'}}>
                {[...items].sort((a,b)=> b.rating - a.rating).slice(0,3).map(e=> {
                    return <div style={{width:'200px',display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 20px', backgroundColor:'#fafafa', boxShadow:'1px 1px 10px #f2f2f2', margin:'10px',borderRadius:'10px'}}>
                        <img height={70} src={e.image} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                            <span style={{fontWeight:'500', fontSize:'12px'}}>{e.title}</span>
                            <span style={{fontSize:'12px', color:'#939393'}}>{e.price}₽</span>
                        </div>
                    </div>
                })} 
            </div>  
        </div>
    )
}




export default TopOffers;