import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

function Aboutme() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='text-center mt-40 flex flex-col justify-center'>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Bingjian Huang</h1>
        <h3 className='text-xl mt-10 md:text-2xl'>Researcher, HCI, XR, Haptics, Electronics</h3>
    </section>

    <section id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <p className='text-lg mt-10'>
            Currently I'm a third-year Ph.D. student studying <em><b>Human-Computer Interaction</b></em> at <em><b>University of Toronto</b></em>.
            My supervisor is <a href="https://www.dgp.toronto.edu/~dwigdor/" className='text-blue-500'>Prof. Daniel Wigdor</a>.
        </p>
        <p className='text-lg mt-3'>
            I have broad interest in Virtual Reality and Augmented Reality, from 3D scene reconstruction and human motion tracking, to human perception and multi-sensory feedback systems.
            Currently I'm working on a hapitc VR project in which I plan to build a haptic suit that enables precise and high-resolution on-body haptic feedback. This involves knowledge from HCI, Electrical Engineering, Psychophysics, and NeuroScience.
        </p>
        <p className='text-lg mt-3'>
            Before that, I conducted research at <a href="http://pi.cs.tsinghua.edu.cn/" className='text-blue-500'>the Key Laboratary of Pervasive Computing</a> at Tsinghua University (April, 2018 to November, 2019).
            My advisors are <a href="http://pi.cs.tsinghua.edu.cn/lab/people/shiyc/" className='text-blue-500'>Prof. Yuanchun Shi</a> and <a href="http://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" className='text-blue-500'>Prof. Chun Yu</a>.
            I participated in two research projects related to Telepresence and Holoportation in Virtual Reality(VR) and dual-handed Gesture Design on smartwatch. Paper was published on IMWUT 2019.
        </p>
        <p className='text-lg mt-3'>
            In Summer 2019, I worked as a summer intern in <a href="http://www.intecolab.com/" className='text-blue-500'>Inteco Lab</a> (Advisor: <a href="http://mwnewman.people.si.umich.edu/" className='text-blue-500'>Prof. Mark W. Newman</a>) at School of Information, University of Michigan, Ann Arbor.
            I collaborated with PhD student Xinghui Yan on a research project about low-burden in-situ self-reporting tools. Paper was published on IMWUT 2020 and MobileHCI 2021.
        </p>
        <p className='text-lg mt-3'>
            If you are interested in knowing more about me, please refer to my <a href="/cv">CV</a> and <a href="/portfolio">Portfolio</a>.
        </p>
    </section>

    <Footer />

    </main>
  );
}

export default Aboutme;
