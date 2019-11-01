import { AppState, Difficulty } from './state.js';
import { render } from './render.js';
import { delegate } from './utils.js';

const main = document.querySelector("main");
const buttons = document.querySelectorAll("button");

let state, table;

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        switch (event.target.innerHTML) {
            case "Easy":
                state = new AppState(Difficulty.EASY);
                render(main, state);
                table = document.querySelector("table");
                addEventListenerToTableElement();
                break;
            case "Medium":
                state = new AppState(Difficulty.MEDIUM);
                render(main, state);
                table = document.querySelector("table");
                addEventListenerToTableElement();
                break;
            case "Hard":
                state = new AppState(Difficulty.HARD);
                render(main, state);
                table = document.querySelector("table");
                addEventListenerToTableElement();
                break;
        }
    });
}

let isBlocked = false;

let currentColor = "";

let paths = [];

function handleMouseDown(event) {
    event.preventDefault();

    let x, y;
    x = event.target.parentNode.rowIndex;
    y = event.target.cellIndex;

    if (event.target.innerHTML === "" || event.target.style.backgroundColor !== "") {
        return;
    }
    switch (parseInt(event.target.innerHTML)) {
        case 1:
            event.target.style.backgroundColor = "#99ff66";
            currentColor = "#99ff66";
            state.board[y][x].color = currentColor;
            break;
        case 2:
            event.target.style.backgroundColor = "#ff4d4d";
            currentColor = "#ff4d4d";
            state.board[y][x].color = currentColor;
            break;
        case 3:
            event.target.style.backgroundColor = "#47d147";
            currentColor = "#47d147";
            state.board[y][x].color = currentColor;
            break;
        case 4:
            event.target.style.backgroundColor = "#4d4dff";
            currentColor = "#4d4dff";
            state.board[y][x].color = currentColor;
            break;
        case 5:
            event.target.style.backgroundColor = "#ffff4d";
            currentColor = "#ffff4d";
            state.board[y][x].color = currentColor;
            break;
        case 6:
            event.target.style.backgroundColor = "#df80ff";
            currentColor = "#df80ff";
            state.board[y][x].color = currentColor;
            break;
        case 7:
            event.target.style.backgroundColor = "#80ffff";
            currentColor = "#80ffff";
            state.board[y][x].color = currentColor;
            break;
        case 8:
            event.target.style.backgroundColor = "#cccccc";
            currentColor = "#cccccc";
            state.board[y][x].color = currentColor;
            break;
        case 9:
            event.target.style.backgroundColor = "#ff80bf";
            currentColor = "#ff80bf";
            state.board[y][x].color = currentColor;
            break;
        case 10:
            event.target.style.backgroundColor = "#994d00";
            currentColor = "#994d00";
            state.board[y][x].color = currentColor;
            break;
        case 11:
            event.target.style.backgroundColor = "#ffb366";
            currentColor = "#ffb366";
            state.board[y][x].color = currentColor;
            break;
    }
    paths.push(event.target);
    isBlocked = false;
}
delegate(main, "mousedown", "td", handleMouseDown);

function handleMouseOver(event) {
    event.preventDefault();
    if (paths.length > 0) {

        let x, y;
        x = event.target.parentNode.rowIndex;
        y = event.target.cellIndex;

        if (event.buttons !== 1 || (event.buttons === 1 && event.target.innerHTML !== "" && event.target.style.backgroundColor !== "")) {
            for (let path of paths) {
                let x, y;
                x = path.parentNode.rowIndex;
                y = path.cellIndex;
                path.style.backgroundColor = "";
                state.board[y][x].color = "";
            }
            currentColor = "";
            while (paths.length > 0) {
                paths.pop();
            }
            return;
        }
        if (event.target.style.backgroundColor === event.relatedTarget.style.backgroundColor && event.target.innerHTML === ""
            && event.target.style.backgroundColor === paths[0].style.backgroundColor) {
            let cell = paths.pop();
            if (cell !== event.target && cell !== undefined) {
                cell.style.backgroundColor = "";
                state.board[y][x].color = "";
            }
            return;
        }
        if (event.target.style.backgroundColor !== event.relatedTarget.style.backgroundColor && event.target.style.backgroundColor !== "") {
            if (isBlocked && paths[0] !== undefined) {
                if (event.target.style.backgroundColor === paths[0].style.backgroundColor) {
                    isBlocked = false;
                }
            }
            else {
                isBlocked = true;
                return;
            }
        }
        if (isBlocked) {
            return;
        }
        if (event.target.innerHTML !== "") {
            switch (parseInt(event.target.innerHTML)) {
                case 1:
                    if (currentColor === "#99ff66") {
                        event.target.style.backgroundColor = "#99ff66";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 2:
                    if (currentColor === "#ff4d4d") {
                        event.target.style.backgroundColor = "#ff4d4d";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 3:
                    if (currentColor === "#47d147") {
                        event.target.style.backgroundColor = "#47d147";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 4:
                    if (currentColor === "#4d4dff") {
                        event.target.style.backgroundColor = "#4d4dff";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 5:
                    if (currentColor === "#ffff4d") {
                        event.target.style.backgroundColor = "#ffff4d";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 6:
                    if (currentColor === "#df80ff") {
                        event.target.style.backgroundColor = "#df80ff";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 7:
                    if (currentColor === "#80ffff") {
                        event.target.style.backgroundColor = "#80ffff";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 8:
                    if (currentColor === "#cccccc") {
                        event.target.style.backgroundColor = "#cccccc";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 9:
                    if (currentColor === "#ff80bf") {
                        event.target.style.backgroundColor = "#ff80bf";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 10:
                    if (currentColor === "#994d00") {
                        event.target.style.backgroundColor = "#994d00";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
                case 11:
                    if (currentColor === "#ffb366") {
                        event.target.style.backgroundColor = "#ffb366";
                        state.board[y][x].color = currentColor;
                        currentColor = "";
                    }
                    else {
                        for (let path of paths) {
                            let x, y;
                            x = path.parentNode.rowIndex;
                            y = path.cellIndex;
                            path.style.backgroundColor = "";
                            state.board[y][x].color = "";
                        }
                        currentColor = "";
                    }
                    break;
            }
            while (paths.length > 0) {
                paths.pop();
            }
            return;
        }
        event.target.style.backgroundColor = currentColor;
        state.board[y][x].color = currentColor;
        paths.push(event.target);
    }
    return;
}
delegate(main, "mouseover", "td", handleMouseOver);

function handleMouseUp() {
    handleMouseOver(event);
    if (checkWin()) {
        alert("You win!!");
    }
}
delegate(main, "mouseup", "td", handleMouseUp);

function handleRightClick(event) {
    event.preventDefault();
    let color = event.target.style.backgroundColor;
    let cells = document.querySelectorAll("td");
    for (let cell of cells) {
        if (cell.style.backgroundColor === color) {
            let x, y;
            x = cell.parentNode.rowIndex;
            y = cell.cellIndex;
            cell.style.backgroundColor = "";
            state.board[y][x].color = "";
        }
    }
}
delegate(main, "contextmenu", "td", handleRightClick);

function addEventListenerToTableElement() {
    table.addEventListener("mouseleave", (event) => {
        if (event.buttons === 1) {
            for (let path of paths) {
                path.style.backgroundColor = "";
            }
            currentColor = "";
            while (paths.length > 0) {
                paths.pop();
            }
        }
    });
}

function checkWin() {
    for (let i = 0; i < state.boardSize; i++) {
        for (let j = 0; j < state.boardSize; j++) {
            if (state.board[i][j].color == "") {
                return false;
            }
        }
    }
    return true;
}