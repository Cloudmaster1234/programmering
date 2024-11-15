class Clock{
    //constructor er klassen "setup" funktion som kaldes når nye objekter med klasssen
    constructor(div){
        this.div = div
        //div's for hours, minutes, secunds
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        //interval til at sætte tiden ind
        this.interval

    }
    start(){
        this.interval = setInterval( ()=>{
            //den her kompaktre linje kode betyder at vi spørger om hour() funkionen
            //et tal under ti - hvis ja sætter vi et nul foran
            this.hDiv.html(hour() < 10 ?'0' + hour() : hour() )
            this.mDiv.html(minute() < 10 ?'0' + minute() : minute() )
            this.sDiv.html(second() < 10 ?'0' + second() : second() )
        },1000)
    }
}