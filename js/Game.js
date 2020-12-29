class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(950,500);
    player1.addImage(greenTank_img);
    
    player2 = createSprite(50,500);
    player2.addImage(grayTank_img);
    players=[player1,player2];
            
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                //image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y =200;
                 var index =0;
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x=500-allPlayers[plr].distance
                     y=500-allPlayers[plr].distance1
                     players[index-1].x=x
                     players[index-1].y=y

                     if(players[index-1]===player1){
                         if(keyIsDown(65)){
                             var bullet=createSprite(players[index-1].x,players[index-1].y,10,10)
                             bullet.velocityX=-10
                             bulletGroup.add(bullet)
                         }
                     }

                     if(players[index-1]===player1){
                        if(keyIsDown(68)){
                            var bullet=createSprite(players[index-1].x,players[index-1].y,10,10)
                            bullet.velocityX=10
                            bulletGroup.add(bullet)
                        }
                    }

                    if(players[index-1]===player1){
                        if(keyIsDown(87)){
                            var bullet=createSprite(players[index-1].x,players[index-1].y,10,10)
                            bullet.velocityY=-10
                            bulletGroup.add(bullet)
                        }
                    }

                    if(players[index-1]===player1){
                        if(keyIsDown(83)){
                            var bullet=createSprite(players[index-1].x,players[index-1].y,10,10)
                            bullet.velocityY=10
                            bulletGroup.add(bullet)
                        }
                    }

                    if(players[index-1]===player2){
                        if(keyIsDown(70)){
                            var bullet1=createSprite(players[index-1].x,players[index-1].y,10,10)
                            bullet1.velocityX=-10
                            bullet1Group.add(bullet1)
                        }
                    }

                    if(players[index-1]===player2){
                       if(keyIsDown(72)){
                           var bullet1=createSprite(players[index-1].x,players[index-1].y,10,10)
                           bullet1.velocityX=10
                           bullet1Group.add(bullet1)
                       }
                   }

                   if(players[index-1]===player2){
                       if(keyIsDown(84)){
                           var bullet1=createSprite(players[index-1].x,players[index-1].y,10,10)
                           bullet1.velocityY=-10
                           bullet1Group.add(bullet1)
                       }
                   }

                   if(players[index-1]===player2){
                       if(keyIsDown(71)){
                           var bullet1=createSprite(players[index-1].x,players[index-1].y,10,10)
                           bullet1.velocityY=10
                           bullet1Group.add(bullet1)
                       }
                   }
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                     textSize(25);
                     fill("white");
                    text("player1: "+ allPlayers.player1.score,950,50)
                    text("player2: "+ allPlayers.player2.score,50,50)
                    
                     
                 
                 }
                
                 if(count>0){
                     if(bullet1Group.isTouching(player1)){
                         bullet1.destroyEach()
                         count=count-1
                     }
                 }
                else{
                     player1.destroy()
                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.distance1 += 10
                    player.update();
               }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distance1 -= 10
                    player.update();
                 }
        
         drawSprites();

    }

    end(){
       console.log("Game Ended");
    }
}