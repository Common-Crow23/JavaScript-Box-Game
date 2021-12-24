function updateGameArea() {
  if (myGamePiece.crashWith(myObstacle)) {
    myGameArea.stop();
  } else {
    myGameArea.clear();
    myObstacle.x += -1;
    myObstacle.update();
    myGamePiece.newPos(); 
    myGamePiece.update();
  }
}
