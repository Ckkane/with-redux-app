import type { Metadata } from "next";
import Head from 'next/head'
import seosettings from "./seosettings";

import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import TopOffers from './components/TopOffers'
import Footer from './components/Footer'
import Discount from './components/Discount'

export default function IndexPage() {

      return (async () => {
        let data;
        let response = await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        body: JSON.stringify({
            category: 'pizza',
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })

    response = await response.json()

    data = await JSON.parse(JSON.stringify(response));

    return <div>
              <Menu/>
              <Header/>
              {data.product.length > 0 ? 
              <div>
                  <Discount data={data}/> <TopOffers data={data}/> <Content data={data}/>
              </div> : null}
              <Footer/>
            </div>
    })()
}

export const metadata: Metadata = seosettings.pizzas;
