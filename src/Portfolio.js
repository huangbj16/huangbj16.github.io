import { useState, useEffect, Profiler } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>

    <Navbar />

    <section id='home' className='text-center mt-40 flex flex-col justify-center'>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Bingjian Huang</h1>
    </section>

    <section id='research' className='mt-20 min-h-screen'>
      <h1 className='text-2xl font-medium'>Past Research Projects</h1>
      <p className='mt-1 text-lg'>My past research covers a wide range of topics, including mobile health, hand gesture design, mid-air input, 3D telepresence, etc</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/project_hand2hand'>
          <img src='./images/hand2hand.png' className='flex w-1/2' alt='hand gesture representation' />
          <h2 className='text-xl'>Designing and Evaluating Hand-to-Hand Gestures with Dual Commodity Wrist-Worn Devices</h2>
        </Link>

        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/project_airtyping'>
          <img src='./images/airtype.png' className='flex w-1/2' alt='mid-air typing' />
          <h2 className='text-xl'>Mid-Air Bimanual Typing Prototype with Leap Motion</h2>
        </Link>

        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/project_3dtelepresence'>
          <img src='./images/telepresence.jpg' className='flex w-1/2' alt='paper teaser figure showing 3D telepresence' />
          <h2 className='text-xl'>TeleCP: A 3D Telepresence Software Framework Supporting High-Level Co-Presence</h2>
        </Link>

      </div>
    </section>

    <Footer />

    </main>
  );
}

export default Portfolio;
