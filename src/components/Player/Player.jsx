import React, { useEffect, useState } from 'react';
import video from '../../assets/video.mp4';


export default function Player() {
  const [currentVideoTime, setCurrentVideoTime] = useState(0)
  const [currentAnnotation, setCurrentAnnotation] = useState();
  const [videoTimeStamps, setVideoTimeStamps] = useState([])
  const [hideAnnotation, setHideAnnotation] = useState(false)

  const tracks = [
    [
      {
        "startTime": 2,
        "endTime": 3,
        "show": 'hey everybody!',
        "hide": true
      },
      {
        "startTime": 3,
        "endTime": 4,
        "show": 'thank you so much for joining us for our',
        "hide": true
      },
      {
        "startTime": 5,
        "endTime": 6,
        "show": 'third video lesson lab this week',
        "hide": true
      },
    ],
    [
      {
        "startTime": 6,
        "endTime": 7,
        "show": 'celebrating upper elementary grades for elementary week',
        "hide": true
      },
      {
        "startTime": 9,
        "endTime": 12,
        "show": 'uh once again hi and my name is Tyson at newsela',
        "hide": true
      },
      {
        "startTime": 12,
        "endTime": 14,
        "show": 'i am joined by my friend Lindsay',
        "hide": true
      },
      {
        "startTime": 14,
        "endTime": 16,
        "show": 'hi Lindsay',
        "hide": true
      },
      {
        "startTime": 15,
        "endTime": 16,
        "show": 'Hello!',
        "hide": true
      },
      {
        "startTime": 16,
        "endTime": 17,
        "show": 'hi how are you doing today?',
        "hide": true
      },
      {
        "startTime": 17,
        "endTime": 18,
        "show": 'good!',
        "hide": true
      },
      {
        "startTime": 19,
        "endTime": 20,
        "show": 'haha what was that?',
        "hide": true
      },
      {
        "startTime": 20,
        "endTime": 22,
        "show": `I don't have the view you have`,
        "hide": true
      },
      {
        "startTime": 22,
        "endTime": 25,
        "show": 'haha we are a little bit spoiled at the Newsela office',
        "hide": true
      },
      {
        "startTime": 25,
        "endTime": 27,
        "show": 'in New York City, absolutely.',
        "hide": true
      },
      {
        "startTime": 27,
        "endTime": 28,
        "show": 'ummm',
        "hide": true
      },
      {
        "startTime": 28,
        "endTime": 30,
        "show": `I'm really excited to talk with you today about all things`,
        "hide": true
      },
      {
        "startTime": 30,
        "endTime": 32,
        "show": 'like earth science in the upper elementary grades',
        "hide": true
      },
      {
        "startTime": 33,
        "endTime": 34,
        "show": 'thanks for joining.',
        "hide": true
      },
      {
        "startTime": 34,
        "endTime": 35,
        "show": 'happy to be here.',
        "hide": true
      },
    ],
    [
      {
        "startTime": 35,
        "endTime": 36,
        "show": 'so, you know,',
        "hide": true
      },
      {
        "startTime": 36,
        "endTime": 38,
        "show": `these lesson labs that we've been doing `,
        "hide": true
      },
      {
        "startTime": 38,
        "endTime": 40,
        "show": 'so far are really been focusing in on',
        "hide": true
      },
      {
        "startTime": 40,
        "endTime": 41,
        "show": 'a particular type of lesson',
        "hide": true
      },
      {
        "startTime": 41,
        "endTime": 44,
        "show": 'a particular subject or unit the teachers are teaching',
        "hide": true
      },
    ]
  ]

  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '-150px',
    color: 'white',
    margin: '0 auto',
    width: '900px',
    backgroundColor: 'black',
    opacity: '.75'
  }

  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('timeupdate', function () {
      setCurrentVideoTime(parseInt(parseFloat(video.currentTime).toFixed(0)))
      // let allTracks = tracks.flat();
      // allTracks.filter(track => {
      //   if (track.startTime === currentVideoTime) {
      //     console.log(track, currentVideoTime)
      //     setCurrentAnnotation(track.show)
      //   }
      //   if (track.endTime === currentVideoTime) {
      //     setHideAnnotation(track.hide)
      //   }
      // })

      tracks.forEach(track => {
        if (track.length > 0) {
          track.forEach(annotation => {
            if (annotation.startTime === currentVideoTime) {
              setCurrentAnnotation(annotation.show)
            }
            if (annotation.endTime === currentVideoTime) {
              setCurrentAnnotation(annotation.hide)
            }
          })
        }
      })
    });



  }, [currentVideoTime])

  return (
    <>
      <video controls width="900" src={video} />
      {
        currentVideoTime && currentAnnotation ?
          <div className='annotations' style={style}>
            {/* <h4>{currentVideoTime}</h4> */}
            <h4>{currentAnnotation}</h4>
            </div>
          :
          <></>
      }

    </>
  )
}
