import { AppState, Difficulty } from './state.js';
import { render } from './render.js';
import { delegate, delColorOnRightClick } from './utils.js';

const main = document.querySelector("main");

let state = new AppState(Difficulty.HARD);

let currentColor = "";

let paths = [];

render(main, state);

function handleMouseDown(event) {
    event.preventDefault();
    if(event.target.innerHTML === "" || event.target.style.backgroundColor !== "") {
        return;
    }
    switch(parseInt(event.target.innerHTML)) {
        case 1:
            event.target.style.backgroundColor = "#99ff66";
            currentColor = "#99ff66";
            break;
        case 2:
            event.target.style.backgroundColor = "#ff4d4d";
            currentColor = "#ff4d4d";
            break;
        case 3:
            event.target.style.backgroundColor = "#47d147";
            currentColor = "#47d147";
            break;
        case 4:
            event.target.style.backgroundColor = "#4d4dff";
            currentColor = "#4d4dff";
            break;
        case 5:
            event.target.style.backgroundColor = "#ffff4d";
            currentColor = "#ffff4d";
            break;
        case 6:
            event.target.style.backgroundColor = "#df80ff";
            currentColor = "#df80ff";
            break;
        case 7:
            event.target.style.backgroundColor = "#80ffff";
            currentColor = "#80ffff";
            break;
        case 8:
            event.target.style.backgroundColor = "#cccccc";
            currentColor = "#cccccc";
            break;
        case 9:
            event.target.style.backgroundColor = "#ff80bf";
            currentColor = "#ff80bf";
            break;
        case 10:
            event.target.style.backgroundColor = "#994d00";
            currentColor = "#994d00";
            break;
        case 11:
            event.target.style.backgroundColor = "#ffb366";
            currentColor = "#ffb366";
            break;
    }
    paths.push(event.target);
}
delegate(main,"mousedown","td", handleMouseDown);

function handleMouseOver(event) {
    event.preventDefault();
    if(event.buttons !== 1 || (event.buttons === 1 && event.target.innerHTML !== ""  && event.target.style.backgroundColor !== "")) {
        for(let path of paths) {
            path.style.backgroundColor = "";
        }
        currentColor = "";
        while(paths.length > 0) {
            paths.pop();
        }
        return;
    }
    
    if(event.target.style.backgroundColor !== "" && event.target.innerHTML === "") {
        let cell = paths.pop();
        if(cell !== event.target) {
            cell.style.backgroundColor = "";
        }
        return;
    }
    if(event.target.innerHTML !== "") {
        switch(parseInt(event.target.innerHTML)) {
        case 1:
            if(currentColor === "#99ff66") {
                event.target.style.backgroundColor = "#99ff66";
                currentColor = "";
            }
            else {
                for(let path of paths) {
                    path.style.backgroundColor = "";
                }
                currentColor = "";
            }
            break;
        case 2:
            if(currentColor === "#ff4d4d") {
                event.target.style.backgroundColor = "#ff4d4d";
                currentColor = "";
            }
            else {
                for(let path of paths) {
                    path.style.backgroundColor = "";
                }
                currentColor = "";
            }
            break;
        case 3:
            if(currentColor === "#47d147") {
                event.target.style.backgroundColor = "#47d147";
                currentColor = "";
            }
            else {
                for(let path of paths) {
                    path.style.backgroundColor = "";
                }
                currentColor = "";
            }
            break;
        case 4:
                if(currentColor === "#4d4dff") {
                    event.target.style.backgroundColor = "#4d4dff";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 5:
                if(currentColor === "#ffff4d") {
                    event.target.style.backgroundColor = "#ffff4d";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 6:
                if(currentColor === "#df80ff") {
                    event.target.style.backgroundColor = "#df80ff";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 7:
                if(currentColor === "#80ffff") {
                    event.target.style.backgroundColor = "#80ffff";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 8:
                if(currentColor === "#cccccc") {
                    event.target.style.backgroundColor = "#cccccc";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 9:
                if(currentColor === "#ff80bf") {
                    event.target.style.backgroundColor = "#ff80bf";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 10:
                if(currentColor === "#994d00") {
                    event.target.style.backgroundColor = "#994d00";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        case 11:
                if(currentColor === "#ffb366") {
                    event.target.style.backgroundColor = "#ffb366";
                    currentColor = "";
                }
                else {
                    for(let path of paths) {
                        path.style.backgroundColor = "";
                    }
                    currentColor = "";
                }
            break;
        }
        while(paths.length > 0) {
            paths.pop();
        }
        return;
    }
    event.target.style.backgroundColor = currentColor;
    paths.push(event.target);
}
delegate(main,"mouseover","td",handleMouseOver);

function handleMouseUp() {
    handleMouseOver(event);
}
delegate(main,"mouseup","td",handleMouseUp);

function handleRightClick(event) {
    event.preventDefault();
    let color = event.target.style.backgroundColor;
    delColorOnRightClick(color);
}
delegate(main,"contextmenu","td",handleRightClick);

const table = document.querySelector("table");
table.addEventListener("mouseleave", (e) => {
    if(e.buttons === 1){
        for(let path of paths) {
            path.style.backgroundColor = "";
        }
        currentColor = "";
        while(paths.length > 0) {
            paths.pop();
        }
    } 
});