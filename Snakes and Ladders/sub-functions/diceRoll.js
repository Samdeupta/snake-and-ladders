class DiceRoll{
    constructor(){
        this.dice;
    }

    //rolling dice and updating player block
    playerMovement(){
        this.dice = round(random(1,6));
        
        block += this.dice;

        player.linkBlock();
        player.updateBlock(block);

        //console.log(this.dice)
    }
}