class MazeClass {

    constructor() {
        this.size = 10;
        this.pos = {start:[], finish:[]};
        this.startPos = 2;
        this.startAndEndPoints = 3;
    }

    createMaze(width, height) {

        this.width = width;
        this.height = height;
        this.rows = floor(width/this.size);
        this.cols = floor(height/this.size);

        for (let p = 0; p < this.startAndEndPoints; p++) {
            this.pos.start.push({x: floor(random(this.startPos, this.rows-1)), y:this.startPos});
            this.pos.finish.push({x: floor(random(this.startPos, this.rows-1)), y:this.cols-1});
        }

        //this.drawArrows();

        stroke(0);
        for (let r = this.startPos; r < this.rows; r++) {
            for (let c = this.startPos; c < this.cols; c++) {
                this.createCell(r,c);
            }
        }
    }

    // drawArrows(){
    //     //Start arrow
    //     push();
    //     translate(this.pos.start.x, this.pos.start.y);
    //     beginShape();
    //     vertex(this.pos.start.x, this.pos.start.y);
    //     vertex(this.pos.start.x+25, this.pos.start.y);
    //     vertex(this.pos.start.x+25, this.pos.start.y-10);
    //     vertex(this.pos.start.x+47, this.pos.start.y+5);
    //     vertex(this.pos.start.x+25, this.pos.start.y+20);
    //     vertex(this.pos.start.x+25, this.pos.start.y+10);
    //     vertex(this.pos.start.x, this.pos.start.y+10);
    //     endShape(close);
    //     pop();

    //     //Finish arrow
    //     push();
    //     translate(this.pos.finish.x, this.pos.finish.y);
    //     beginShape();
    //     vertex(this.pos.finish.x, this.pos.finish.y);
    //     vertex(this.pos.finish.x+25, this.pos.finish.y);
    //     vertex(this.pos.finish.x+25, this.pos.finish.y-10);
    //     vertex(this.pos.finish.x+47, this.pos.finish.y+5);
    //     vertex(this.pos.finish.x+25, this.pos.finish.y+20);
    //     vertex(this.pos.finish.x+25, this.pos.finish.y+10);
    //     vertex(this.pos.finish.x, this.pos.finish.y+10);
    //     endShape(close);
    //     pop();
    // }

    checkIfStart(r,c) {
        for (let p = 0; p < this.pos.start.length; p++) {
            if (this.pos.start[p].x === r && this.pos.start[p].y === c) {
                return true;
            }

        }

        return false;
    }

    checkIfFinish(r,c) {
        for (let p = 0; p < this.pos.finish.length; p++) {
            if (this.pos.finish[p].x === r && this.pos.finish[p].y === c) {
                return true;
            }

        }

        return false;
    }

	createCell(r,c) {
        let x = c*this.size;
        let y = r*this.size;

        let showTop = (r === 2 && c >= 2);
        let showRight = (r >= 2 && c == (this.cols-1));
        let showBottom = (r === ( this.rows-1) && c >= 2);
        let showLeft = (r >= 2 && c === 2);


        let showLine = floor(random(0,3));

        if (this.checkIfStart(r,c) || this.checkIfFinish(r,c)) {
            return;
        }

        //Top line
        if (showTop || showLine === 0) {
            line(x, y, x+this.size, y);
        }

        // Right Line
        if (showRight || showLine === 1) {
            line(x+this.size, y, x+this.size, y+this.size);
        }

        // Bottom line
        if (showBottom || showLine === 2) {
            line(x+this.size, y+this.size, x, y+this.size);
        }

        // Left line
        if (showLeft || showLine === 3) {
            line(x, y, x, y+this.size);
        }
	}
}