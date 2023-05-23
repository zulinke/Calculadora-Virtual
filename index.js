
function abrir(){
    document.getElementById('pop-up').style.display = 'block'
    document.querySelector('.calculadora').style.display = 'none'
}
function openSuporte(){
    document.querySelector('.suuporte').style.display = 'block'
    document.querySelector('.cor').style.display = 'none'
}
function closeSuporte(){
    document.querySelector('.suuporte').style.display = 'none'
    document.querySelector('.cor').style.display = 'block'
}


function fechar(){
    document.getElementById('pop-up').style.display = 'none'
    document.querySelector('.calculadora').style.display = 'flex'
}
function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num 
    }
    
    
    function clean(){
        document.getElementById('resultado').innerHTML = "";
    }
    
    
    function caucular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }
    }
     const btn = document.querySelector('.btn')
  const amarelo = document.querySelector('.amarelo-btn')
  const botao = document.getElementById('trocar')
  const fundo = document.querySelector('.modal-container')
  const fundo2 = document.querySelector('.calculadora')
  const textarea = document.querySelector('.textarea')
  const b8 = document.querySelector('.b8')
  const b7 = document.querySelector('.b7')
  const b6 = document.querySelector('.b6')
  const b5 = document.querySelector('.b5')
  const b4 = document.querySelector('.b4')
  const b3 = document.querySelector('.b3')
  const b2 = document.querySelector('.b2')
  const bs = document.querySelector('.bs')
  const bm = document.querySelector('.bm')
  const bmu = document.querySelector('.bmu')
  const bd = document.querySelector('.bd')
  const b1 = document.querySelector('.b1')
  const b0 =document.querySelector('.b0')
  const cor2 = document.querySelector('.cor2')
  const calculadora = document.querySelector('.calculadora')
  const suporte = document.querySelector('.suporte')
  const suuporte = document.querySelector('.suuporte')
  const dados = document.querySelector('.dados')
  const termos = document.querySelector('.termos')
const master = document.querySelector('.master')
const seta = document.querySelector('.seta')
  const container = document.querySelector('.container')
  const temas = document.querySelector('.temas')
  const poly = document.getElementById('poly')
  const suportee = document.querySelector('.suport-p')
  const resultado = document.getElementById('resultado')
  const set = document.querySelector('.setaa')
  const bt = document.querySelector('.bt')
  btn.onclick = function(){
      this.classList.toggle('active')
      container.classList.toggle('active')
      cor2.classList.toggle('active')
      botao.classList.toggle('active')
      b8.classList.toggle('active')
      b7.classList.toggle('active')
      b6.classList.toggle('active')
      b5.classList.toggle('active')
      b4.classList.toggle('active')
      b3.classList.toggle('active')
      b2.classList.toggle('active')
      b1.classList.toggle('active')
      bm.classList.toggle('active')
      bmu.classList.toggle('active')
      b0.classList.toggle('active')
      bs.classList.toggle('active')
      bd.classList.toggle('active')
      temas.classList.toggle('active')
      suporte.classList.toggle('active')
      suuporte.classList.toggle('active')
      dados.classList.toggle('active')
      termos.classList.toggle('active')
      textarea.classList.toggle('active')
      master.classList.toggle('active')
      resultado.classList.toggle('active')
      amarelo.classList.toggle('active')
      bt.classList.toggle('active')
      seta.classList.toggle('active')
      

      if(btn.checked){
        seta.src = "seta1.svg"
        set.src = "seta1.svg"
        poly.src = "polyp.svg"
        console.log('foi')
      }else{
        seta.src = "seta.svg"
        poly.src = "poly.svg"
        set.src = "seta.svg"
        console.log
      }

      calculadora.classList.toggle('active')
      console.log('aaa')
  }

  function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num 
    }
    
    
    function clean(){
        document.getElementById('resultado').innerHTML = "";
    }
    
    
    function caucular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }else{
            document.getElementById('resultado').innerHTML = ""
        }
    }
    function soml(){
    const checkbox = document.getElementById("som");

      if (checkbox.checked) {
        var audio = new Audio('click.wav');
        audio.play()
        
    
      }else{
        var audio = ''
        console.log('desligadi')
      }
    
}