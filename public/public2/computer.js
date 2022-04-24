const statut=document.querySelector("h2")
let game_running = true
let turn = "X"
let player ="X"
let PC ="O"
let tab=["","","","","","","","",""]
const cases=document.querySelectorAll('[data-etatJeu]')
console.log(cases)
const winnig_cases=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const winner = () => `Player ${turn} won !`
const draw =() => "Draw"
const message = () => `X O`

statut.innerHTML =message()
cases.forEach(cell=> cell.addEventListener("click",clickHandler))
document.querySelector("#restart").addEventListener("click",restart)

function clickHandler(){
    const indexCase=parseInt(this.dataset.index)
    //console.log(this)
    if(tab[indexCase] != "" || !game_running){
        return
    }
    tab[indexCase]=player
    this.innerHTML =player

    check()
    computer()
    
    
}
function check(){
    let win =false
    for(let count of winnig_cases ){
        let value1 = tab[count[0]]
        let value2 = tab[count[1]]
        let value3 = tab[count[2]]
        if (value1=="" || value2=="" || value3==""){
            continue
        }
        if (value1 == value2 && value2 == value3){
            if(value1=="X"){turn="X"}
            if(value1=="O"){turn="O"}
            win = true
            break
        }
    }
    if(win){
        statut.innerHTML =winner()
        game_running=false
        return
    }  
    if(!tab.includes("")){
        statut.innerHTML =draw()
        game_running = false
        return
    }
    //joueurActif= joueurActif =="X" ? "O" : "X"
    statut.innerHTML = message()
}

function restart(){
    player ="X"
    game_running =true
    tab=["","","","","","","","",""]
    statut.innerHTML = message()
    document.querySelectorAll(".case").forEach(cell => cell.innerHTML ="")
}


function computer() {
    let random=0; 
    
    while(1)
    {
        random = Math.floor(Math.random() * 9)
        console.log(random)
        if(tab[random] == ""){
        tab[random]=PC
        cases[random].innerHTML="O"
        console.log(tab)
        break
        }
        if(!tab.includes("")){break}
    }
    check()    
}

