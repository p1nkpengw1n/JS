import { Difficulty } from "./state.js";

export function render(root, state, event) {
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
    return "<td>" + field.fieldText + "</td>";
}