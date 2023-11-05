console.log('Welcome To spotify');
//inialize variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
console.log()
let songItems = Array.from(document.getElementsByClassName('songItem'));
//make Array
let songs = [
    {songName: "we Save Palestine",   filePath: "1.mp3", coverPath: "images/covers.png"},
    {songName: "Can You Help Palestine? ",  filePath: "2.mp3", coverPath: "images/coverh.jpg"},
    {songName: "we like and Save Palestine",   filePath: "1.mp3", coverPath: "images/covery.jpg"},
    {songName: "we are Helping  Palestine ",  filePath: "2.mp3", coverPath: "images/covers.png"},
    {songName: "pakistanis and Palestinians are Brothers ",   filePath: "2.mp3", coverPath: "images/coverp.png"},
    {songName: "Yemen save palestine ",  filePath: "1.mp3", coverPath: "images/covery.jpg"},
    {songName: "Iran Save Palestine",   filePath: "2.mp3", coverPath: "images/coveri.jpg"},
    {songName: "Pakistan Help Palestine ",  filePath: "1.mp3", coverPath: "images/coverp.png"},
    {songName: "we Save Palestine",   filePath: "2.mp3", coverPath: "images/covers.png"},
]

songItems.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementByClassName('songName')[0].Innertext = songs[i].songName;
    
});
//Handle play
masterPlay.addEventListener('click' , () =>{
    if ( audioElement.paused || audioElement.currentTime <=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    } 
    
});
//add event
audioElement.addEventListener('timeupdate' , () =>{
    console.log('timeupdate');
    //upadate seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;

}); 
myProgressBar.addEventListener('change' ,()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

});
const makeAllPlays = () => {
    Array.from (getElementByClassName('songItemPlay')).forEach((element) => {
        element.target.classList.remove('fa-play-circle');
        element.target.classList.add('fa-pause-circle');
    }
)};
Array.from (document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    });
});




