function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
</script>

<button onmousedown="moveup()" onmouseup="stopMove()"
ontouchstart="moveup()">UP</button>
<button onmousedown="movedown()" onmouseup="stopMove()"
ontouchstart="movedown()">DOWN</button>
<button onmousedown="moveleft()" onmouseup="stopMove()"
ontouchstart="moveleft()">LEFT</button>
<button onmousedown="moveright()" onmouseup="stopMove()"
ontouchstart="moveright()">RIGHT</button>
