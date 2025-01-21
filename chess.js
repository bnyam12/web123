// ایجاد صفحه شطرنج
const board = document.getElementById('board');
const squares = [];
let selectedSquare = null;
let currentPlayer = 'white'; // بازیکن فعلی

// مهره‌ها
const initialPieces = {
    0: '♜', 1: '♞', 2: '♝', 3: '♛', 4: '♚', 5: '♝', 6: '♞', 7: '♜',
    8: '♟', 9: '♟', 10: '♟', 11: '♟', 12: '♟', 13: '♟', 14: '♟', 15: '♟',
    48: '♙', 49: '♙', 50: '♙', 51: '♙', 52: '♙', 53: '♙', 54: '♙', 55: '♙',
    56: '♖', 57: '♘', 58: '♗', 59: '♕', 60: '♔', 61: '♗', 62: '♘', 63: '♖',
};

// ایجاد خانه‌ها
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
        const index = row * 8 + col;

        // اضافه کردن مهره‌ها
        if (initialPieces[index]) {
            square.textContent = initialPieces[index];
        }

        square.dataset.index = index;
        square.addEventListener('click', handleSquareClick);
        squares.push(square);
        board.appendChild(square);
    }
}

// مدیریت کلیک روی خانه‌ها
function handleSquareClick(event) {
    const square = event.currentTarget;
    const index = square.dataset.index;

    // اگر خانه‌ای انتخاب شده بود
    if (selectedSquare) {
        // حرکت مهره
        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = '';
        selectedSquare.classList.remove('selected');
        selectedSquare = null;

        // تغییر بازیکن
        currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
        alert(It's ${currentPlayer}'s turn!);
    } else if (square.textContent) {
        // انتخاب خانه جدید
        selectedSquare = square;
        square.classList.add('selected');
    }
}
