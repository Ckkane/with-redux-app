'use client'
import styles from '../../styles/Auth.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Register from './Register'
import Login from './Login'

import {
    switchMethod,
    getMethod
  } from "@/lib/features/auth/authSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Component = () => {

    const dispatch = useAppDispatch();
    const method = useAppSelector(getMethod);

    return <div className={styles.container}>{method === 'register' ? <Register/> : <Login/>}</div>
}

export default Component;