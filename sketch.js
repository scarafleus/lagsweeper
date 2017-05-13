//tiles array
var tiles = [];
//diameter of tiles
var d = 40;

function setup() {

  createCanvas(800, 800);
  //create grid
  for (i = 0; i < width; i++) {
    tiles[i] = [];
    for (j = 0; j < height; j++) {
      tiles[i][j] = new tile(i, j);
      tiles[i][j].hasMine(0);
    }
  }
  //place mines
  for (yup = 0; yup < 68; yup++) {
    tiles[floor(random(0,20))][floor(random(0,20))].hasMine(1);
  }

  //check if the cells exist and add +1 to this cells n value for every cell with a mine next to it
  for (ik = 0; ik < width; ik++) {
    for (jk = 0; jk < height; jk++) {

        if (ik -1 >= 0 && tiles[ik -1][jk].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (ik -1 >= 0 && jk -1 >= 0 && tiles[ik -1][jk -1].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (jk -1 >= 0 && tiles[ik][jk -1].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (jk -1 >= 0 && ik + 1 < 19 && tiles[ik +1][jk -1].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (ik -1 >= 0 && jk + 1 < 19 && tiles[ik -1][jk +1].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (ik +1 < 19 && jk + 1 < 19 && tiles[ik +1][jk +1].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (ik + 1 < 19 && tiles[ik +1][jk].mine == 1) {
          tiles[ik][jk].n++;
        }
        if (jk + 1 <19 && tiles[ik][jk +1].mine == 1) {
          tiles[ik][jk].n++;
        }
      }
    }
  }



function draw() {
background(41);
//show tiles
for (i = 0; i < width; i++) {
  for (j = 0; j < height; j++) {
    tiles[i][j].show();
  }
}

}

function mousePressed() {
  this.x = floor(mouseX/d);
  this.y = floor(mouseY/d);
  if (tiles[this.x][this.y].n == 0) {
    tiles[this.x][this.y].colg += 255;
  } else if (tiles[this.x][this.y].mine == 0) {
    tiles[this.x][this.y].colr += 255;
    tiles[this.x][this.y].colg += 255;
    stroke(0);
    text(tiles[this.x][this.y].n, this.x * d, this.y * d, d, d);
  } else {
    tiles[this.x][this.y].colr += 255;
  }
}
