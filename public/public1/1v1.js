console.log('program started running...')
let game_running=true
let player1='x'
let player2='o'
let turn='x'
let message="X O"
var tab=['','','','','','','','',''];



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
const statut=document.querySelector("h2")
//winner_vector={}
statut.innerHTML =message
//console.log(tab);
console.log(document.getElementsByClassName('inner'))
document.querySelector("#restart").addEventListener("click",restart)




function handler(i){
    console.log('click',i)
    if(tab[i]!="" || !game_running){return}//pour ne pas choisir une case vide
    tab[i]=turn;
    console.log(turn)
    //check();
    //turn= turn ==player1 ? player2 : player1
    update();
    //computer();
}

function restart()
{
    let nodes =document.getElementsByClassName('inner');
    player1='x'
    player2='o'
    turn='x'
    game_running=true
    message="X O" 
    tab=['','','','','','','','',''];
    for(let i=0;i<nodes.length;i++){
        nodes[i].classList.remove('x','o')}
    console.log("restarted")
    update()
}


function check(){       //checks if winner wins or he loser
let win=false
for(let count of winnig_cases){  
    let value3 = tab[count[2]]
    let value2 = tab[count[1]]
    let value1 = tab[count[0]]
    if (value1=="" || value2=="" || value3==""){ 
        continue 
    } 
    if( value1==value2 && value2==value3){
        if(value1=="X"){turn="X"}
        if(value1=="O"){turn="O"}
        win=true
        break
    }
 }
if(win){
    message=`Player ${turn} won !`
    game_running=false
    console.log(message)
    return
}
if(!tab.includes("")){
    message="draw !"
    game_running=false
    console.log(message)
    return
}
if(turn==player1)
{turn=player2}
else 
{turn=player1}

}



function update(){
    //console.log('function update...')
   
    let nodes =document.getElementsByClassName('inner');
    check();
    for(let i=0;i<nodes.length;i++){
    nodes[i].classList.remove('x','o')
    if(tab[i])
    nodes[i].classList.add(tab[i])
   }
   statut.innerHTML =message
}

/*function computer() {
    let random=0; 
    
    while(1)
    {
        random = Math.floor(Math.random() * 9)
        console.log(random)
        if(tab[random] == ""){
        tab[random]=PcActif
        cases[random].innerHTML="O"
        console.log(tab)
        break
        }
        if(!etatJeu.includes("")){break}
    }
    check()    
}*/