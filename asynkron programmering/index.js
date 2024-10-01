function setup(){
    hentTopPosts("cats");
    // Kalder funktionen 'hentTopPosts' med argumentet "cats" ved programmets start.
}

async function hentTopPosts(subreddit) {

    //først sætter vi et respons objekct = metoden fetxh data som henter data
    //dette tager lidt tid så derfor keywordet "await"
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=8`)
        //når vi så får det objeckt tilbage og hvis respons.ok = true
        //så kan vi bruge metoden .json til at læse en readable stream
        //den opration tager også lidt noget tid - derfor key wordet "await" igen 
        const json = await response.json()
            //og så kan vi bruge data fra serveren i json format
            console.log(json.data.children)
            //posts er et array ned poster fra json objeckt
            let posts = json.data.children
            //vi løber arratyet igennem 
            for( p of posts){
                //nu kan vi logge forskællige 
                console.log(p.data.title)
                console.log(p.data.url)
                console.log(p.data.ups)
                console.log(p.data.thumpnail)
                console.log(p.data.author)
                createPost(p.data)
            }
}

function createPost(post){
    //vi laver først en reference til det HTML element vi vil sætte poster ind i
    let rightDiv = select('#page1 .right')
    //lad os five posten en container
    let container =createDiv().addClass('post')
    let title =createElement('h1', post.title)
    container.child(title)


    rightDiv.child(container)
}