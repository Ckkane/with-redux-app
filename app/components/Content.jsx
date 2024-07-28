'use client'
import Product from '../components/Product'
import {useEffect} from 'react';

import {
    addToList,
    getData,
    selectItems,
    selectStatus,
  } from "@/lib/features/product/productSlice";
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Content = () => {


    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    const status = useAppSelector(selectStatus);


    useEffect(() => {
        dispatch(getData())
    },[])

    return (
        <div className='container'>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
            { status !== 'idle' ? null : items.map((item) => {

                if(item.title === 'Пицца из половинок'){
                    return <Product color={'#ffc24d'} key={item.id} product={item} id={item.id} title={item.title} imgUrl={item.imgUrl} description={item.description} price={item.price} popular={item.popular} rating={item.rating} />
                }

                return <Product color={null} key={item.id} product={item} id={item.id} title={item.title} imgUrl={item.imgUrl} description={item.description} price={item.price} popular={item.popular} rating={item.rating} />
            })}
        </div>
        </div>
    )
}




export default Content;