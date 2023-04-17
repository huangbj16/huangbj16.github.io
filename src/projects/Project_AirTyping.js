import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import {CodeBlock} from "react-code-blocks";

function Project_AirTyping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>Mid-Air Bimanual Typing Prototype with Leap Motion</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Bingjian Huang, Zhipeng Li, Weiqi Li, Zeyang Zhang</h3>
    </section>

    <section  id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <div>
            <h3 className='font-bold text-lg mt-5'>Time</h3>
            <p>September--December, 2018</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Team</h3>
            <p>Bingjian Huang, Zhipeng Li, Weiqi Li, Zeyang Zhang.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Project Contributions</h3>
            <p>We built a mid-air bimanual hand typing prototype with Leap Motion. Compared with traditional keyboard input method, our prototype did not require a physical keyboard to type. Instead, with the Leap Motion, user could type words and sentences whenever they need to do so. Through user studies, we discovered that user could easily get acquainted with the input method, and reached acceptable typing speed.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>My Contributions</h3>
            <ul>
            <li>Participated in group brainstorming and discussions, producing the prototype conceptual model</li>
            <li>Learned Leap Motion C++ API, analyzed real-time data from callingback functions, and translated data to gestures.</li>
            <li>took charge of four user studies, guided user through study procedure, and interviewed about user experience</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>System Overview</h3>
            <h4>Conceptual Model and UI Design</h4>
            <p>According to our design, users move their hands in the air on "virtual plates". They can move hands around and press down.</p>
            <p>Here is a snapshot of the User Interface</p>
            <center><img src="./images/airtype_input_ui.png" width="50%" /></center>
            <p>
                On the left side, a round plate was surrounded by the 26 English letters clockwise.
                When user moved the left hand in the air, a part of the pie chart would be highlighted, indicating that a group of 5-6 letter were chosen.
                When uses pressed hand down, the highlighted part was chosen.
                The letter group appeared on the right side.
            </p>
            <p>
                On the right side, a similar plate contained the chosen letter group.
                The plate was distributed into multiple sectors.
                The angles of the sectors were decided by the letter input frequency imported from word base.
                Again, user move the right hand in the air. When the right letter was highlighted, the user pressed down and the letter was input.
            </p>
            <p>
                On the top side, the input letters were shown. 
            </p>
            <h4>Leap Motion Usage</h4>
            <p>Leap Motion is able to capture detailed information of hands, including hand positions, finger positions, and pinch gestures, etc., as shown in the pic:</p>
            <center><img src="./images/leapmotion_vis.jpg" width="50%" /></center>
            <p>
                On Leap Motion Official Website, I found that they provided APIs for multiple platforms and language,
                including C++ and Java. Since our system was built in C++, I mainly read documents and C++ samples.
            </p>
            <p>
                At the beginning, the APIs seemed very complicated, with various polling and callingback functions.
                However, I read samples and found one sample that provided real-time hand and finger position data.
                This sample perfectly suited our needs, so I extracted the useful parts from the sample and connected them to the central processing system.
            </p>
            <p>Code sample is shown below: </p>
            <p>
                The code showed when a new frame arrived, the system would first judge whether it was a left hand or a right hand;
                Then, the system would record palm position, pinch angle, and palm normal direction.
                This new frame was added to the frame list so that gestures can be updated.
            </p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>User Experiment</h3>
            <h4>Experiment Configuration Setup</h4>
            <p>
                We prepared a laptop with a Leap Motion Camera plugged. The Leap Motion was put in front of users.
            </p>
            <h4>Procedure</h4>
            <p>
                Players first went through an introductory session. We described how the input method worked.
                Then we allowed them to try gestures for several trials until they thought they were familiar with the prototype.
                In the following time, they had ten formal trials to input multiple sentences. 
                During the process, We collected input completion time, error rate and so on.
                After the formal experiments were finished, we inquired them about their feedback on this system.
                A video shows part of the experiment process.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sbvOSmla_Oo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Project Results</h3>
            We gave a presentation in class introducing our prototype. All of us received a good score for the HCI course.
        </div>  

    </section>

    <Footer />

    </main>
  );
}

export default Project_AirTyping;
