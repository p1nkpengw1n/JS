import { Difficulty } from "./state.js";

export function render(root, state) {
    let html = "<table>";
    html += renderCaption(state.difficulty)
    html += state.board.map(renderRow).join("");
    html += "</table>";
    root.innerHTML = html;
}

function renderCaption(difficulty) {
    let html = "<caption>";
    switch(difficulty) {
        case Difficulty.EASY:
            html += "Easy"
            break;
        case Difficulty.MEDIUM:
            html += "Medium"
            break;
        case Difficulty.HARD:
            html += "Hard"
            break;
    }
    html += "</caption>";
    return html;
}

function renderRow(row) {
    let html = "<tr>";
    html += row.map(renderField).join("");
    html += "</tr>";
    return html;
}

function renderField(field) {
    let html = "<td";
    if(field.fieldText !== "") {
        let clr;
        switch(field.fieldText) {
            case 1:
                clr = "#99ff66";
                break;
            case 2:
                clr = "#ff4d4d";
                break;
            case 3:
                clr = "#47d147";
                break;
            case 4:
                clr = "#4d4dff";
                break;
            case 5:
                clr = "#ffff4d";
                break;
            case 6:
                clr = "#df80ff";
                break;
            case 7:
                clr = "#80ffff";
                break;
            case 8:
                clr = "#cccccc";
                break;
            case 9:
                clr = "#ff80bf";
                break;
            case 10:
                clr = "#994d00";
                break;
            case 11:
                clr = "#ffb366";
                break;
        }
        html += " bgcolor=";
        html += clr;
        html += ">";
        html += field.fieldText;
        html += "</td>";
    }
    else html += "></td>"
    return html;
}