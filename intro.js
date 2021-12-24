function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120); // dimensions and color of the box
  myGamePiece.gravity = 0.05; // gravity
  myScore = new component("30px", "Consolas", "black", 280, 40, "text"); 
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480; // width of screen
    this.canvas.height = 270; // height of screen
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
