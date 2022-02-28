The below code sample offers two solutions to the challenge. One being optimized and the other less so. I went ahead and spent a few hours to build a proof of concept application on top of the challenge that displays video annotations over a video player to further display my capabilities.  

To view a deployment implementing the coding challenge, [click here.](https://newsela-challenge.netlify.app/)

```
    video.addEventListener('timeupdate', function () {
        // log n
      setCurrentVideoTime(parseInt(parseFloat(video.currentTime).toFixed(0)))
       let allTracks = tracks.flat();
       allTracks.filter(track => {
         if (track.startTime === currentVideoTime) {
           console.log(track, currentVideoTime)
           setCurrentAnnotation(track.show)
         }
         if (track.endTime === currentVideoTime) {
           setHideAnnotation(track.hide)
         }
       })
    
        //log n2
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
