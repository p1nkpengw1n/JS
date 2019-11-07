import { AppState } from './state.js';

export function render(root, state) {
    let html = "<br>";
    html += "<table>";
    html += state.board.map(renderRow).join("");
    html += "</table>";
    html += "<br>";
    root.innerHTML = html;
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

export function renderFromSaved(savedState, newState) {
    let newtds = document.querySelectorAll("td");
    for (let cell of newtds) {
        let x = cell.parentNode.rowIndex;
        let y = cell.cellIndex;
        let color = savedState.board[y][x].color;
        newState.board[y][x].color = color;
        cell.style.backgroundColor = color;
    }
}