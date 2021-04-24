var tela = 1
var tela1,tela2,tela3,tela4,tela5,tela6,tela7,tela8
var tela9,tela10,tela11,tela12,tela13,tela14,tela15,tela16
var distMenuY=530
var controleFase = 1
var controleMouse= false
var music


function preload (){
  soundFormats('mp3')
  music=loadSound('music.mp3')
  
  
  tela1=loadImage('tela1.png');
  tela2=loadImage('tela2.png');
  tela3=loadImage('tela3.png');
  tela4=loadImage('tela4.png');
  tela5=loadImage('tela5.png');
  tela6=loadImage('tela6.png');
  tela7=loadImage('tela7.png');
  tela8=loadImage('tela8.png');
  tela9=loadImage('tela9.png');
  tela10=loadImage('tela10.png');
  tela11=loadImage('tela11.png');
  tela12=loadImage('tela12.png');
  tela13=loadImage('tela13.png');
  tela14=loadImage('tela14.png');
  tela15=loadImage('tela15.png');  
  tela16=loadImage('tela16.png');  
  
}

function setup() {
  createCanvas(1000, 700);
  music.play()
}

function menu(){
  
  
  if (tela == 1 ){
    background(tela1)
    
  if(mouseIsPressed==false){
    controleMouse =  false;
  }
  if(controleMouse==false){
    

  //verificando se o mouse está na area do botão 1
  
  if (mouseX<=100+85 && mouseX>=100 && mouseY<=distMenuY+85 && mouseY>=distMenuY ){
   stroke('rgba(100%,0%,100%,0.5)');
   strokeWeight(5);
   rect(100,distMenuY,155,85)

   if (mouseIsPressed) {
      tela= 4
     controleMouse=true;
      
   }
}else{
    noFill()
  }
                
  
  //verificando se o mouse está na area do botão 2
  
 if (mouseX<=365+85 && mouseX>=365 && mouseY<=distMenuY+85 && mouseY>=distMenuY ){
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(5);
  rect(365,distMenuY,225,85)
   
   if (mouseIsPressed) {
      tela= 2
      controleMouse=true;
}
  
}else {
  noFill()
}
   
  //verificando se o mouse está na area do botão 3
  
  if (mouseX<=650+85 && mouseX>=650 && mouseY<=distMenuY+85 && mouseY>=distMenuY ){
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(5);
  rect(650,distMenuY,248,85)
    
    if (mouseIsPressed) {
     tela = 3
     controleMouse=true;
    } 
 } else{ 
    noFill()
}       
    //chave tela 1
    }
   //chave teste mouse
  }
      }

function creditos(){
  if (tela==2){
    background(tela2)
    if(mouseIsPressed==false){
    controleMouse =  false;
  }
  if(controleMouse==false){
  
   
    if (mouseX<=30+55 && mouseX>=30 && mouseY<=630+55 && mouseY>=630){
      stroke('rgba(100%,0%,100%,0.5)');
      strokeWeight(5);
      rect(30,630,70,55)
      
    if (mouseIsPressed){
      tela=1
      controleMouse=true;
    }  
  }
    }
      }
}  

function descrição () {
  
  if(tela==3){
    background(tela3)
    if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){
    
  
    if (mouseX<=30+55 && mouseX>=30 && mouseY<=630+55 && mouseY>=630){
      stroke('rgba(100%,0%,100%,0.5)');
      strokeWeight(5);
      rect(30,630,70,55)
    if (mouseIsPressed){
      tela=1
      controleMouse=true;
    } 
  }
    }
  }
}

function teste(){
  
  
 // tela 4 
   
    if (tela==4){
      background(tela4)
     if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){
    
    if (mouseX<=520+350 && mouseX>=520 && mouseY<=500+105 && mouseY>=500){
        stroke('rgba(100%,0%,100%,0.5)');
        strokeWeight(5);
        rect(520,500,350,105);
      
    if (mouseIsPressed){
      tela=5;
      controleMouse=true;
    }  
      }
      
      // se for sim
      
    if (mouseX<=110+350 && mouseX>=110 && mouseY<=500+105 && mouseY>=500){
      stroke('rgba(100%,0%,100%,0.5)');
      strokeWeight(5);
      rect(110,500,350,105);
      
   if (mouseIsPressed){
      tela=6
      controleMouse=true;
      
    }  
      } 
  }
    }
}

function fase1 (){
  

  //tela 5  
  
     if (tela == 5 ){
     background(tela5);
       if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){
    
     if (mouseX<=395+205 && mouseX>=395 && mouseY<=600+60 && mouseY>=600){
         stroke('rgba(100%,0%,100%,0.5)');
        strokeWeight(5);
        rect(395,600,205,60);
    if (mouseIsPressed){
      tela=6
       controleMouse=true;
       }    
     }
  }
     }  
}
  
