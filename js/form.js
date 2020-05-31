class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("carRacing");
        title.position(130, 10);
        var input=createInput("Enter your username");
        input.position(130,160);
        var button=createButton("login");
        button.position(150,200);
        var greeting=createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;

            player.updateCount(playerCount);
            player.update(name);

            greeting.html("Welcome "+name);
            greeting.position(131, 160);
        });
    }
}