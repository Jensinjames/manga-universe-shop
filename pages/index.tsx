import React from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next.js Web Application</title>
        <meta name="description" content="A cutting-edge web application leveraging the Next.js framework" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to our Next.js Web Application</h1>
        <p>This is a cutting-edge web application designed to deliver an exceptional user experience with enhanced performance and scalability.</p>
      </main>

      <Footer />
    </div>
  )
}

export default Home;