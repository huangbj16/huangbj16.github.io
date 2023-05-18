import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'

function Article_0_haptics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>Envisioning the future of tactile feedback</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Bingjian Huang</h3>
    </section>

    <section id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <p className='text-lg mt-3'>We are designing a high-resolution full-body suit, and we ask: what are the new interaction possibilities brought by the suit?</p>

        <p className='text-lg mt-3'>In most prior work, applications of tactile system can be divided into three categories, subconscious experience, embodied experience, and symbolic representation.</p>

        <p className='text-lg mt-3'>Subconscious experience refers to using tactile feedback in the most native way that is perceived by humans. The processing of tactile stimuli remains in the background and humans extract the information subconsciously. A general application that fits into this category is VR tactile feedback. VR games can use tactile feedback to enhance immersive experiences for players. One related example is the JumpMod paper (CHI’23). By moving the mass up and down on the back, users are deceived to feel that they are jumping higher/lower, without noticing the mass movement. Potentially this system can also be used for FPS players. If they can feel the shots precisely from any direction, they can respond faster to the shots, either dodging to avoid damage or turn around to fight back, thus achieving higher performance.</p>

        <p className='text-lg mt-3'>Embodied experience refers to using tactile feedback as itself or as sensory substitutions. In this case, tactile stimuli are brought to the foreground, which means people are required to pay attention to the stimuli. The advantage of this category is that tactile perception is used in the usual way as it is used in daily life. It is straightforward and easy to understand. There are several good examples. Tactile feedback can be used as sensory substitution for visually impaired people to perceive the world. They can feel the world through their fingers, hands, and their body. Tactile feedback can also be used for sports training, such as guiding weight-lifting athletes to use the right muscles.</p>

        <p className='text-lg mt-3'>The last category is symbolic representation. In this category, tactile feedback is used to “transfer information”. Theoretically, any kind of information such as language and music, can be converted into tactile stimuli. Users are asked to perceive the stimuli, interpret the stimuli, and extract the information. Since this interpretation is often not straightforward, it takes a lot of trainings to achieve a high information transfer capacity. One typical example of this category is the Braille system, which represents all English letters by six dots. Blind people can feel the six dots by their fingertips and translate the feeling into English words and sentences. A normal blind reader can achieve the speed of 100-120 words per minute. In a more recent work, Prof. Hong Tan invented a 24-actuator arm band and converted English words into phonemes that are represented by vibration patterns on the arm band. After one to four hours of trainings, users could acquire 50 words and recognize them correctly on the skin. In addition, this symbolic representation has also been used for movement guidance. By feeling tactile patterns drawn on their body, humans can receive commands such as turn left, move up, etc.</p>

        <p className='text-lg mt-3'>One specific use case that is not covered in the three categories above is affective touch, using touch to convey affective feelings to human. It seems like it does not belong to any of the categories, so more investigation is needed.</p>
    </section>

    <Footer />

    </main>
  );
}

export default Article_0_haptics;
