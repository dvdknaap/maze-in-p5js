let maze = new MazeClass();
let machineLearning = new MachineLearningClass();

function setup() {
	let width = int(450);
	let height = int(450);

	canvas = createCanvas(width+20, height+20);
	canvas.parent('maze');
	canvas.background('green');

	maze.createMaze(width, height);
	machineLearning.settings(maze.startAndEndPoints, maze.pos, maze.size);
	machineLearning.setStartPosition();
	machineLearning.setFinishPosition();

	frameRate(1);
}

function draw() {
	machineLearning.move();
	noLoop();
}
