import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'

function Project_Perception() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>Investigating the Effects of Intensity and Frequency on Vibrotactile Spatial Acuity</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Bingjian Huang, Paul H. Dietz, and Daniel Wigdor</h3>
    </section>

    <section id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <p className='text-lg mt-3'>
          Vibrotactile devices are commonly used in applications for sensory substitution or to provide feedback in virtual reality. An important aspect of vibrotactile perception is spatial acuity, which determines the resolutions of vibrotactile displays on the skin. However, the complex vibration characteristics of vibrotactile actuators make it challenging for researchers to reference and compare previous study results. This is because the effects of typical characteristics, such as intensity and frequency, are not well understood.
        </p>
        <p className='text-lg mt-3'>
          In this study, we investigated the effects of intensity and frequency on vibrotactile spatial acuity. Using Linear Resonant Actuators (LRAs), we conducted relative point localization experiments to measure spatial acuity under different conditions. In the first experiment, we found that intensity had a significant impact on spatial acuity, with higher intensity leading to better acuity. In the second experiment, using a carefully designed intensity calibration procedure, we found that frequency did not have a significant effect on spatial acuity.
        </p>
        <p className='text-lg mt-3'>
          These findings provide a better understanding of vibrotactile spatial acuity, allow for comparisons to previous research, and provide insights into the design of future tactile devices.
        </p>
        <div id='image' className='mt-10 flex'>
          <div className='w-2/3'>
            <img src='project_perception_circuit_diagram.png' layout="fill" objectFit="cover" />
          </div>
          <div className='w-1/3'>
            <img src='project_perception_prototype_overview.png' layout="fill" objectFit="cover" />
          </div>
        </div>
        <div id='image' className='mt-10 flex'>
          <img src='project_perception_study.jpg' layout="fill" objectFit="cover" />      
        </div>
    </section>

    <Footer />

    </main>
  );
}

export default Project_Perception;
