'use client'
import styles from '../../styles/Auth.module.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import {
    switchMethod,
    getMethod
  } from "@/lib/features/auth/authSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Login = () => {

    let [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const method = useAppSelector(getMethod);

    return (
        <div style={{backgroundColor:'rgb(249, 249, 249)',width:'600px',height:'500px', borderRadius:'10px'}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-between',height:'100%'}}>
                    <h1>Авторизация</h1>

                    <span>Заполните данные для авторизации</span>

                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%',width:'300px'}}>

                    <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Email</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Введите Email' />
                        </div>
                       
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Пароль</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Введите Пароль' />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',height:'100px',justifyContent:'space-around',textAlign:'center'}}>

                            <button className='btn-red' onClick={()=> register()}>Войти</button>
                            <span style={{fontSize:'15px'}}>Нет аккаунта? <button style={{border:'none',backgroundColor:'transparent', color:'rgb(94, 94, 94)', fontSize:'15px', cursor:'pointer'}} onClick={()=> dispatch(switchMethod('register'))}>Зарегистрироваться</button></span>
                        </div>
                    </div>
                </div>
            </div>
    )
}




export default Login;