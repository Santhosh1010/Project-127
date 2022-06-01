clownpierce = "";
undertale = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song1 = loadSound("Clownpierce.mp3");
    song2 = loadSound("Undertale.mp3");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play1()
{
    if(playing = "2")
    {
        song2.stop();
    }
    song1.play();
    playing = "1";
}

function play2()
{
    if(playing = "1")
    {
        song1.stop();
    }
    song2.play();
    playing = "2";
}