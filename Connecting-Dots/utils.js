export function delegate(parent, type, selector, fn) {
    function delegatedFunction(e) {
        const handlerElement = this;
        const sourceElement = e.target;
    
    const closestElement = sourceElement.closest(selector);
    if (handlerElement.contains(closestElement)) {
        const delegatedElement = closestElement;
        fn.call(delegatedElement, e);
        }
    }
    
    parent.addEventListener(type, delegatedFunction);
}

export function delColorOnRightClick(color) {
    let cells = document.querySelectorAll("td");
    for(let cell of cells) {
        if(cell.style.backgroundColor === color) {
            cell.style.backgroundColor = "";
        }
    }
}