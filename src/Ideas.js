import { useState, useEffect, Profiler } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Ideas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>

    <Navbar />

    <section id='home' className='text-center mt-40 flex flex-col justify-center'>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Bingjian Huang</h1>
    </section>

    <section id='articles' className='mt-20 min-h-screen'>
      <h1 className='text-2xl font-medium'>Articles</h1>
      <p className='mt-1 text-lg'>This page records my thoughts about research, society, and life, etc</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/Article_0_haptics'>
          <img src='./images/sketch_vr_dalle.png' className='flex w-1/2' alt='sketch of vr' />
          <h2 className='text-xl'>Envisioning the future of tactile feedback</h2>
        </Link>

      </div>
    </section>

    <Footer />

    </main>
  );
}

export default Ideas;
