console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;

let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let song = [
    {songName:"Title Track Saiyaara", filepath:"songs/1.mp3", coverpath:"covers/my1.jpg"},
    {songName:"Shaky", filepath:"songs/2.mp3", coverpath:"covers/my5.jpg"},
    {songName:"Tere Liye Prince", filepath:"songs/3.mp3", coverpath:"covers/my2.jpg"},
    {songName:"Victory Anthem", filepath:"songs/4.mp3", coverpath:"covers/my3.jpg"},
    {songName:"Jo Tere Sang", filepath:"songs/5.mp3", coverpath:"covers/my4.jpg"},
    {songName:"Animal", filepath:"songs/6.mp3", coverpath:"covers/item-6.jpg"},
    {songName:"Maalag", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songName:"Bulleye", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songName:"PAYAL", filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songName:"Jo tare sang", filepath:"songs/10.mp3", coverpath:"covers/10.jpg"},
]


songItem.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src = song[i].coverpath;
    Element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

// audioElement.play()


//Handle play& pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = prograss;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterSongName.innerText = song[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = song[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = song[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})