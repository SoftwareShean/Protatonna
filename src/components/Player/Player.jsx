import React, { useEffect, useState } from 'react';
import video from '../../assets/video.mp4';


export default function Player() {
  const [currentVideoTime, setCurrentVideoTime] = useState(0)
  const [currentAnnotation, setCurrentAnnotation] = useState();
  const [videoTimeStamps, setVideoTimeStamps] = useState([])

  const tracks = [
    [
      {
        "startTime": 1,
        "endTime": 2,
        "show": 'this is the first annotation',
        "hide": true
      },
      {
        "startTime": 3,
        "endTime": 4,
        "show": 'this is the second annotation',
        "hide": true
      },
      {
        "startTime": 5,
        "endTime": 6,
        "show": 'this is the third annotation',
        "hide": true
      },
    ],
    [
      {
        "startTime": 6,
        "endTime": 7,
        "show": 'this is the fourth annotation in the second track',
        "hide": true
      },
    ]
  ]

  
  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('timeupdate', function () {
      setCurrentVideoTime(parseFloat(parseInt(video.currentTime)).toFixed(0))
      let allTracks = tracks.flat();
      allTracks.filter(track => {
        if (track.startTime === parseInt(currentVideoTime)) {
          console.log(track, currentVideoTime)
          setCurrentAnnotation(track)
        }
      })
    });


  }, [currentVideoTime])

  return (
    <>
      <video controls width="900" src={video} />
      {
        currentVideoTime && currentAnnotation ?
          <>
          <h1>{currentVideoTime}</h1><h1>{currentAnnotation.show}</h1></>
           :
          <></>
      }

    </>
  )
}
