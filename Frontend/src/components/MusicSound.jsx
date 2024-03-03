"use client";
import React, { useState, useRef, useEffect } from 'react';
import NatureInfo from './NatureInfo';
import { useRouter } from 'next/navigation';

const MeditationPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(0);
  const [selectedAudioType, setSelectedAudioType] = useState('natureSounds');
  const audioRef = useRef(null);
  const [login, setLogin] = useState(false);

  const audioList = {
    natureSounds: [
      {
        title: 'Nature Sounds 1',
        src: '/nature1.mp3',
        image: 'https://image.lexica.art/full_jpg/710c402d-d64c-45b8-95b3-8397a6e41b29',
      },
      {
        title: 'Nature Sounds 2',
        src: '/nature2.mp3',
        image: 'https://image.lexica.art/full_jpg/8091c49d-cc20-4351-9f76-db9e14aae1ed',
      },
      {
        title: 'Nature Sounds 3',
        src: '/nature3.mp3',
        image: 'https://image.lexica.art/full_jpg/c83df087-53b6-46fa-b7a1-3929b1381101',
      },
      {
        title: 'Nature Sounds 4',
        src: '/nature4.mp3',
        image: 'https://image.lexica.art/full_jpg/cdc82291-72db-4ad7-af85-6a366a765d5c',
      },
    ],
    classical: [
      {
        title: 'Classical Music 1',
        src: '/classical1.mp3',
        image: 'https://image.lexica.art/full_jpg/77469cbb-8f23-49de-95cb-e0611d8bcfb3',
      },
      {
        title: 'Classical Music 2',
        src: '/classical2.mp3',
        image: 'https://image.lexica.art/full_jpg/1d6e3bb7-8dfa-468c-ad77-735faca66f52',
      },
      {
        title: 'Classical Music 3',
        src: '/classical3.mp3',
        image: 'https://image.lexica.art/full_jpg/9413995d-7176-469b-a973-9b0a0372c5ba',
      },
      {
        title: 'Classical Music 4',
        src: '/classical4.mp3',
        image: 'https://image.lexica.art/full_jpg/f2f5b0bc-54ae-4b31-bf3e-b3bce4dacf7e',
      },
    ],
  };

  const router = useRouter();

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);


  const togglePlay = () => {
    if(login){
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }else{
    
    router.push('/login');
  }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
                                                             
  const changeAudioType = (audioType) => {
    setSelectedAudioType(audioType);
    setCurrentAudio(0); // Reset current audio when changing the audio type
  };

  const playSpecificAudio = (index) => {
    setCurrentAudio(index);
    audioRef.current.src = audioList[selectedAudioType][index].src;
    audioRef.current.play();
    setIsPlaying(true);
    togglePlay();
  };

  return (
    <div className="flex flex-col md:flex-row w-full px-5">
      {/* Left side with nature information */}
      <NatureInfo/>
      

      {/* Right side with audio player*/}
<div className="lg:w-1/3 w-full md:w-1/2 mx-0 md:mx-8 p-6 md:p-8 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
  <div className="w-full p-6 text-center">
    <h1 id="discover"className="text-3xl font-bold text-rose-900 mb-5 text-decoration underline">Discover Now Here!</h1>
  </div>

  {/* Dropdown for Audio Types */}
  <div className="mb-4">
    <label htmlFor="audioTypeSelect" className="block text-lg font-semibold font-sans mb-2 text-center">
    Select Music Category
    </label>
    <select
      id="audioTypeSelect"
      value={selectedAudioType}
      onChange={(e) => changeAudioType(e.target.value)}
      className="w-full px-4 py-2 rounded-md hover:scale-105 transition duration-300 ease-in-out"
    >
      <option value="natureSounds">Nature Sounds</option>
      <option value="classical">Classical Music</option>
    </select>
  </div>

  {/* Upper Part */}
  <div className="mb-8 flex items-center space-x-4 hover:scale-105 transition duration-300 ease-in-out">
    {/* Image and Name */}
    <div className="flex items-center space-x-4">
      <img
        src={audioList[selectedAudioType][currentAudio].image}
        alt="Meditation Icon"
        className="w-24 h-24 rounded-full cursor-pointer border-4 border-rose-950"
        onClick={() => playSpecificAudio(currentAudio)}
      />
      <div>
        <p className="text-xl font-semibold">
          {audioList[selectedAudioType][currentAudio].title}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={togglePlay}
            className="bg-rose-950 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300 ease-in-out"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <p className="text-sm font-semibold">{isPlaying && 'Playing Now'}</p>
        </div>
      </div>
    </div>
  </div>

  {/* Lower Part with Images */}
  <div className="grid grid-cols-2 gap-4">
    {audioList[selectedAudioType].map((audio, index) => (
      <div key={index} className="flex flex-col items-center mb-4">
        <img
          src={audio.image}
          alt={`${selectedAudioType} Icon ${index}`}
          className="w-32 h-32 rounded-lg cursor-pointer border-2 border-gray-500 hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => playSpecificAudio(index)}
        />
        <p className="text-xs mt-2">{audio.title}</p>
      </div>
    ))}
  </div>

  {/* Audio Player */}
  <audio ref={audioRef} src={audioList[selectedAudioType][currentAudio].src} />
</div>
</div>
);
    };
export default MeditationPlayer;