function fase2 (){
     
      
    if (tela == 6 ){
      background(tela6);
      if(mouseIsPressed==false){
      controleMouse = false;
  }
  
  if(controleMouse==false){

// direita - errado
      
     if (mouseX<=405+180 && mouseX>=405 && mouseY<=490+60 && mouseY>=490){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,490,180,60);
    if (mouseIsPressed){
      tela=13
      controleFase = 6;
      controleMouse=true;
       }
     
         }
      
      
// direita
  
    if (mouseX<=405+180 && mouseX>=405 && mouseY<=570+60 && mouseY>=570){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,570,180,60);
    if (mouseIsPressed){
        tela=14
        controleFase = 6;
        controleMouse=true;
       }
         }
    
  }
  // ultima chave tela 6    
    }
}

function fase3 (){
//tela 7
      
    if (tela == 7 ){
      background(tela7);
      if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){

// direita - certo
      
     if (mouseX<=405+180 && mouseX>=405 && mouseY<=490+60 && mouseY>=490){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,490,180,60);
    if (mouseIsPressed){
      tela=14
       controleFase = 8;
        controleMouse=true;
       }
         }
      
      
// esquerda - errado
  
    if (mouseX<=405+180 && mouseX>=405 && mouseY<=570+60 && mouseY>=570){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,570,180,60);
    if (mouseIsPressed){
      tela=13
       controleFase = 7;
        controleMouse=true;
       }
         }
  }
  // ultima chave tela 7   
    }  
}

function fase4 (){
  //tela 8
      
    if (tela == 8 ){
      background(tela8);
      if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){

// esquerda - errado
      
     if (mouseX<=405+180 && mouseX>=405 && mouseY<=490+60 && mouseY>=490){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,490,180,60);
    if (mouseIsPressed){
      tela=14
       controleFase = 8;
        controleMouse=true;
       }
         }
      
      
// direita - certo
  
    if (mouseX<=405+180 && mouseX>=405 && mouseY<=570+60 && mouseY>=570){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,570,180,60);
    if (mouseIsPressed){
      tela=13
       controleFase = 9;
        controleMouse=true;
       }
         }
  }
  // ultima chave tela 8 
      
    }  
}

function fase5 (){
  //tela 9
      
    if (tela == 9 ){
      background(tela9);
      if(mouseIsPressed==false){
    controleMouse = false;
  }
  
  if(controleMouse==false){

// direita - errado
      
     if (mouseX<=405+180 && mouseX>=405 && mouseY<=490+60 && mouseY>=490){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,490,180,60);
    if (mouseIsPressed){
      tela=13
       controleFase = 9;
        controleMouse=true;
       }
         }
      
      
// direita - certi=o
  
    if (mouseX<=405+180 && mouseX>=405 && mouseY<=570+60 && mouseY>=570){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
       rect(405,570,180,60);
    if (mouseIsPressed){
    tela=16
      controleFase = 16;
      
      controleMouse= true;
      
      
       }
         }
  }
  // ultima chave tela 9
      
    }  
  
//ultima chave
}

function parabens(){
  
  if(tela==16){
    background(tela16);
  if(mouseIsPressed==false){
    controleMouse = false;
  }
     if(controleMouse==false){

  if (mouseX<=550+300 && mouseX>=550 && mouseY<=500+100 && mouseY>=500){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
    rect(550,500,300,100);  
  }
    if (mouseIsPressed){
      tela= 1
      controleMouse=true
    
  }
     }
  }
  
  //ultima chave
}





function ganhou(){
  
  if (tela == 14){
    background(tela14)
    
      if(mouseIsPressed==false){
      controleMouse = false;
  }
     if(controleMouse==false){

  if (mouseX<=410+180 && mouseX>=410 && mouseY<=550+60 && mouseY>=550){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
    rect(410,550,220,60);  
  }
    if (mouseIsPressed){
      controleMouse=true
      if(controleFase==6){
        tela=7;
      }else if(controleFase==7){
        tela=8;
      }else if(controleFase==8){
        tela=9;
      }else if(controleFase==9){
        tela=16;
      }
      
      
    }
  } 
}
}

function perdeu(){
  
  if (tela == 13){
    background(tela13)
      if(mouseIsPressed==false){
    controleMouse = false;
  }
  if (mouseX<=410+180 && mouseX>=410 && mouseY<=550+60 && mouseY>=550){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(5); 
    rect(410,550,210,60);  
      
    if (mouseIsPressed){
      controleMouse=true
          if(controleFase==6){
        tela=6;
      }else if(controleFase==7){
        tela=7;
      }else if(controleFase==8){
        tela=8;
      }else if(controleFase==9){
        tela=9;
      } else if(controleFase==9){
        tela=9;
      }
      
    }
     }
   }
  
}

function draw() {

  if(tela == 1){
    menu();
  }else if(tela == 2){
    creditos();
  }else if(tela == 3){
    descrição();
  }else if(tela == 4){
    teste();  
  }else if(tela == 5 ){
    fase1();
  }else if(tela == 6 ){
    fase2(); 
  }else if(tela == 7 ){
    fase3(); 
  }else if(tela == 8 ){
    fase4(); 
  }else if(tela == 9 ){
    fase5(); 
  }else if(tela == 16){
    parabens();
  }else if(tela == 13){
    perdeu();
  }else if(tela == 14){
    ganhou();
  
  }
}