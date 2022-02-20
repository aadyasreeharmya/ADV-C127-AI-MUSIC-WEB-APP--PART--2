Encanto_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Encanto_song = loadSound("We Don't Talk About Bruno.mp3");
    Harry_potter_theme_song = loadSound("Harry Potter Theme Song.mp3");
}

function draw(){
    image(video,0,0,600,530);
}