let container = document.getElementById('container');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell', 'cell-blank');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(16);

function clearGrid() {
    container.innerHTML = '';
}

let newGridBtn = document.getElementById('new-grid');
newGridBtn.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size: ');
    if (newSize > 100) {
        alert('Grid size must be less than 100');
        return;
    }
    clearGrid();
    createGrid(newSize);
});

let mouseDown = false;
document.addEventListener('mousedown', () => {
    mouseDown = true;
});
document.addEventListener('mouseup', () => {
    mouseDown = false;
});
container.addEventListener('mousemove', (e) => {
    if (mouseDown && e.target.classList.contains('cell-blank')) {
        e.target.classList.remove('cell-blank');
        e.target.classList.add('cell-filled');
    }
})