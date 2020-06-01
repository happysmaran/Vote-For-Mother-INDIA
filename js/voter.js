class Voter{
    constructor(){

    }
    
    getCount(){
        var getCountRef=database.ref("voterCount");
        getCountRef.on("value",function(data){
            voterCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            voterCount:count
        })
    }

    update(name){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            name:name
        })
    }


}