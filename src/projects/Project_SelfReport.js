

import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Markdown from 'markdown-to-jsx';

function Project_SelfReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='mt-40 flex flex-col max-w-screen-md mx-auto text-justify'>
        <h1 id='title' className='text-2xl md:text-3xl font-medium text-teal-500'>Designing Low-burden In-situ Self-reporting: A User Enactment Study of Alternative Smartwatch Interactions in Context</h1>
        <h3 id='authors' className='text-lg mt-10 md:text-xl'>Xinghui Yan, Bingjian Huang</h3>
    </section>

    <Markdown>
        ## Designing Low-burden In-situ Self-reporting: A User Enactment Study of Alternative Smartwatch Interactions in Context

        ### Background

        In-situ self-reporting is widely used to collect research data but induces significant burden on users. Contextual factors govern user burden but little is known about how context and interaction techniques together increase or decrease the burden of using self-reporting tools. 

        ### Project Contributions

        We conducted a user enactment study with twenty-four participants to explore eight design prototypes for a smartwatch in three different contexts: walking, gaming, and social chatting. We found that the user-perceived burden varied in different contexts based on user preferences. To meet time or resource constraints, participants strategically allocated attentional resources. To reduce the burden, participants engaged in micro-scheduling of the self-reporting task and aimed for eyes-free operation by actively reducing visual focus and developing confidence in the interaction. Participants considered input precision and continuity important in evaluating the designs. Reflecting on our findings, we discuss implications for designing self-report tools and implications for researchers employing self-reporting for data collection.

        ### My Contributions

        I developed 11 different self-reporting tools on Android smart watch. I was responsible for all the user studies, as well as transcribing and coding work. I wrote part of the paper.

        ### Team

        Students

        - Xinghui Yan
        - Shriti Raj
        - Bingjian Huang

        Advisers

        - Prof. Sun Young Park
        - Prof. Mark W. Newman

        ### Timeline

        May, 2019 -- Sept, 2019

        ### Process

        We conducted research at School of Information, University of Michigan, Ann Arbor.

        The research process includes literature review, prototype iteration, user study, paper draft.

        ##### Literature Review

        I read over 50 literatures related to our project. Key references are:

        ```
        Interaction in 4-Second Bursts: The Fragmented  Nature of Attentional Resources in Mobile HCI 
        Antti Oulasvirta, Sakari Tamminen, Virpi Roto, and Jaana Kuorelahti

        Finding the Sweet Spot(s): Understanding Context to Support Physical Activity Plans 
        GAURAV PARUTHI, SHRITI RAJ, NATALIE COLABIANCHI, PREDRAG KLASNJA, MARK W. NEWMAN

        D-SWIME: A Design Space for Smartwatch Interaction Techniques Supporting Mobility and Encumbrance
        Gaganpreet Singh, William Delamare, Pourang Irani
        ```

        We summarized important characteristics of self-reporting from previous literatures, and drew a design space model.

        <center><img src="../images/design_space.png" /></center>

        ##### Prototype Iteration

        Based on the literatures and design space, we proposed 11 different self-reporting tools on smart watch.

        They were: static-tilt, dynamic-tilt, flick, shake-count, shake-duration, micro-ema, draw strokes, swipe, tap, and so on.

        Each of them required special Android UI elements, so I quickly delved into Android development and obtained whatever skills needed.

        This is the first version of static-tilt prototype.

        <center><img src="../images/prototype_tilt.png" /></center>

        After I finished the 1st version prototypes, we kept on iterating them by interviewing users about their preferences. After rounds of iteration and screening, we selected the final 6 tools that were used in formal studies.

        ##### User Study

        We conducted user studies with 24 participants. They were split into two phases.

        After finishing the first 12 participants, we carefully considered user feedback and revised our designs.

        Specifically, several participants complained that tilt was hard to use due to its requirement of high precision wrist control. Thus, we expanded the range for each question option. Moreover, we added color representation for some tools to help users reflect their mood.

        Then we finished the phase 2 studies with another 12 participants. 

        Below is the scene of the study when a user was playing game while interacting with the watch.

        <center><img src="../images/user_study_game.png" /></center>

        ##### Paper Draft

        After the studies, I combined findings from transcript and observation notes, and conducted thematic analysis to find similarities. Here is the bulletin results of thematic analysis:

        <center><img src="../images/thematic_analysis.png" /></center>

        Then we analyzed the findings and wrote results part in the paper.

        The paper was submitted to CHI 2020.
    </Markdown>

    <Footer />

    </main>
  );
}

export default Project_SelfReport;