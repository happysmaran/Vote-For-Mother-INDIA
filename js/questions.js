class Questions{
    constructor(){
        
    }
    getState(){
        var StateRef=database.ref("state");
        StateRef.on("value",function(data){
            State=data.val()
        })
    }

    update(state){
        database.ref("/").update({
            State:state
        })
    }

    start(){
        if(State===0){
            form=new Form();
            form.display();

            voter=new Voter();
            voter.getCount();
        }
    }
}