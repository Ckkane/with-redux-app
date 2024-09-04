'use client'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import {
    switchMethod,
    getMethod
  } from "@/lib/features/auth/authSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const AdminPanel = () => {

    const dispatch = useAppDispatch();

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [image, setImage] = useState('');


    let [productTitle, setProductTitle] = useState('');
    let [productDescription, setProductDescription] = useState('');
    let [productImage, setProductImage] = useState('');
    let [productCategory, setProductCategory] = useState('');
    let [productPrice, setProductPrice] = useState('');
    let [productDiscount, setProductDiscount] = useState('');

    function addNews() {

        axios.post('/api/news', {
            title: title,
            description: description,
            image: image ? image : ""
          })
          .then(function (response) {

            if(response.status === 200){
                setTitle('')
                setDescription('')
                setImage('')
                alert('новость добавлена')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function addProduct() {

        axios.patch('/api/product', {
            title: productTitle,
            imgUrl: productImage,
            description: productDescription || "",
            price: productPrice,
            discount: productDiscount,
            category: productCategory

          })
          .then(function (response) {

            if(response.status === 200){
                setProductTitle('')
                setProductDescription('')
                setProductImage('')
                setProductCategory('')
                setProductPrice('')
                setProductDiscount('')
                alert('Товар добавлен')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div style={{display:'flex'}}>
            <div style={{backgroundColor:'rgb(249, 249, 249)',width:'600px',height:'850px', borderRadius:'10px'}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-between',height:'100%'}}>
                    <h1>Товары</h1>

                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%',width:'300px'}}>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Title</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setProductTitle(e.target.value)} value={productTitle} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Category</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setProductCategory(e.target.value)} value={productCategory} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Description</span>
                            </div>
                            <textarea style={{width:'277px', height:'181px', maxWidth:'277px', maxHeight:'181px'}} onChange={(e)=> setProductDescription(e.target.value)} value={productDescription} name="" id=""></textarea>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Image</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setProductImage(e.target.value)} value={productImage} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Price</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setProductPrice(e.target.value)} value={productPrice} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Discount</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setProductDiscount(e.target.value)} value={productDiscount} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',height:'100px',justifyContent:'space-around',textAlign:'center'}}>

                            <button className='btn-red' onClick={()=> addProduct()}>Добавить товар</button>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'rgb(249, 249, 249)',width:'600px',height:'850px', borderRadius:'10px'}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-between',height:'100%'}}>
                    <h1>Новости и Акции</h1>

                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%',width:'300px'}}>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Title</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setTitle(e.target.value)} value={title} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Description</span>
                            </div>
                            <textarea style={{width:'277px', height:'181px', maxWidth:'277px', maxHeight:'181px'}} onChange={(e)=> setDescription(e.target.value)} value={description} name="" id=""></textarea>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                    <span style={{color:'#5e5e5e'}}>Image</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setImage(e.target.value)} value={image} type="text" />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',height:'100px',justifyContent:'space-around',textAlign:'center'}}>

                            <button className='btn-red' onClick={()=> addNews()}>Добавить новость</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}




export default AdminPanel;