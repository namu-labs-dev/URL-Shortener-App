import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import AddLink from '../components/AddLink'
import { QRCodeSVG } from 'qrcode.react'

const Home: NextPage = () => {
  const [id, setId] = useState('')

  const baseUrl =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-400">
      <Head>
        <title>Url Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-2xl rounded-md bg-white p-6 ">
        <h1 className="text-2xl font-semibold">URL Shortener</h1>
        <AddLink id={id} setId={setId} />

        {id && (
          <div className="mt-4 flex w-full flex-col items-center justify-center rounded-sm bg-fuchsia-50 p-3 text-xl text-cyan-800">
            <a
              href={`${baseUrl}/${id}`}
              target="_blank"
            >{`${baseUrl}/${id}`}</a>
            <QRCodeSVG value={`${baseUrl}/${id}`} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
