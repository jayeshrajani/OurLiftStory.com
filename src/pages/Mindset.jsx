import React, { useState, useEffect } from 'react';
import './Mindset.css';
import gymvid from '../assets/vidBg.mp4'


const YOUTUBE_API_KEY = 'AIzaSyBIDutIjmuKzpHd1v_HiaWFsfeg5AY1bQc';
const CHANNEL_ID = 'UCAPByrKU5-R1emswVlyH_-g';

const Mindset = () => {
  const [videos, setVideos] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const category = 'fitness';

  const getYoutubeVideos = async () => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&maxResults=5&key=${YOUTUBE_API_KEY}`;
      const res = await fetch(url);
      const ytData = await res.json();
      console.log(ytData.items); 
      setVideos(ytData.items);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'gBZ+Id+xcLsdqVMX2KkmWQ==LH362DqVmSFgcFF3' },
        });
        const result = await response.json();
        setQuotes(result);
      } catch (error) {
        console.error('Error fetching quotes:', error.message);
      }
    };

    fetchData();
  }, [category]);

  const defaultQuote = {
    quote: "The groundwork of all happiness is health.",
  };

  return (
    <div className='mindset-hero'>
      <video autoPlay muted loop id="video">
        <source src={gymvid} type="video/mp4" />
      </video>

      <div className="quote">
        <h1 key={quotes.length > 0 ? quotes[0].quote : defaultQuote.quote}>
          {quotes.length > 0 ? quotes[0].quote : defaultQuote.quote}
        </h1>
      </div>

      <div className="videos">
        <h2>Get motivated!</h2>
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mindset;
