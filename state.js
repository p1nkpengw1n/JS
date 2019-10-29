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
    board = [];

    constructor(difficulty) {
        this.difficulty = difficulty;
        switch(difficulty) {
            case Difficulty.EASY:
                this.boardSize = 5; 
                this.board = [
                    [0,0,0,2,0],
                    [0,1,0,0,0],
                    [0,0,2,0,0],
                    [3,0,0,3,0],
                    [1,0,0,0,0]
                  ];
                break;
            case Difficulty.MEDIUM:
                this.boardSize = 9;
                this.board = [
                    [2,0,0,9,0,0,0,5,0],
                    [1,0,0,8,0,11,0,0,0],
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
                this.board = [
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
    }
}