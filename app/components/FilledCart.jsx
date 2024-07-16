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
                <div style={{width:'100%', display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                    <div style={{}}>
                    <h1 style={{textAlign:'center', margin:'40px 0px'}}>Корзина</h1>
                        {items.map(item => {
                            return <div style={{ display:'flex', alignItems:'center', padding:'5px 10px'}}>
                                    <div style={{ backgroundColor:'#e6e6e6', padding:'5px'}}>
                                        <img src={item.imgUrl} width={100} alt="" srcset="" />
                                    </div>
                                    <div style={{display:'flex',alignContent:'center',flexDirection:'column', justifyContent:'space-between', width:'100%'}}>
                                        <div>
                                            <span style={{fontSize:'18px',padding:'10px', fontWeight:'600'}}>{item.title}</span>
                                        </div>
                                        <div style={{display:'flex',border:'1px solid rgb(238, 238, 238)',borderRadius:'7px',width:'90px',height:'20px', fontSize:'17px',margin:'10px'}}>
                                            <div style={{display:'flex', height:'100%',justifyContent:'center',alignItems:'center', width:'30px'}}>
                                                <button onClick={() => dispatch(minusItem(item))} className='btn'>-</button>
                                            </div>
                                            <div style={{width:'45px',display:'flex',justifyContent:'center',height:'100%', alignItems:'center',borderLeft:'1px solid rgb(238, 238, 238)',borderRight:'1px solid rgb(238, 238, 238)'}}>
                                                <span style={{fontSize:'12px'}}>{item.count}</span>
                                            </div>
                                            <div style={{display:'flex', height:'100%',justifyContent:'center',alignItems:'center',width:'30px'}}>
                                                <button onClick={() => dispatch(plusItem(item))} className='btn'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginRight:'10px'}}>
                                        <span>{item.price * item.count}₽</span>
                                    </div>
                                </div>
                        })}
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>

                        <span>Ваш заказ:</span>
                        <div>
                            <span>В корзине: </span>
                            <span>{} товар</span>
                        </div>
                        <div>
                            <span>Итог {totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}




export default FilledCart;