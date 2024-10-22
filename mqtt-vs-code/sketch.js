    let m5NameDiv, m5StatusDiv

    //denne variabel bruges til at håndtere mqtt
    let client

    function setup(){
        m5NameDiv = select('#m5_1 header')
        m5StatusDiv = select('#m5_1 .status')

        //vi kan bruge mqtt.connect fordi vi har inkluderet mqtt.js i HTML filen
        client = mqtt.connect('wss://mqtt.nextservices.dk')

        //on er en afsynkron EVENT, so klades når vi får en besked fra mqtt serveren
        client.on('connect', function(){
            console.log('forbundet')
        })  

        //nu vil vi gerne subscribe på et emne
        client.subscribe('programmering')

        //og så skal vi sætte den LISTENER op som skal modtage input fra MQTT
        client.on('message', function(emne, besked){
            //emnet kommer som en string
            console.log(emne)
            //beskeden skal vi lige passe før vi kan læse den
            console.log(besked.toString())
            //det vi får fra 5m'eren er i det her eksempel JSON format
            let json = JSON.parse(besked.toString())
            //nu kan jeg bruge data fra JSON objektet
            console.log(json.name, 'her er navent fra JSON objektet')
            m5NameDiv.html(json.name)
            m5StatusDiv.html(json.status)
            //HVIS satus er true, skal vi give klassen "true"
            if(json.status){
                m5StatusDiv.addClass("true")
            }else{
                m5StatusDiv.remove("true")
            }
        })
    }