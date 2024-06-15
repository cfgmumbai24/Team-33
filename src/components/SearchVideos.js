// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = ''; // Replace with your actual YouTube Data API key
// const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

// const CHANNELS = {
//     "Channel One": "UCwAdQUuPT6laN-AQR17fe1g",
//     "Channel Two": "UCe3qdG0A_gr-sEdat5y2twQ",
//     "Channel Three": "UCsNxHPbaCWL1tKw2hxGQD6g",
//     "Channel Four": "UCtBp5FUvxIQV-3Dn4K_43-A"
// };

// function SearchVideos() {
//     const [videos, setVideos] = useState([]);
//     const [keyword, setKeyword] = useState('');

//     const handleSearch = async () => {
//         let allVideos = [];
//         for (const [channelName, channelId] of Object.entries(CHANNELS)) {
//             const params = {
//                 part: 'snippet',
//                 q: keyword,
//                 channelId: channelId,
//                 type: 'video',
//                 videoDuration: 'short',
//                 maxResults: 10,
//                 key: API_KEY
//             };
//             try {
//                 const response = await axios.get(YOUTUBE_API_URL, { params });
//                 const videoResults = response.data.items.map(item => ({
//                     title: item.snippet.title,
//                     videoId: item.id.videoId,
//                     thumbnail: item.snippet.thumbnails.default.url,
//                     embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`
//                 }));
//                 allVideos = [...allVideos, ...videoResults];
//             } catch (error) {
//                 console.error('Error fetching data: ', error);
//             }
//         }
//         setVideos(allVideos);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={keyword}
//                 onChange={e => setKeyword(e.target.value)}
//                 placeholder="Enter search keywords"
//             />
//             <button onClick={handleSearch}>Search</button>
//             <div>
//                 {videos.length > 0 ? (
//                     videos.map((video, index) => (
//                         <div key={index}>
//                             <h3>{video.title}</h3>
//                             <iframe
//                                 width="560"
//                                 height="315"
//                                 src={video.embedUrl}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No videos found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default SearchVideos;

// ----------- Working part UPSIDE ^------------------------------------------------


// Trying new 

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './SearchVideos.css';

const API_KEY = ''; // Replace with your actual YouTube Data API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

const CHANNELS = {
    "Channel One": "UCwAdQUuPT6laN-AQR17fe1g",
    "Channel Two": "UCe3qdG0A_gr-sEdat5y2twQ",
    "Channel Three": "UCsNxHPbaCWL1tKw2hxGQD6g",
    "Channel Four": "UCtBp5FUvxIQV-3Dn4K_43-A"
};


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

function SearchVideos() {
    const [videos, setVideos] = useState([]);
    const [keyword, setKeyword] = useState('');
    const videoRefs = useRef([]);

    const handleSearch = async () => {
        let allVideos = [];
        for (const [channelName, channelId] of Object.entries(CHANNELS)) {
            const params = {
                part: 'snippet',
                q: keyword,
                
                type: 'video',
                videoDuration: 'short',
                maxResults: 10,
                key: API_KEY
            };
            try {
                const response = await axios.get(YOUTUBE_API_URL, { params });
                const videoResults = response.data.items.map(item => ({
                    
                    videoId: item.id.videoId,
                    thumbnail: item.snippet.thumbnails.default.url,
                    embedUrl: `https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1`
                }));
                allVideos = [...allVideos, ...videoResults];
                // Experimental stuff down 
                allVideos = shuffleArray(allVideos);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        setVideos(allVideos);
    };

    useEffect(() => {
        const handleScroll = () => {
            videoRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                    const iframe = ref.querySelector('iframe');
                    if (isVisible) {
                        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else {
                        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videos]);

    return (
        <div className="container">
            <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Enter search keywords"
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
            <div className="videos-container">
                {videos.length > 0 ? (
                    videos.map((video, index) => (
                        <div key={index} className="video-wrapper" ref={el => videoRefs.current[index] = el}>
                            <h3>{video.title}</h3>
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.embedUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchVideos;




// Trying new 

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Reels } from '@sayings/react-reels';
// import '@sayings/react-reels/dist/index.css';

// const API_KEY = '';  // Replace with your actual YouTube Data API key
// const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

// const CHANNELS = {
//     "Channel One": "UCwAdQUuPT6laN-AQR17fe1g",
//     "Channel Two": "UCe3qdG0A_gr-sEdat5y2twQ",
//     "Channel Three": "UCsNxHPbaCWL1tKw2hxGQD6g",
//     "Channel Four": "UCtBp5FUvxIQV-3Dn4K_43-A"
// };

// function SearchVideos() {
//     const [reels, setReels] = useState([]);
//     const [keyword, setKeyword] = useState('');

//     const handleSearch = async () => {
//         let allReels = [];
//         for (const [channelName, channelId] of Object.entries(CHANNELS)) {
//             const params = {
//                 part: 'snippet',
//                 q: keyword,
//                 channelId: channelId,
//                 type: 'video',
//                 videoDuration: 'short',
//                 maxResults: 10,
//                 key: API_KEY
//             };
//             try {
//                 const response = await axios.get(YOUTUBE_API_URL, { params });
               
//                 const reelsData = response.data.items.map(item => ({
//                     id: item.id.videoId,  // Use videoId as a unique identifier
//                     reelInfo: {
//                         url: `https://www.youtube.com/embed/${item.id.videoId}`,
//                         type: 'video',
//                         description: item.snippet.description,
//                         postedBy: {
//                             avatar: item.snippet.thumbnails.default.url,
//                             name: item.snippet.channelTitle
//                         },
//                         likes: { count: Math.floor(Math.random() * 100) },
//                         dislikes: { count: Math.floor(Math.random() * 100) },
//                         comments: { count: Math.floor(Math.random() * 100) },
//                         shares: { count: Math.floor(Math.random() * 100) }
//                     }
//                 }));
//                 allReels = [...allReels, ...reelsData];
//             } catch (error) {
//                 console.error('Error fetching data: ', error);
//             }
//         }
//         setReels(allReels);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={keyword}
//                 onChange={e => setKeyword(e.target.value)}
//                 placeholder="Enter search keywords"
//             />
//             <button onClick={handleSearch}>Search</button>
//             {/* {reels.length > 0 && (
//                 <Reels
//                     reels={reels}
//                     onMenuItemClicked={(event) => console.log(event.value)}
//                     onLikeClicked={(reel) => console.log(reel)}
//                     onDislikeClicked={(reel) => console.log(reel)}
//                     onCommentClicked={(reel) => console.log(reel)}
//                     onShareClicked={(reel) => console.log(reel)}
//                     onAvatarClicked={(reel) => console.log(reel)}
//                 />
//             )} */}
//             {reels.length > 0 && (
//             <Reels
//                 reels={[reels[0]]}
//                 onMenuItemClicked={(event) => console.log(event.value)}
//                 onLikeClicked={(reel) => console.log(reel)}
//                 onDislikeClicked={(reel) => console.log(reel)}
//                 onCommentClicked={(reel) => console.log(reel)}
//                 onShareClicked={(reel) => console.log(reel)}
//                 onAvatarClicked={(reel) => console.log(reel)}
//             />
//         )}
//         </div>
//     );
// }

// export default SearchVideos;