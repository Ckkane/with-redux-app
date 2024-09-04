import type { Metadata } from "next";

import Head from 'next/head'
import seosettings from "../../seosettings";

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import NewsContent from '../../components/NewsContent'

export const dynamicParams = false

export async function generateStaticParams() {
  
    let menuData = [
        {
            name: 'Пиццы',
            path: 'pizzas',
        },
        {
            name: 'Комбо',
            path: 'kombo',
        },
        {
            name: 'Закуски',
            path: 'zakyski',
        },
        {
            name: 'Коктейли',
            path: 'coctails',
        },
        {
            name: 'Кофе',
            path: 'coffe',
        },
        {
            name: 'Напитки',
            path: 'drinks',
        },
        {
            name: 'Десерты',
            path: 'deserts',
        },
        {
            name: 'Любят дети',
            path: 'childs',
        },
        {
            name: 'Соусы',
            path: 'sous',
        },
        {
            name: 'Другие товары',
            path: 'other',
        },
        {
            name: 'Акции',
            path: 'promo',
        },
    ]

  return menuData.map((item) => {
    return {
      id: item.path
    }
  })
}


export default function IndexPage({ params: {id} }) {

    (async () => {
        let data;
        let response = await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        body: JSON.stringify({
            category: id,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })

    response = await response.json()

    data = await JSON.parse(JSON.stringify(response));

    console.log(data)

    return <div>{data.product.map((item) => {
        return <h1 key={item._id}>{item.title}</h1>
    })}</div>
    })()
}

export const metadata: Metadata = seosettings.pizzas;