export function render(root, state) {
    let html = "<table>"
    html += state.board.map(renderRow).join("");
    html += "</table>";
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