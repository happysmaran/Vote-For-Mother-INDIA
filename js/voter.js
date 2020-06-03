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

    updatename(name){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            Email:name
        })
    }


    updateAns1(ans1){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex+"/answers/ans1").set({
            answers1:ans1
        })
    }

    updateAns2(ans2){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex+"/answers/ans2").set({
            answers2:ans2
        })
    }

    updateAns3(ans3){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex+"/answers/ans3").set({
            answers3:ans3
        })
    }

    updateAns4(ans4){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex+"/answers/ans4").set({
            answers4:ans4
        })
    }


}