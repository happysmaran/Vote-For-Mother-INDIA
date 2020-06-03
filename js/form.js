class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("Vote to make a difference");
        title.position(130, 10);
        var input=createInput("Enter your Email");
        input.position(130,160);
        var button1=createButton("login");
        button1.position(150,200);
        button1.mousePressed(function(){
            input.hide();
            button1.hide();
            var emailid=input.value();
            voterCount=voterCount+1;

            voter.updateCount(voterCount);

            voter.updatename(emailid);

            title.hide();

            var quest1=createElement("h3");
            quest1.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
            quest1.position(130, 10);
            var answ1=createInput("YES/NO");
            answ1.position(130,160);
            var button2=createButton("submit");
            button2.position(150,200);

            button2.mousePressed(function(){
                answ1.hide();
                button2.hide();

                var a=answ1.value();
                
                voter.updateAns1(a);
    
                quest1.hide();
    
                var quest2=createElement("h3");
                quest2.html("Q2. Would you be willing to contribute a small amount every month for such a program?");
                quest2.position(130, 10);
                var answ2=createInput("YES/NO");
                answ2.position(130,160);
                var button3=createButton("submit");
                button3.position(150,200);

                button3.mousePressed(function(){
                    answ2.hide();
                    button3.hide();

                    var b=answ2.value();
                    
                    voter.updateAns2(b);
        
                    quest2.hide();
        
                    var quest3=createElement("h3");
                    quest3.html("Q3. How much per month would you be willing to pay?");
                    quest3.position(130, 10);
                    var answ3=createInput("100/500/1000/more/none of the above");
                    answ3.position(130,160);
                    var button4=createButton("submit");
                    button4.position(150,200);

                    button4.mousePressed(function(){
                        answ3.hide();
                        button4.hide();

                        var c=answ3.value();
                        
                        voter.updateAns3(c);
            
                        quest3.hide();
            
                        var quest4=createElement("h3");
                        quest4.html("Q4. Do you think the government should pay attention to the environment problems?");
                        quest4.position(130, 10);
                        var answ4=createInput("YES/NO");
                        answ4.position(130,160);
                        var button5=createButton("submit and finish");
                        button5.position(150,200);

                        button5.mousePressed(function(){
                            answ4.hide();
                            button5.hide();

                            var d=answ4.value();
                            
                            voter.updateAns4(d);

                            quest4.hide();
                
                            var piece=createElement("h3");
                            piece.html("Thank You for your feedback!");
                            piece.position(130, 10);
                            
                        });
                    });
                });
            });
        });

    }
}