import styles from '../styles/Cart.module.css'
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

import {
    getCartitems,
    minusItem,
    plusItem,
    getTotalPrice,
    getTotalItems,
    deleteItem
  } from "@/lib/features/minicart/minicartSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const FilledCart = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(getCartitems);
    const totalPrice = useAppSelector(getTotalPrice);
    const totalItems = useAppSelector(getTotalItems);

    return (<div className={styles.wrapper}>
                <div style={{width:'100%', display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                    <div style={{backgroundColor:'#fafafa'}}>
                        <h1 style={{textAlign:'center', padding:'20px 0px'}}>Корзина</h1>
                        <div style={{overflow:'auto',maxHeight:'530px', backgroundColor:'#fff'}}>
                            {items.map(item => {
                                return <div style={{ display:'flex', alignItems:'center', padding:'5px 10px'}}>
                                        <div style={{ backgroundColor:'rgb(245, 234, 233)', borderRadius:'10px', boxShadow:'rgb(242, 242, 242) 1px 1px 10px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            <img src={item.imgUrl} width={100} alt="" srcset="" />
                                        </div>


                                        <div style={{position:'relative'}}>

                                            <button style={{backgroundColor:'transparent',border:'none', cursor:'pointer', position:'inherit', top:'-40px', left:'230px'}} onClick={()=>{dispatch(deleteItem(item))}}>
                                                <IconContext.Provider value={{ size:'1.5em', color: "red", className: "global-class-name" }}>
                                                        <AiOutlineClose />
                                                </IconContext.Provider>
                                            </button>
                                            
                                        </div>

                                        <div style={{display:'flex',alignContent:'center',flexDirection:'column', justifyContent:'space-between', width:'100%'}}>
                                            <div>
                                                <span style={{fontSize:'18px',padding:'10px', fontWeight:'600'}}>{item.title}</span>
                                            </div>
                                            <div style={{display:'flex', backgroundColor:'#f4e9e8', boxShadow:'rgb(242, 242, 242) 1px 1px 10px', borderRadius:'7px',width:'90px',height:'20px', fontSize:'17px',margin:'10px'}}>
                                                <div style={{display:'flex', height:'100%',justifyContent:'center',alignItems:'center', width:'30px'}}>
                                                    <button onClick={() => dispatch(minusItem(item))} className='btn'>-</button>
                                                </div>
                                                <div style={{width:'45px',display:'flex',justifyContent:'center',height:'100%', alignItems:'center',borderLeft:'1px solid white',borderRight:'1px solid white'}}>
                                                    <span style={{fontSize:'12px'}}>{item.count}</span>
                                                </div>
                                                <div style={{display:'flex', height:'100%',justifyContent:'center',alignItems:'center',width:'30px'}}>
                                                    <button onClick={() => dispatch(plusItem(item))} className='btn'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginRight:'10px'}}>
                                            <span style={{color:'rgb(147, 147, 147)'}}>{item.price * item.count}₽</span>
                                        </div>
                                    </div>
                            })}
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', marginBottom:'50px'}}>
                        
                        <div style={{margin:'0px 30px'}}>
                            <div style={{display:'flex',flexDirection:'column', borderTop:'1px solid #dbdbdb', borderBottom:'1px solid #dbdbdb',padding:'20px'}}>
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', fontSize:'20px',padding:'5px 0px'}}>
                                    <span>В корзине:</span>
                                    <span>{totalItems} товаров</span>
                                </div>

                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', fontSize:'25px',padding:'5px 0px'}}>
                                    <span>Итого:</span>
                                    <span>{totalPrice}₽</span>
                                </div>
                            </div>
                        </div>

                        <div style={{height:'50px', width:'100%', alignItems:'center', display:'flex', justifyContent:'center'}}>
                                <div style={{ display:'flex', justifyContent:'space-between',alignItems:'center', width:'300px'}}>
                                    <span style={{}}>Доставка:</span>
                                    <span>Бесплатно</span>
                                </div>
                            </div>
{/* 
                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                            <input type="text" placeholder='Введите купон' />
                            <button className='btn-red' style={{borderRadius:'0'}}>Применить</button>
                        </div> */}
                        <div style={{marginTop:'10px', display:'flex',justifyContent:'center'}}>
                            <button className='btn-red' style={{borderRadius:'0'}}>Оформить заказ</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
    )
}




export default FilledCart;