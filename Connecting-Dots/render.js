import { addButtonListeners } from "./index.js";

export function render(root, state) {
    let html = renderButtonDiv();
    html += "<table>";
    html += state.board.map(renderRow).join("");
    html += "</table>";
    root.innerHTML = html;
    const buttons = document.querySelectorAll("button");
    addButtonListeners(buttons);
}

function renderButtonDiv() {
    let html = "<div>";
    html += "<button type=\"button\">Easy</button>";
    html += "<button type=\"button\">Medium</button>";
    html += "<button type=\"button\">Hard</button>";
    html += "</div>";
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