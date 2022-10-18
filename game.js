const gameButtons = document.querySelectorAll(".gameButtons");
const outcomeText = document.querySelector(".outcomeText");
const winCounterText = document.querySelector(".winCounterText");
const loseCounterText = document.querySelector(".loseCounterText");
const tieCounterText = document.querySelector(".tieCounterText");
let human;
let comp;
let outcome;
var humanWin = 0;
var compWin = 0;
var tie = 0;

gameButtons.forEach(button => button.addEventListener("click", () => {

    human = button.textContent;
    comp_kpo();
    outcomeText.textContent = Winner();
    winCounterText.textContent = `Nyert: ${humanWin}`;
    tieCounterText.textContent = `Döntetlen: ${tie}`;
    loseCounterText.textContent = `Vesztett: ${compWin}`;
        }
    )
)

function Winner() {

    if (human == comp) {
        tie++;
        return "Eredmény: Döntetlen!";
    }
    
    else if (human == 'PAPÍR') {
    if (comp == 'KŐ') {
        humanWin++;
        return "Eredmény: Nyertél!"

    } else {
        compWin++;
        return "Eredmény: Vesztettél!"
    }
    
} else if (human == 'KŐ') {
    if (comp == 'OLLÓ') {
        humanWin++;
        return "Eredmény: Nyertél!"
    } else {
        compWin++;
        return "Eredmény: Vesztettél!"
        }
} else if (human == 'OLLÓ') {
    if (comp == 'PAPÍR') {
        humanWin++;
        return "Eredmény: Nyertél!"
        
    } else {
        compWin++;
        return "Eredmény: Vesztettél!"
        }
    }
}

function resetScr() {

    humanWin = 0;
    winCounterText.textContent = `Nyert: ${humanWin}`;
    tie = 0;
    tieCounterText.textContent = `Döntetlen: ${tie}`;
    compWin = 0;
    loseCounterText.textContent = `Vesztett: ${compWin}`;
    outcomeText.textContent = `Eredmény:`;
}


function comp_kpo() {

    var randomNumb = Math.floor(Math.random() * 3) + 1;

    switch(randomNumb){
      case 1:
        comp = "KŐ";
        break;
      case 2:
        comp = "PAPÍR";
        break;
      case 3:
        comp = "OLLÓ";
        break;
    }

}
