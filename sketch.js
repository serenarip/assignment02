function setup() {
  createCanvas(500,500);
  background('#d3428e');
  angleMode(DEGREES);
  frameRate(60);

}

function draw() {
   
  
  translate(100,50);
  var a = 1.7*(frameCount);
  var b = frameCount/500;
  
  strokeWeight(20);
  stroke(lerpColor(color('#88f7ff'),color('#d3428e'),b));
  /* la circonferenza non è più unitaria quindi prima 
  moltiplichi il sin(a)*250 poi aggiungi il punto 0 = 250 */
  line(400, 150, 200*(1+cos(a)), 200*(1+sin(a)));
  

  translate(300,400);
  rotate(180, 180);
  line(400, 200, 200*(1+cos(a)), 200*(1+sin(a)));

  
  translate(350, 50);
  rotate(90, 90);
  line(400, 200, 200*(1+cos(a)), 200*(1+sin(a)));
  
  translate(300, 400);
  rotate(180, 180);
  line(400, 200, 200*(1+cos(a)), 200*(1+sin(a)));

  
 
}