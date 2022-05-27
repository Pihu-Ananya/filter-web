nose_x=0;
nose_y=0;
function preload()  {
  lipstick=loadImage("https://i.postimg.cc/Wbpw06Gr/lipstick.jpg")
  } 

function  setup() {
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()

}

function  draw()  {
    image(video,0,0,400,400)
    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    image(lipstick , nose_x-20 , nose_y-20 , 30, 30)
  }


  function takeSnapshot() {
    save("picture.png")
  
}


