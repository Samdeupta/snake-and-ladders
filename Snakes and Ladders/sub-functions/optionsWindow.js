class OptionWindow{
    constructor(){
        this.optionWindow,this.diceRoll,this.Turn;
        this.diceButton = createButton("ROLL DICE");
    }

    button(){
        this.diceRoll = new DiceRoll();
        this.Turn = new Turn();

        this.diceButton.mousePressed(()=>{
            console.log(turn);
            console.log(index);
            if(turn === index){
                this.diceRoll.playerMovement();
                turn += 1;

                if(turn > 2){
                    turn = 1;
                }
                console.log(turn);

                this.Turn.assign();

                // turn1 = turn;
                // this.Turn.linkTurn1();
                // this.Turn.updateTurn1(turn);

                // turn2 = turn;
                // this.Turn.linkTurn2();
                // this.Turn.updateTurn2(turn);


               turn1 = turn2 = turn;
               this.Turn.linkTurn1();
               this.Turn.updateTurn1(turn);

               this.Turn.linkTurn2();
               this.Turn.updateTurn2(turn); 
            }
        }); 

    }

    display(){
        this.diceButton.position((displayWidth/2) - 161,displayHeight-150)

        this.optionWindow = createSprite(displayWidth/2,displayHeight-100,350,150);
        
    }
}