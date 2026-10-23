let control_music = document.querySelector("#control");
let music_range = document.querySelector(".music_range");
let play_icon = document.querySelector("#play_icon");
let music_array = ["music/Nasheed.mp3","music/Nasheed2.mp3","music/Nasheed3.mp3"];

console.dir(control_music);
console.log(control_music.children[0].attributes[0].nodeValue);
let music_url = control_music.children[0].attributes[0].nodeValue;

console.dir(music_range);
control_music.addEventListener("loadedmetadata",()=>{
    music_range.max = control_music.duration;
    music_range.value = control_music.currentTime;
});
// control_music.loadedmetadata = function(){
//     music_range.max = control_music.duration;
//     music_range.value = control_music.currentTime;
// };

play_icon.addEventListener("click",()=>{
    console.log("Play icon is clicked");
    if(play_icon.classList.contains("fa-play")){
        control_music.play();
        play_icon.classList.add("fa-pause");
        play_icon.classList.remove("fa-play")
    }else{
        control_music.pause();
        play_icon.classList.add("fa-play");
        play_icon.classList.remove("fa-pause");
    }   
});


    if(control_music.play()){
        setInterval(()=>{
            music_range.value = control_music.currentTime;
        },1000);
};
music_range.addEventListener("change",()=>{
    control_music.play();
    control_music.currentTime = music_range.value;
    play_icon.classList.add("fa-pause");
    play_icon.classList.remove("fa-play")
});

let forward_icon = document.querySelector("#forward_icon");
forward_icon.addEventListener("click",()=>{
    console.log("forward icon is clicked: ");
    // for(url of music_array){
    //     music_url = url;
    // 

    for(let i = 0; i<music_array.length; i++){
        music_url = music_array[i];
    }
});

let backward_icon = document.querySelector("#backward_icon");
backward_icon.addEventListener("click",()=>{
    console.log("backward icon is clicked.");
    for(let i = music_array.length - 1; i >= 0; i++){
        music_url = music_array[i];
    } 
});