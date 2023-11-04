let boxs = document.querySelectorAll('.quti')


let trun = 'X'

let isGameOver = false;



boxs.forEach(e => {
    e.innerHTML = ''
    e.addEventListener('click', () => {
        if(!isGameOver && e.innerHTML === ''){
            e.innerHTML = trun
            cheakWin()
            cheakDraw()
            changeTrun()

        }
    })
})
function changeTrun(){
    if(trun === 'X'){
        trun = 'O'
        document.querySelector('.bg').style.left = '85px'
    }else{
        trun = 'X'
        document.querySelector('.bg').style.left = '0'
    }
}
function cheakWin(){
   let winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
   ]
   for(let i= 0; i<winConditions.length; i++){
    let v0 = boxs[winConditions[i][0]].innerHTML;
    let v1 = boxs[winConditions[i][1]].innerHTML;
    let v2 = boxs[winConditions[i][2]].innerHTML;

    if(v0 != "" && v0 === v1 && v0 === v2){
        isGameOver = trun
        document.querySelector('#results').innerHTML = trun + ' Yuti'
        document.querySelector('#play-again').style.display = 'inline'

        for(j = 0; j<3; j++){
            boxs[winConditions[i][j]].style.backgroundColor = 'blue'
        }
    }
   }
}
function cheakDraw(){
    if(!isGameOver){
   let isDraw = true
   boxs.forEach(e => {
    if(e.innerHTML === '') isDraw = false
   })

   if(isDraw){
    isGameOver = trun
        document.querySelector('#results').innerHTML ='Teng'
        document.querySelector('#play-again').style.display = 'inline'
   }
    }
}



document.querySelector('#play-again').addEventListener('click', () => {
    isGameOver = false
    trun = 'X'
    document.querySelector('.bg').style.left = '0'
    document.querySelector('#results').innerHTML = ''
    document.querySelector('#play-again').style.display = 'none'

    boxs.forEach(e => {
        e.innerHTML = '';
        e.style.removeProperty('background-color')
        e.style.color = '#fff'
    })
})