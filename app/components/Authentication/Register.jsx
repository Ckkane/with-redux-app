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

    let [password1, setPassword1] = useState('');
    let [password2, setPassword2] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');

    let refInputPwd = useRef(null);
    let refCountSymbols = useRef(null);
    let refSpecSymbols = useRef(null);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(password1.length <= 10 && password1.length >= 0){
            refCountSymbols.current.style.color = '#939393'
        } else {
            refCountSymbols.current.style.color = '#59b959'
        }

        let specSymbols = ["!", "@", "#", "$", "%", "^", "*", '(', ')', "_"]

        if(!!password1.split('').find((item) => specSymbols.find((item2)=> item === item2))){
            refSpecSymbols.current.style.color = '#59b959'
        } else {
            refSpecSymbols.current.style.color = '#939393'
        }


    },[password1])


    function checkPassword(pwd) {
        return password1 === password2 && password1 !== ''
    }



    function register() {


        if(firstName === ''){
            alert('Введите имя')
            return
        }

        if(lastName === ''){
            alert('Введите фамилию')
            return
        }

        if(!checkPassword()){
            alert('Пароли не совпадают')
            return
        }

        if(!email.split('').find((elem)=> elem === '@')){
            alert('Укажите правильный Email')
            return
        }

        if(phoneNumber === '' || phoneNumber.length < 10 || phoneNumber.length > 10){
            alert('Неправильный телефон')
            return
        }

        axios.post('/api/auth/register', {
            firstName: firstName,
            secondName: lastName,
            phoneNumber: phoneNumber,
            password: password1,
            email: email
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
                            <input style={{padding:'10px'}} ref={refInputPwd} onChange={(e)=> setPassword1(e.target.value)} value={password1} type="password" placeholder='Введите Пароль' />

                            <div style={{padding:'10px 0px',display:'flex',flexDirection:'column',height:'70px',justifyContent:'space-around'}}>
                                <span ref={refCountSymbols}  style={{color:'#939393',fontSize:'12px'}}>Пароль должен содержать больше 10 символов</span>
                                <span ref={refSpecSymbols} style={{color:'#939393',fontSize:'12px'}}>Пароль должен содержать хоть один спецсимвол</span>
                            </div>

                            <input style={{padding:'10px'}} onChange={(e)=> {setPassword2(e.target.value)}} value={password2} type="password" placeholder='Повторите Пароль' />
                        </div>



                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                        <div style={{padding:'10px 0px'}}>
                                <span style={{color:'#5e5e5e'}}>Email</span>
                            </div>
                            <input style={{padding:'10px'}} onChange={(e)=> setEmail(e.target.value)} value={email} type="password" placeholder='Введите Email' />
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