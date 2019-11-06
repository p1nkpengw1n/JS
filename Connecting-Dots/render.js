export function render(root, state) {
    let html = "<br>";
    html += "<table>";
    html += state.board.map(renderRow).join("");
    html += "</table>";
    html += "<br>";
    html += "<button id=\"s\" type=\"button\">Save</button>";
    html += "<button id=\"l\" type=\"button\">Load</button>";
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