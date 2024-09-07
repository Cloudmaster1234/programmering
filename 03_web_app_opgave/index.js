//kan jeg kommit på mac
let currentPage = 1;
let menuNumber = 1;

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkter
let colors=['red','green','pink','blue','lightblue','lightgreen','darkgreen','darkblue','lightcyan','orange']

function setup(){
    //shiftpage er funktionen der tager et tal og skifter til side
    
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')
    
    
    //menuitems skal reagere med at skifte side
    for( m of menuItems ){
        m.mousePressed( function(e){
            //e.target er selve html div'en
            console.log(e.target.id)
            //slice af -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //nu kan vi kalde shiftpage som skifter side
            shiftPage(nr)
        } )
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
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')
    
}

function keyPressed(){
    shiftPage(key)
}