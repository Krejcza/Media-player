let progress = document.getElementById('progress')
let song = document.getElementById('song')
let CTRLICON = document.getElementById('ctrlIcon')

function playPause(){
   if(CTRLICON.classList.contains('fa-pause')){
      song.pause()
      CTRLICON.classList.remove('fa-pause')
      CTRLICON.classList.add('fa-play')
   } else{
      song.play()
      CTRLICON.classList.add('fa-pause')
      CTRLICON.classList.remove('fa-play')
   }
}

if(song.play()){
   setInterval(()=>{
      progress.value = song.currentTime
   }, 1000)
}

progress.addEventListener('change', function(e){
   song.play()
   song.currentTime = progress.value
   CTRLICON.classList.add('fa-pause')
      CTRLICON.classList.remove('fa-play')
})

song.addEventListener('loadedmetadata', function(e){
   progress.max = song.duration
   progress.value = song.currentTime
})

CTRLICON.addEventListener('click', function(e){
   playPause()
})

