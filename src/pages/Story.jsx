import React, { useEffect, useState, useRef } from 'react';
import './Story.css';
import music from '../assets/oppenheimer.mp3';
import pauseImage from '../assets/pause-line.svg';
import playImage from '../assets/play-mini-line.svg';
import instaLogo from '../assets/insta.svg';

const Story = () => {
  const [displayText, setDisplayText] = useState('');
  const [mujic, setMujic] = useState(false);
  const audioRef = useRef(new Audio(music));

  const fullText =
    "Welcome to <span>OurLiftStory.com</span>, your go-to destination for a holistic approach to natural bodybuilding. I'm Jayesh, the enthusiast behind this platform. My journey in the world of fitness began as a Computer Science student with a passion for both programming and pumping iron. The fusion of these two seemingly disparate worlds gave birth to <span>OurLiftStory.com</span>. Driven by a fervor for natural bodybuilding and a desire to share knowledge, I embarked on this endeavor to create a space where fitness aficionados can delve into the intricacies of training methods, nutrition, mindset, and the art of sculpting one's physique naturally. <span>OurLiftStory.com</span> isn't just about sets and reps; it's a narrative of dedication, grit, and a commitment to fostering a community that values authenticity and well-being.";

  useEffect(() => {
    const play = () => {
      if (mujic) {
        audioRef.current.play();
      }
    };

    const pauseAudio = () => {
      if (!mujic) {
        audioRef.current.pause();
      }
    };

    play();
    pauseAudio();

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const newIndex = prevText.length + 1;
        return fullText.substring(0, newIndex);
      });

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => {
      clearInterval(interval);
    };
  }, [mujic, fullText]);

  const redirectToInsta = () => {
    window.location.href = 'https://www.instagram.com/jayesh.08/';
  };

  return (
    <div className='story-hero'>
      <div className='story-top'>
        <div className='story-text'>
          <p dangerouslySetInnerHTML={{ __html: displayText }}></p>
        </div>
        <div className='audio'>
          <img
            src={mujic ? pauseImage : playImage}
            alt=''
            onClick={() => {
              setMujic(!mujic);
            }}
          />
          <p>{mujic ? 'Pause audio' : 'Play audio'}</p>
        </div>
      </div>
      <div className="instagram">
        Follow my journey here!
        <div className="instagram-redirect">
          <img src={instaLogo} alt="" onClick={redirectToInsta} />
          <button onClick={redirectToInsta}>@jayesh.08</button>
        </div>
      </div>
    </div>
  );
};

export default Story;
