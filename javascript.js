//vaihtaa taustan värin.
function vaihdaVari()
{
  const body = document.body;
  body.style.background = "red";
}

// tein uuden elementin pyydetty ja annoin sille id.

  const divi = document.createElement('div');
  divi.id = "divi";
  divi.innerHTML = "tässä _ _pyydetty_ _ popup".replace(/_ _([^ ]+)_ _/g,"<b>$1</b>")
  divi.onclick = function(){katoaa()};
  var divi2 = divi;
  divi2.style.color = "black";

function katoaa()
{
  error.removeChild(divi2)
}

// canvas on rakennettu tässä siihen pisteeseen että sen voi kutsua appendVhildi(canvas) käyttäen.
const canvas = document.createElement('canvas');
canvas.id = 'myCanvas';
canvas.width = '375';
canvas.height = '450';

const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(200,200,100,360,1,true*Math.PI*2)
ctx.stroke();

//listat
var test = document.getElementById('output');
const FunktioCommands = ['Reload<br>'];
const ListOfCommands = ['Listaa<br>' , 'Google<br>', 'piirrä<br>', 'vaihda<br>', 'tee popup<br>', 'Funktio <br>', 'Juho<br>'];


//tällä looppaan listan innerHTML niin että siellä ei esiinny pilkkuja mukana
function listaaCommands()
{ 


    for(var f = 0; f < FunktioCommands.length; f++){
      test.innerHTML += FunktioCommands[f]
      
    }
    
    

    for(var i = 0; i < ListOfCommands.length;i++){
      test.innerHTML += ListOfCommands[i]
    }

   
}


 //tämä koodi generoi random sanan. En saanut toimimaan (tee tämä kertaa inputin arvo) eikä all nighter ole vaihtoehto.
 /*function createRandom()
 {
 var sana = "";
  var kirjaimet = 'ABCDEFGHIJKLMNOPQRSTUWVXYZOÄÖ123456789abcdefghijklmnopqrstuwvxyzoäö'
  for(var i, i= 0; i < kirjaimet.length; i++)
  {
      sana += kirjaimet.charAt(Math.floor(Math.random() * kirjaimet.length));
  }
  
}*/
  



// anna kuvalle kaikki tarvittavat tiedot jotta voin kutsua sen innerHTML käyttäen.
var Google = document.createElement("a");
window.open = 'https://www.google.com';
Google.href ='https://www.google.com';
Google.innerHTML = 'Siirrytäänkö googleen?';
Google.target = '_blank';




var img = document.createElement('img');
img.src = "JUHOPUKKI.jpg"
img.width = 400;
img.height = 450;
img.alt = 'Image of Juho'

 var error  = document.getElementById('ErrorOutput')


let entteri = document.getElementById('teksti');
  entteri.addEventListener('keypress',(e) =>{
    if(e.keyCode === 13)
    {
      submit()
    }
})


function submit() 
{
  // tein tämän helpottaakseni elämääni joota ei tarvitse kirjoittaa monta kertaa
  var arvo = document.getElementById('teksti').value;
  //en tarvinnutkaan tätä
  var testi = document.getElementById("ErrorOutput").innerHTML;
 
  while(arvo != null){
      tyhjaa();
  
          if(arvo == "vaihda")
          {
            vaihdaVari();
          }
          else if(arvo == "Google")
          {
            error.appendChild(Google);
          }
          else if(arvo == "piirrä")
          {
            error.appendChild(canvas);
          }
          else if(arvo == "" || arvo == "Listaa")
          {
            listaaCommands();
          }
          else if(arvo == "Juho")
          {
            error.appendChild(img);
          }
          else if(arvo == "Funktio")
          {
            console.log('Funktio toimii!')
            funktio();
          }
          else if(arvo == "tee popup")
          {
            error.appendChild(divi2);
          }

          else if(Number(arvo) >= 1 && Number(arvo) <= 999)
          {
             createRandom()
          }
          else(document.getElementById('ErrorOutput').innerHTML += "Komentoa ei tunnistettu")
          break;
        }
    tyhjaa2();

 }
 function tyhjaa()
{ 
   document.getElementById('ErrorOutput').innerHTML = "";
   document.getElementById('output').innerHTML = ""; 
}

 function tyhjaa2()
{
  document.getElementById('teksti').value = "";
}


 
//rakennan uuden elementin oikean kolumnin sisään, teksti arvo on Funktio ja annan sille omat arvonsa.

  let inputti = document.createElement("input");
  inputti.innerHTML = '';
  inputti.type = "text";
  inputti.id = 'inputti';
  inputti.placeholder = "Enter command";
  inputti.name = "b";
  
  //tässä funktiossa on jotain häikkää. vaihdoin inputti => input ja takaisin ja alkoi toimimaan muuten ollut sama kokoajan.
  function tyhjaaFunktioInput()
  {
      
    document.getElementById("inputti").value = "";
    console.log("anna komento")
        
  } 

  //rakennan uuden elementin oikean kolumnin sisään, teksti arvo on Funktio ja annan sille omat arvonsa.

  let btn = document.createElement("button");
  btn.innerHTML = "Suorita";
  btn.onclick = function(){buttoni()};
  btn.type = "submit";
  btn.id = "btn2";

// tämä funktio ajetaan, kun alkuperäisen input kentän ravo on Funktio.
function funktio(){

  error.appendChild(btn) && error.appendChild(inputti);
    
  //tällä saan uuden input kentän reagoimaan entterin painallukseen.
    let entteri2= document.getElementById('inputti');
      entteri2.addEventListener('keypress',(element) =>{
        if(element.keyCode === 13)
          {
           funktio();
          }
           });

    

  buttoni();
  
}
function buttoni()
{  
// ajaa saman asian kun funktio submit()
  while(error.appendChild(inputti).value != null)
  {
      
      
         if(document.getElementById('inputti').value == 'Reload')
          {
           refresh()
          }

        else if(document.getElementById('inputti').value != 'Reload' && document.getElementById('inputti').value != '')
        {
            console.log('kirjoitit: ' + document.getElementById('inputti').value)
        }

      tyhjaaFunktioInput();
    break;
  }
  
}

function refresh()
{
  location.reload();
}