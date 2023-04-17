import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'

function Project_Suit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>A High-resolution Haptic Suit for Immersive Tactile Experience (In Progress)</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Bingjian Huang, Hanfeng Cai, Siyi Ren, Yifei Wu, Renjie Fang, Qilong Cheng, Yeqi Sang, Paul H. Dietz, and Daniel Wigdor</h3>
    </section>

    <section id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <p className='text-lg mt-3'>
        NebulaSuit, a high-resolution full-body haptic suit that is capable of rendering vibrotactile feedback over 200 body positions. The suit is designed with the knowledge of human tactile perception in mind. The layout of tactile units follows the tactile spatial acuity measurement from prior work [X]. Each tactile unit contains one vibrotactile actuatotr and a custom designed PCB board that generates the driving signals. To control each unit independently, we designed a two-byte communication protocol that sends data to each unit through UART. To generate various types of tactile feelings on the skin, we also designed control algorithms that can manipulate the intensity, frequency and waveform of vibrations, following the design guidelines from Meta Haptics Studio [X]. Last but not least, we iterated the design process to optimize power consumption, wiring methods and assembly process, etc.
        </p>
        <div id='image' className='mt-10 flex'>
          <p className='text-md mt-3'>System Architecture</p>
          <img src='project_suit_system_architecture.png' layout="fill" objectFit="cover" />      
        </div>
        <div id='image' className='mt-10 flex'>
          <p className='text-md mt-3'>Motor Designs</p>
          <div className='w-1/2 ml-4'>
            <img src='project_suit_motor1.png' layout="fill" objectFit="cover" />
          </div>
          <div className='w-1/2 ml-4'>
            <img src='project_suit_motor2.png' layout="fill" objectFit="cover" />
          </div>
        </div>
        <div id='image' className='mt-10 flex'>
          <p className='text-md mt-3'>Backpack Designs</p>
          <div className='w-1/3 ml-4'>
            <img src='project_suit_backpack_design1.png' layout="fill" objectFit="cover" />
          </div>
          <div className='w-1/3 ml-4'>
            <img src='project_suit_backpack_design3.png' layout="fill" objectFit="cover" />
          </div>
          <div className='w-1/3 ml-4'>
            <img src='project_suit_backpack_design2.png' layout="fill" objectFit="cover" />
          </div>
        </div>
    </section>

    <Footer />

    </main>
  );
}

export default Project_Suit;
