function sigma() {
    let p1 = prompt('Qual é o seu nome?')
    let nome = ["Isaque", "Edér", "Wemerson"];
   
    if(nome.includes(p1)) {
        alert("${nome }é Macho Alfa");
    }
    
    else {
        alert("Gay");
    };
    
    let music =  document.getElementById('audio');
  music.audio();
 
}
