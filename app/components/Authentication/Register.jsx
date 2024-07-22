'use client'
import styles from '../../styles/Auth.module.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import {
    switchMethod,
    getMethod
  } from "@/lib/features/auth/authSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Register = () => {

    let [password, setPassword] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');

    let refInputPwd = useRef(null);
    let refCountSymbols = useRef(null);
    let refSpecSymbols = useRef(null);

    const dispatch = useAppDispatch();
    const method = useAppSelector(getMethod);

    useEffect(()=>{
        if(password.length <= 10 && password.length >= 0){
            refCountSymbols.current.style.color = '#939393'
        }else{
            refCountSymbols.current.style.color = '#59b959'
        }

        let specSymbols = ["!","@","#","$","%","^","*",'(',')',"_"]

        if(!!password.split('').find((item) => specSymbols.find((item2)=> item === item2))){
            refSpecSymbols.current.style.color = '#59b959'
        }else{
            refSpecSymbols.current.style.color = '#939393'
        }


    },[password])


    function register() {


        axios.post('/api/auth/register', {
            firstName: firstName,
            secondName: lastName,
            phoneNumber: phoneNumber,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div style={{backgroundColor:'rgb(249, 249, 249)',width:'600px',height:'850px', borderRadius:'10px'}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-between',height:'100%'}}>
                    <h1>Регистрация</h1>

                    <span>Заполните данные для регистрации нового пользователя</span>

                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%',width:'300px'}}>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Имя</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setFirstName(e.target.value)} value={firstName} type="text" placeholder='Введите Имя' />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Фамилия</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setLastName(e.target.value)} value={lastName} type="text" placeholder='Введите Фамилию' />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Пароль</span>
                            </div>
                            <input style={{padding:'10px'}} ref={refInputPwd} onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Введите Пароль' />

                            <div style={{padding:'10px 0px',display:'flex',flexDirection:'column',height:'70px',justifyContent:'space-around'}}>
                                <span ref={refCountSymbols}  style={{color:'#939393',fontSize:'12px'}}>Пароль должен содержать больше 10 символов</span>
                                <span ref={refSpecSymbols} style={{color:'#939393',fontSize:'12px'}}>Пароль должен содержать хоть один спецсимвол</span>
                            </div>

                            <input style={{padding:'10px'}} type="password" placeholder='Повторите Пароль' />
                        </div>



                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Email</span>
                            </div>
                            <input style={{padding:'10px'}} ref={refInputPwd} onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Введите Email' />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Телефон</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center', width:'100%'}}>
                                <div style={{width:'50px',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'15px'}}>
                                    <span style={{color:'rgb(94, 94, 94)'}}>+7</span>
                                </div>
                                <input style={{padding:'10px', width:'100%',fontSize:'15px'}} onChange={(e)=> setPhoneNumber(e.target.value)} type="text" placeholder='Введите номер телефона' />
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',height:'100px',justifyContent:'space-around',textAlign:'center'}}>

                            <button className='btn-red' onClick={()=> register()}>Зарегистрироваться</button>
                            <span style={{fontSize:'15px'}}>Уже есть аккаунт? <button style={{border:'none',backgroundColor:'transparent', color:'rgb(94, 94, 94)', fontSize:'15px', cursor:'pointer'}} onClick={()=> dispatch(switchMethod('login'))}>Войти</button></span>
                        </div>
                    </div>
                </div>
            </div>
    )
}




export default Register;