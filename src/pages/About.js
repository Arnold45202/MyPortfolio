import React, { useEffect } from 'react';
import '../styleSheets/About.css';

function About() {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <div className='about-container'>
      <div className='writing'>
        <section>
          <h1 className='toppp'>About Me</h1>
          <p className='first-part'>19 year old From New Zealand, studying Software Engineering at UNSW <br></br> 
          Currently self learning Object-oriented programming and cloud computing.</p>
        </section>

        <section>
          <h2 className='top'>How did I get into coding?</h2>
          <p className='first-part'>
          So, it might sound a bit crazy, but coding wasn't my first go-to. Initially, I thought about diving<br /> into the whole med scene because, 
          you know, all my friends were into it. 
          But one day, something really hit,  <br /> and I realised I didn't actually want to be a doctor. <br />  <br />
          Turns out, my heart was in engineering. I've always been that tech kid. Back in the day, <br /> during year 9 to 12,
          I was building computers and fixing phones on the side for money.  <br /> 
          Tech videos were my jam, and then AI dropped, taking my excitement to a whole new level. <br />  <br />
          It wasn't until year 13 that I figured coding was my thing. Took my first computer science course,  <br />and bam, fell in love with it. 
          Now, I'm hooked on learning new stuff like React, HTML, CSS, and Python. <br /> My school wasn't able to teach me these stuff for my first yaer, but hey, 
          I couldn't wait for the holidays to get <br /> my code on, so I started doing it myself!!
          </p>
        </section>

        <section>
          <h2 className='top'>My Hobbies!</h2>
          <p className='first-part'>
            Coding and making projects 💻<br />
            Hanging out with family and friends 👨‍👩‍👧‍👦<br />
            Playing single-player games like rdr2 and a large gta fan can't wait for gta 6 ! 🎮 <br />
            Going to the gym 🔩
          </p>
        </section>

        <section>
          <h2 className='top'>What are some fun facts about me</h2>
          <p className='first-part'>
            My favourite anime is attack on titan 🔰<br />
            I was the deputy Head prefect for my College and had to give speeches 😳<br />
            Hard-stuck platinum in league of legends ⚔️<br />
            My WPM for 15 seconds is like 150 and for one minute it's like around 130 ⌨️<br />
          </p>
        </section>
      </div>
      <img src='https://media.discordapp.net/attachments/949224467127746610/1197320830854627408/aboutuspic.png?ex=65bad6eb&is=65a861eb&hm=335b324e6e646a3329cb79e61e459814c66ad07259aef24a4e228d3ea7d3f9ab&=&format=webp&quality=lossless&width=482&height=584' className='aboutus'/>
    </div>
  );
}

export default About;
