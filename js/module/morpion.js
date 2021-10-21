var monMorpion = {

  eventMorpion : () => {
    var statut = document.querySelector("h2");
    let jeuActif = true;
    let joueurActif = "X" ;
    let etatJeu = [ "", "", "", "", "", "", "", "", ""];

    const conditionsVictoire = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    //--------------------------------------------------//

   document.querySelectorAll(".case").forEach(cell =>cell.addEventListener("click", gestionClicCase))
   document.getElementById("recommencer").addEventListener("click", recommencer)
    
   function gestionClicCase() {
    /* item.innerHTML = joueurActif;
     if (joueurActif == "X") {
         joueurActif = "O";
     } else {joueurActif = "X"}; */
    
    var indexCase = parseInt(this.dataset.index);
    if (etatJeu[indexCase] != "" || !jeuActif) {
         return ;
    }
    etatJeu[indexCase] = joueurActif;
    this.innerHTML = joueurActif;

    verifGagne()
   }

   function verifGagne() { 
       let tourGagnant = false; 

       for(let conditionVictoire of conditionsVictoire){
          let val1 = etatJeu[conditionVictoire[0]];
          let val2 = etatJeu[conditionVictoire[1]];
          let val3 = etatJeu[conditionVictoire[2]];
          if (val1 == "" || val2 =="" || val3 == "") {
              continue;
          }
          if (val1 == val2 && val2 == val3) {
              tourGagnant = true ;
              break;
          }
       }
       if (tourGagnant) {
        statut.innerHTML = 'le joueur ' + joueurActif + ' a gagné';;
        jeuActif = false ;
        return; 
     }
     if (!etatJeu.includes("")) {
         statut.innerHTML = 'Egalité';
         jeuActif = false;
         return;
     }

     joueurActif = joueurActif === "X" ? "O" : "X";
     statut.innerHTML = "c'est au tour du joueur " + joueurActif;
   }

   function recommencer() {
      joueurActif = "X";
      jeuActif = true;
      etatJeu = [ "", "", "", "", "", "", "", "", ""];
      statut.innerHTML ="c'est au tour du joueur " + joueurActif;
      document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "");
   }
     
  }


};

export{monMorpion}