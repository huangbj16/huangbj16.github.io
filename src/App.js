import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Aboutme from './Aboutme';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone, AiFillTwitterCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>

    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='./images/profile.jpg' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl mt-10 md:text-5xl font-medium text-teal-500'>Bingjian Huang</h1>
        <h3 className='text-xl mt-10 md:text-2xl'>Researcher, HCI, XR, Haptics, Electronics</h3>
        <div className='text-5xl mt-10 py-4 flex justify-center gap-16 text-gray-600'>
          <a href='https://www.linkedin.com/in/bingjian-huang-566a64133/'><AiFillLinkedin /></a>
          <a href='https://github.com/huangbj16'><AiFillGithub /></a>
          <a href='https://twitter.com/bingjian_huang'><AiFillTwitterCircle /></a>
          <a href="mailto:bj.huang@mail.utoronto.ca"><AiFillMail /></a>
        </div>
    </section>

    <section id='research' className=''>
      <h1 className='text-2xl font-medium'>Current Research Projects</h1>
      <p className='mt-1 text-lg'>To build immersive haptic experience, my research covers the whole process of understanding haptic perception, building haptic hardware, and evaluating user experience. More specifically, (1) I conduct user study to understand the skin resolution of haptic perception, (2) build prototype such as haptic sleeves that render vibrotactile feedback on the skin, (3) evaluate haptic system by building interactive VR/AR apps.</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/project_perception'>
          <img src='haptic_perception_evaluation.jpg' className='' alt='wristband for spatial acuity user study' />
          <h2 className='text-xl'>Investigating the Effects of Intensity and Frequency on Vibrotactile Spatial Acuity</h2>
        </Link>

        <Link className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1' to='/project_suit'>
          <img src='suit.jpg' className='w-64' alt='blue color haptic suit' />
          <h2 className='text-xl'>A High-resolution Haptic Suit for Immersive Tactile Experience</h2>
        </Link>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='unreal.png' className='' alt='Unreal Engine 5 editor view' />
          <h2 className='text-xl'>Challenging Cultural Norms in Virtual Reality Interactive Games</h2>
        </div>

      </div>

    </section>

    <section id='publications' className='mt-10'>
      <h1 className='text-2xl font-medium'>Publications</h1>

      <div className='shadow-lg rounded-md px-4 py-5 flex flex-col'>
        <p className='text-xl'><b>User burden of microinteractions: An in-lab experiment examining user performance and perceived burden related to in-situ self-reporting</b></p>
        <p class="authors">Xinghui Yan, Yuxuan Li, <b>Bingjian Huang</b>, Sun Young Park, Mark W Newman</p>
        <p class="status">MobileHCI 2021</p>
        <a href='https://dl.acm.org/doi/abs/10.1145/3447526.3472046' className='text-blue-500'>paper link</a>
      </div>

      <div className='shadow-lg rounded-md px-4 py-5 flex flex-col'>
        <p className='text-xl'><b>Toward lightweight In-situ self-reporting: An exploratory study of alternative smartwatch interface designs in context</b></p>
        <p class="authors">Xinghui Yan, Shriti Raj, <b>Bingjian Huang</b>, Sun Young Park, Mark W Newman</p>
        <p class="status">IMWUT 2020</p>
        <a href='https://dl.acm.org/doi/abs/10.1145/3432212' className='text-blue-500'>paper link</a>
      </div>

      <div className='shadow-lg rounded-md px-4 py-5 flex flex-col'>
        <p className='text-xl'><b>Designing and Evaluating Hand-to-Hand Gestures with Dual Commodity Wrist-Worn Devices</b></p>
        <p class="authors">Yiqin Lu, <b>Bingjian Huang</b>, Chun Yu, Guanhong Liu, Yuanchun Shi</p>
        <p class="status">IMWUT 2020</p>
        <a href='https://dl.acm.org/doi/abs/10.1145/3380984' className='text-blue-500'>paper link</a>
      </div>

      

    </section>

    

    <Footer />

    </main>
  );
}

export default App;
