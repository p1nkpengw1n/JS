import { Field } from './field.js';

export const Difficulty = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 4
}

export const Status = {
    PLAYING: 1,
    WIN: 2
}

export class AppState {
    status = Status.PLAYING;
    difficulty = undefined;
    boardSize = 0;
    boardContents = [];
    board = [];

    constructor(difficulty) {
        this.difficulty = difficulty;
        switch(difficulty) {
            case Difficulty.EASY:
                this.boardSize = 5; 
                this.boardContents = [
                    [0,0,0,2,0],
                    [0,1,0,0,0],
                    [0,0,2,0,0],
                    [3,0,0,3,0],
                    [1,0,0,0,0]
                  ];
                break;
            case Difficulty.MEDIUM:
                this.boardSize = 9;
                this.boardContents = [
                    [2,0,0,9,0,0,0,5,0],
                    [1,0,0,8,0,11,0,0,5],
                    [0,2,0,0,6,0,7,0,0],
                    [0,0,0,0,0,11,0,10,0],
                    [0,0,0,7,0,0,0,0,0],
                    [0,0,0,4,0,0,0,0,0],
                    [0,0,0,0,0,0,0,3,6],
                    [0,9,0,4,8,0,0,0,0],
                    [0,1,0,0,0,0,0,10,3]
                  ];
                break;
            case Difficulty.HARD:
                this.boardSize = 9;
                this.boardContents = [
                    [1,0,0,0,3,0,5,0,2],
                    [0,0,0,0,0,0,8,5,0],
                    [7,4,0,6,0,0,0,0,0],
                    [0,0,0,0,0,0,1,0,0],
                    [0,0,0,0,0,0,0,0,2],
                    [0,0,4,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,7,0,0,0,0,3,0,0],
                    [0,0,0,6,0,0,0,0,8]
                ];
                break;
        }
        for(let x=0; x<this.boardSize; x++) {
            this.board.push([]);
            for(let y=0; y<this.boardSize; y++) {
                this.board[x][y] = new Field(this.boardContents[x][y]>0, this.boardContents[x][y]>0 ? this.boardContents[x][y] : "");
            }
        }
    }
}