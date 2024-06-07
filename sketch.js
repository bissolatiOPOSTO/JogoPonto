//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 30
let xvelocidade = 6

//velocidade da bolinha 
let yvelocidade = 6
let raio= diametro/2

//variáveis da raquete
let xRaquete = 10
let yRaquete = 140
let largura = 10
let altura = 90
let xRaquete2 = 580
let yRaquete2 = 140
let velocidadetop;

let colidiu = false;

//Placar Variáveis
let meusPontos = 0
let oponentePontos = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisãoBorda();
  mostrarRaquete();
  movimentoraquete();
  verificaColisãoRaquete();
  movimentoraquete2();
  colisaoBolinhaRaquete();
  criaPlacar();
  contaPontos();
  
}





function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha(){
  xBolinha += xvelocidade;
  yBolinha += yvelocidade;

}

function verificaColisãoBorda(){
  
  if (xBolinha + raio > width|| xBolinha - raio < 0){
  xvelocidade *= -1
  }
  if (yBolinha + raio > height|| yBolinha - raio < 0){
  yvelocidade *= -1
  }
}

function mostrarRaquete(){
  rect(xRaquete, yRaquete, largura, altura );
  rect(xRaquete2, yRaquete2, largura, altura );
}
 
function movimentoraquete(){
  if (keyIsDown(UP_ARROW))
    yRaquete -= 10
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 10
}

function verificaColisãoRaquete(){
  if (xBolinha - raio < xRaquete + largura
     && yBolinha - raio < yRaquete + altura
     && yBolinha + raio > yRaquete)
 xvelocidade *= -1
 
}
 
function movimentoraquete2(){
  velocidadetop = yBolinha - yRaquete2- largura/2 - 80
  yRaquete2 += velocidadetop
}

function colisaoBolinhaRaquete(){
  colidiu = collideRectCircle(xRaquete2, yRaquete2, largura, altura, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    xvelocidade *= -1;
  }
}

function criaPlacar(){
  stroke(255)
  fill(color(10, 255, 255))
  rect(325, 1, 50, 30)
  rect(225, 1, 50, 30)
  textAlign(CENTER)
  textSize(25)
  fill(255)
  text(meusPontos, 250, 20)
  text(oponentePontos, 350, 20)
}

function contaPontos(){
  if (xBolinha < 15)
    oponentePontos += 1
  if (xBolinha > 585)
      meusPontos += 1 
}
