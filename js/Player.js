class Player{

    constructor(){

this.index = null
this.name = null
this.distance = 0


    }

getCount(){

    var playerCountref =  database.ref("playerCount")
    playerCountref.on("value" , (data)=>{
        playerCount = data.val();
    })


}

updateCount(count){
   database.ref("/").update({

        playerCount : count
    })

}

update(){

var plyindx = "players/player" + this.index
//console.log(plyindx)

database.ref(plyindx).update({
    name:this.name,
    distance:this.distance

})
// update creates a node and inserts 

}

static getPlayerInfo(){
var refer = database.ref("players")
refer.on("value" , (data)=>{

allPlayers = data.val();

})
}
// can call with the name of class not attached to the object
}

