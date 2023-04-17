import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'

function Project_Hand2hand() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>Designing and Evaluating Hand-to-Hand Gestures with Dual Commodity Wrist-Worn Devices</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Yiqin Lu, Bingjian Huang, and Guanhong Liu</h3>
    </section>

    <section  id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <div className='text-lg mt-3'>
            <h3 className='font-bold mt-5'>Time</h3>
            October, 2018 - November, 2019
            <h3 className='font-bold mt-5'>Team</h3>
            Yiqin Lu, Bingjian Huang, Guanhong Liu
            <h3 className='font-bold mt-5'>Project Contributions</h3>
            <ul>
                <li>explored the design space of hand-to-hand gestures.</li> 
                <li>designed a gesture vocabulary containing gesture set for three scenarios.</li> 
                <li>collected user data and train detection and recognition model. overall accuracy is 94%.</li>
                <li>evaluated recognition system in real-time daily scenarios, prove its usability.</li>
            </ul>
            <h3 className='font-bold mt-5'>My Contributions</h3>
            <ul>
                <li>involved in whole research process, from early-staged gesture set ideations to final paper draft.</li>
                <li>collected and clean data, analyze and extract features.</li>
                <li>trained detection and classification system with deep learning algorithms.</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold mt-5'>Design Space Exploration</h3>
            <h4>Preliminary Interview</h4>
            <p>
                Before We started to explore gesture design space, first we interviewed with ten participants about their gesture preferences.
                In the interview, we first introduced the definition of hand-to-hand gestures, and then encouraged participants to propose as many gestures as possible and try outgestures by their hands. 
                Thinking aloud was applied in the process.
                We also thought about typical gestures that are related to gesture characteristics we were concerned with. 
                Typical keywords were clap, swipe, finger tap, etc. 
                When participants mentioned one of these gestures, we would ask them a question directly inquiring about their preferences of characteristics. 
                To avoid bias from experimenters, we would not ask any question unless participants explicitly mentioned the target keyword.
            </p>
            <p>
                We had several interesting findings from the interviews. 
                Nine participants proposed gestures including open hand, the fist and one finger, 
                and all of them agreed that these three hand states should be differentiated for different gestures.
                Gestures should not be distinguished in some conditions.
                Considering gestures that have the same contact area, 
                seven participants agreed that gestures only different in hand directions should be regarded as the same gesture.
            </p>
            <h4>Gesture Vocabulary</h4>
            <p>
                Based on interview results, we considered the following contact areas on the hand and fist.
            </p>
            <center><img src="./images/area_fist_hand.png" width="50%" /></center>
            <p>
                We built gesture vocabulary of 56 unique gestures.
                Then we further surveyed 24 people online.
                They were asked to rate gestures based on four metrics(<em>Usability, Memorability, Social Acceptance, Disambiguity</em>).
                The survey results indicated what gestures were appropriate in certain scenarios.
                We built gesture set for three scenarios: sitting, walking, and running.
                In the sitting scenario, the gesture set contains 10 tap and swipe gestures.
                In the walking and running scenario, due to mobility constraints, the gesture set contains 5 tap gestures.
            </p>
        </div>
        <div>
            <h3 className='font-bold mt-5'>Gesture Set Evaluation</h3>
            <h4>Data collection</h4>
            <p>
                We collected data from 10 users in each scenarios.
                Users were asked to perform each gesture for 5 times, and the order is shuffled to avoid bias.
                After they finished gestures, they had 2 minutes to randomly perform daily gestures, which we collected as ambient noise.
            </p>
            <h4>Data Analysis</h4>
            <p>
                I cleaned all the data, aligned bimanual gesture data, and converted data to numpy format file.
                After that, I performed cross-validation analysis, which meant using all but one user data to train model and one user data to predict the trained model.
                I tried both traditional SVM model and deep learning LSTM model.
                The result was quite amazing: the model reached an overall accuracy of 94%.
                I discovered that SVM performed almost the same as LSTM model, but at the same time it required less training and prediction time.
            </p>
            <h4>Real Context Evaluation</h4>
            <p>
                Based on data analysis, we further embeded the SVM model into a real-time system and tested it in daily scenarios.
                In real scenarios, each gesture was mapped to a context-based function.
                For example, FistDown-Tap-Palm was mapped to "Skip to the next song".
                Our hardware includes two apple watch series 4, an iphone X, and a pair Huawei FreeBuds.
                In each scenario, user first heard commands from the earphone, then recalled the corresponding gesture, performed the gesture, and waited for earphone response.
                If there was no response, user would perform the gesture again.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QNaCeJebNsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
                We recoreded completion time, success rate, and reasons for failed trials.
                We proved that the gesture sets were usable in daily scenarios and users were pleased with the experience.
            </p>
        </div>
        <div>
            <h3 className='font-bold mt-5'>Results</h3>
            Paper submitted to UBICOMP 2019 (major revision), and resubmitted to UBICOMP 2020 (currently under reviewed).
        </div>
    </section>

    <Footer />

    </main>
  );
}

export default Project_Hand2hand;
