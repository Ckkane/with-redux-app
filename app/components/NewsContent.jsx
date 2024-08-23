'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import {
    addNews,
    getNews
  } from "@/lib/features/news/newsSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const NewsContent = () => {

    const dispatch = useAppDispatch();
    const news = useAppSelector(getNews);

    useEffect(()=>{
        axios.get('/api/news')
        .then((response) => {
            dispatch(addNews(response.data.news))
        })
    },[])


    function date(timestamp) {
        var date = new Date(timestamp);

        let months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'майя',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ]

        return  date.getUTCDate() + " " + months[date.getMonth()] + " " + date.getUTCFullYear();
    }

    console.log(news)

    return (
        <div className='container'>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div>
                    <span><a href="/"></a>Главная</span>
                    /
                    <span><a href="/"></a>Новости и акции</span>
                </div>
                
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
                    {news.map((item)=>{
                        return <div style={{display:'flex',flexDirection:'column', alignItems:'center', minWidth:'450px', maxWidth:'450px', margin:'20px'}}>
                            
                            <img width={300} src={item.image || "https://aligator.uz/img/empty-img.png"} alt="" srcset="" />
                            <h1 style={{fontSize:'25px'}}>{item.title}</h1>
                            <span className='description' style={{fontSize:'15px',padding:'15px'}}>{item.description}</span>

                            <div style={{display:'flex',justifyContent:'space-between', width:'100%', marginRight:'20px'}}>
                                <div></div>
                                <span>{date(item.date)}</span>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}




export default NewsContent;