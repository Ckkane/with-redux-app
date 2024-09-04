// 'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
// import { useEffect } from 'react'

// import {
//     addNews,
//     getNews
//   } from "@/lib/features/news/newsSlice";

// import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const NewsContent = ({data}) => {


    // console.log(data)

    return (
        <div className='container'>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{padding:'30px'}}>
                    <Link style={{color:'black', textDecoration:'none'}} href={'/'}>Главная</Link>
                     / 
                     <Link style={{color:'black', textDecoration:'none'}} href={'/news'}>Новости и акции</Link>
                </div>
                
                <div style={{height:'900px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img style={{borderRadius:'10px'}} width={400} height={400} src={data.news.image || "https://aligator.uz/img/empty-img.png"} alt="" srcset="" />
                    <h1>{data.news.title}</h1>
                    <div style={{width:'900px'}}>
                        <span style={{color:'rgb(147, 147, 147)'}}>{data.news.description}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default NewsContent;