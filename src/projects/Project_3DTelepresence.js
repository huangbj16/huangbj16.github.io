import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import {CodeBlock} from "react-code-blocks";

function Project_3DTelepresence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>TeleCP: A 3D Telepresence Software Framework Supporting High-Level Co-Presence</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Yizheng Gu (1st year Ph.D. student), Bingjian Huang, and three undergraduates.</h3>
    </section>

    <section  id='content' className='min-h-screen mt-10 max-w-screen-md mx-auto text-justify' >
        <div>
            <h3 className='font-bold text-lg mt-5'>Time</h3>
            <p>April--September, 2018</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Team</h3>
            <p>Yizheng Gu (1st year Ph.D. student), Bingjian Huang, and three undergraduates.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Project Contributions</h3>
            <p>We built a 3D telepresence software framework supporting high-level co-presence. Based on commercial hardware (RealSense, PCs and HTC Vive), it allowed remote users to communicate and interact with each other in a virtual space that merges rooms of both sides.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>My Contributions</h3>
            <p>(a) learned parallel programming language CUDA and used GPU to parallel the 3D rendering process, which lowered down system end-to-end delay; </p>
            <p>(b) participated in system evaluation, responsible for experiments of more than 20 user studies.</p>
            <p>(c) drafted a small part of the paper.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Parallel Process</h3>
            <p>Before this project, I did not have any development experiences in 3D Unity systems.</p>
            <p>In order to understand the whole rendering system in a broad view, first I learned the principles of 3D rendering algorithms, such as TSDF Volume and Marching Cubes.
                The TSDF algorithm is used to calculate the surface of objects. Because point cloud data is divided by grids, they can be efficiently parallelized on a general-purpose graphics processor, which allows data from RGB-D cameras to be integrated into the volume in real time.
                After the surface of objects is calculated, the Marching Cubes algorithm can be used to generate corresponding triangular mesh.
            </p>
            <p>
                Besides, I also spent several weeks learning NVIDIA GPU architecture and CUDA.
                I learned how GPUs are organized by the virtual hierarchy: Blocks and Threads.
            </p>
            <center><img src="./images/cuda_indexing.png" width="50%" /></center>
            <p>
                Our program was written in C++. Therefore, I could easily integrate CUDA codes into the existing system so that rendering process can be paralleled.
                CUDA codes are quite similar to C++ codes, except that codes are simultaneously distributed to GPU cells and start to run all at once.
                Here is a simple CUDA sample, "<em>{"helloFromGPU << <1, 10 >> > ();"}</em>" means the function will run on ten GPU threads simultaneously.
            </p>
            <p>After learning CUDA samples, I rewrote the TSDF Volume algorithms. As a consequence, rendering delay decreased from 11ms to 10ms. The system could better support low-delay interactions.</p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>User Experiment</h3>
            <h4>Experiment Configuration Setup</h4>
            <center><img src="./images/figure_configuration.png" width="100%" /></center>
            <p>
                We setup systems in two different rooms.
                In each room, we prepared three kinect depth cameras, a HTC Vive HMD, and a marker board.
                At the beginning of experiment, three cameras were set still around the player, 
                and the marker board was used to calculate the position transform matrix among the cameras.
                After the calibration process, the player put on the helmet and started to play.
            </p>
            <h4>Procedure</h4>
            <p>players went through two games: Rock-Paper-Scissors and Black-white Chess.
                Below is a virtual scene captured inside the player helmet.
            </p>
            <center><img src="./images/telepresence.jpg" width = "30%" /></center>
            <p>
                During the experiment, we randomly set an end-to-end delay between the two players, ranging from 50ms to 1000ms.
                After players played games for severals rounds under the settings, we asked them to rate their subjective feelings about the delay on a 5-point likert scale.
            </p>
            <p>
                After experiments, we compared the subjective ratings and real delay data.
                We analyzed the delay points when user ratings decline significantly and found the Just Noticeable Difference (JND).
                Results were reported in paper draft.
            </p>
        </div>
        <div>
            <h3 className='font-bold text-lg mt-5'>Project Results</h3>
            We submitted a paper to CHI 2019, but was not accepted.
        </div>

    </section>

    <Footer />

    </main>
  );
}

export default Project_3DTelepresence;
