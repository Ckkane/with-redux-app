import type { Metadata } from "next";
import Head from 'next/head'

import AdminPanel from '../components/AdminPanel'

export default function IndexPage() {

  return <div>
            <Head>
              {/* <title>Create Next App</title> */}
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              <link href="https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
              <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
              <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>

            </Head>
          <div>
            <AdminPanel/>
          </div>
        </div>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
