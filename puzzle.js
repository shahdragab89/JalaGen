const board = document.getElementById("puzzle-board");
const piecesContainer = document.getElementById("pieces");

const rows = 3;
const cols = 3;

let imageSets = ["image1", "image2", "image3"]; // أسماء الفولدرات
let currentImageIndex = 0;

// Load first puzzle
loadPuzzle();

function loadPuzzle() {

    board.innerHTML = "";
    piecesContainer.innerHTML = "";

    // Create empty cells
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("dragover", e => e.preventDefault());
            cell.addEventListener("drop", function(e) {
                e.preventDefault();
                let pieceId = e.dataTransfer.getData("text");
                let piece = document.getElementById(pieceId);
                if (!this.hasChildNodes()) this.appendChild(piece);
            });

            board.appendChild(cell);
        }
    }

    createPieces();
}

function createPieces() {
    let pieces = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let piece = document.createElement("img");
            piece.src = imageSets[currentImageIndex] + "/" + r + "" + c + ".png";
            piece.id = r + "" + c;
            piece.draggable = true;
            piece.classList.add("piece");

            piece.addEventListener("dragstart", e => {
                e.dataTransfer.setData("text", e.target.id);
            });

            pieces.push(piece);
        }
    }

    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(p => piecesContainer.appendChild(p));
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= imageSets.length) {
        currentImageIndex = 0;
    }
    loadPuzzle();
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageSets.length - 1;
    }
    loadPuzzle();
}
