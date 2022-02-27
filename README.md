To view the solution to this coding challenge [Click Here](https://github.com/SoftwareShean/Protatonna/blob/main/src/components/Player/Player.jsx).

To view a deployment of a small application based on the solution, [Click Here](https://newsela-challenge.netlify.app/)

```
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
              setHideAnnotation(annotation.hide)
            }
          })
        }
      })
```
