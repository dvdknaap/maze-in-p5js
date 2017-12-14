class MachineLearningClass {
  constructor() {
  	this.startPos = 0;
  	this.tries = 0;
  	this.totalPoints = 0;
  	this.pos = {};
  	this.size = 0;
  	this.ourSize = 0;
  	this.mazeMoves = [];
  }

  settings(totalPoints, pos, size) {
  	this.totalPoints = totalPoints;
  	this.pos = pos;
  	this.size = size;
  	this.ourSize = this.size/2;

  	for (let p = 0; p < this.pos.start.length; p++) {
  		this.mazeMoves[p] = [];
  	}
  }

  setStartPosition() {
  	for (let p = 0; p < this.pos.start.length; p++) {
  		rect((this.pos.start[p].y*this.size)+2, (this.pos.start[p].x*this.size)+2, this.ourSize, this.ourSize);
  	}

  }

  setFinishPosition() {
  	for (let p = 0; p < this.pos.finish.length; p++) {
  		rect((this.pos.finish[p].y*this.size)+5, (this.pos.finish[p].x*this.size)+2, this.ourSize, this.ourSize);
  	}

  }

  setNewPosition(currentPos) {
  	let startPos;
  	let totalStartPositions = Object.keys(this.mazeMoves[currentPos]).length;

  	//first move
  	if (totalStartPositions === 0) {
  		startPos = {x: this.pos.start[currentPos].x, y:this.pos.start[currentPos].y};
  	} else {
  		startPos = this.mazeMoves[currentPos][totalStartPositions-1];
  	}

  	if (floor(random(0,2)) === 0) {
  		this.mazeMoves[currentPos].push({x:(startPos.x+this.ourSize), y:startPos.y});
  	} else {
  		this.mazeMoves[currentPos].push({x:startPos.x, y:(startPos.y+this.ourSize)});
  	}
  }

  move() {
    stroke(255);
  	for (var p = 0; p < this.pos.start.length; p++) {
  		this.setNewPosition(p);

  		// console.info(this.mazeMoves[p], 'this.mazeMoves[p]');
	  	for (var mm = 0; mm < this.mazeMoves[p].length; mm++) {
	  		rect((this.mazeMoves[p][mm].x*this.ourSize), this.mazeMoves[p][mm].y*this.ourSize, this.ourSize, this.ourSize);
	  	}
  	}
  }
}