function tile(x, y) {
this.x = x;
this.y = y;
this.n = 0;
this.colr = 0;
this.colg = 0;

this.hasMine = function(m) {
  this.mine = 0;
  this.mine = m;
}

this.show = function() {
  fill(this.colr,this.colg,map(this.mine, 0, 1, 0, 255));
  stroke(255);
  rect(this.x * d, this.y * d, d, d);
}

}
