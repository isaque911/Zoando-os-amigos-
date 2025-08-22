function sigma() {
    let p1 = prompt('Qual é o seu nome?')
    let nome = ("Isaque");
   
    if(nome.includes(p1)) {
        alert(`${nome}é Macho`);
    }
    
    else {
        alert("Gay");
    };
    
    let music =  document.getElementById('audio');
  music.audio();
 
}
