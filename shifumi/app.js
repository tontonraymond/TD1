let textResult = document.getElementById("textResult");
let botChoice = document.getElementById("textBot");
let textPlayer = document.getElementById("textPlayer")
let textResults = document.getElementById("textResults")
const buttons = document.querySelectorAll('.buttons');


const choices = ["Pierre","Feuille","Ciseaux"];

const results = {win : 0, lose : 0, draw : 0}



buttons.forEach(button => (
    button.addEventListener('click', event =>{
        let player = button.textContent;
        let bot = choices[ Math.floor(Math.random() * 3)];
        textPlayer.innerHTML = "Votre choix: <u>" + player +"</u>";
        botChoice.innerHTML = "Choix du bot: <u>" + bot + "</u>";
        if (player === bot){
            results.draw++;
            textResult.innerHTML = "<b>Egalite</b>";
        }
        else if(
            (player === "Pierre" && bot === "Ciseau") ||
            (player === "Ciseaux" && bot === "Feuille") ||
            (player === "Feuille" && bot === "Pierre"))
            {
            results.win++;
            textResult.innerHTML = "<b>Victoire</b>";
        }
        else{
            
            results.lose++;
            textResult.innerHTML = "<b>Defaite</b>";
        }
        textResults.innerHTML = "Victoires : "+ results.win +", Defaites : "+ results.lose +", Nuls : " +results.draw;
        }
    )
) )