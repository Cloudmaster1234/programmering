
let currentPage = 1;
let menuNumber = 1;

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkter
let colors=['red','green','pink','blue','lightblue','lightgreen','darkgreen','darkblue','lightcyan','orange']

function setup(){
    console.log('P5.js er loaded')

    select('#page' + currentPage).addClass('visible')
    select('#menu' + menuNumber).addClass('active')
    
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    for( m of menuItems ){
        m.mousePressed( function(e){
            //e.target er selve html div'en
            console.log(e.target.id)
            //slice af -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)
        } )
    }
    
    //nu kan man se at pages er blevet til en liste med alle Class = page ting
    console.log(pages.length)
    
    //lav et masse div'er vi kommer ind på 
    for(c of colors){
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
      }
}



function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage -1
    }
    if(num == "ArrowRight"){
        num = currentPage +1
    }
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')

    select("#menu" + menuNumber).removeClass('active')
    menuNumber = num
    select("#menu" + menuNumber).addClass('active')

}

function keyPressed(){
    shiftPage(key)
}