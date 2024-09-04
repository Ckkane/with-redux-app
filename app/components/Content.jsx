'use client'
import Product from '../components/Product'
import TopOffers from './TopOffers';
import React, {useEffect, useRef} from 'react';

import {
    addToList,
    getData,
    selectItems,
    selectStatus,
    filterItems,
    selectFiltredItems
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Content = ({data}) => {


    const dispatch = useAppDispatch();
    const items = data.product;
    const status = useAppSelector(selectStatus);
    const filtredItems = items;


    let fromRef = React.useRef(null);
    let toRef = React.useRef(null);


    useEffect(() => {
        dispatch(getData())
    },[])


    useEffect(()=>{

        dispatch(filterItems({
            from: fromRef.current.value, 
            to: toRef.current.value
        }))

    },[items])

    return (
        <div className='container'>
            <h1>Пиццы</h1>
            <div style={{display:'flex'}}>
                <div style={{width:'300px', borderRadius:'10px', margin:'10px', backgroundColor:'transparent'}}>
                    <div style={{marginTop:'30px',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                        <div>
                            <span style={{fontSize:'20px',textAlign:'center',marginLeft:'30px'}}>Цена:</span>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'70px',marginTop:'20px',marginBottom:'20px'}}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <span>от</span>
                                    <input ref={fromRef} onChange={(event)=> {
                                        dispatch(filterItems({
                                            from: fromRef.current.value, 
                                            to: toRef.current.value
                                        }))

                                    }} style={{width:'60px', padding:'5px', margin:'0px 5px', color:'rgb(147, 147, 147)', fontFamily:'Manrope', fontWeight:'300',borderRadius:'3px',border:'1px solid #ede9e9'}} defaultValue={0} type="number" name="" id="" />
                                    <span>до</span>
                                    <input ref={toRef} onChange={(event)=> {
                                        dispatch(filterItems({
                                            from: fromRef.current.value, 
                                            to: toRef.current.value
                                        }))
                                    }} style={{width:'60px', padding:'5px', margin:'0px 5px', color:'rgb(147, 147, 147)', fontFamily:'Manrope', fontWeight:'300',borderRadius:'3px',border:'1px solid #ede9e9'}} defaultValue={1000} type="number" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{fontSize:'20px',textAlign:'center',marginLeft:'30px'}}>Ингридиенты:</span>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'70px',marginTop:'20px',marginBottom:'20px'}}>
                                <label className="checkbox">Сырный соус
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkbox">Моцарелла
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkbox">Чеснок
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkbox">Солёные огурчики
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div>
                                <label className="checkbox">Красный лук
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div style={{width:'100%', minHeight:'900px'}}>
                    <div style={{display:'flex', marginLeft:'30px'}}>
                        <span>Сортировка по <span style={{color:'rgb(255 183 75)', textDecoration:'underline'}}>рейтингу</span> </span>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
                    { status !== 'idle' ? null : filtredItems.map((item) => {
                        return <Product key={item._id} product={item} />
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Content;