const rows = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['', '', '', '', '', '', '', '', '', '', '', '{', '}', '|'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['', '', '', '', '', '', '', '', '', '', ':', '\'', ''],
  ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['', '', '', '', '', '', '', '', '<', '>', '?', '', ''],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['', '', '', '', '', '', '', '', ''],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

for (let i = 0; i < rows.length; i += 2) {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  for (let j = 0; j < rows[i].length; j += 1) {
    const key = document.createElement('button');
    key.classList.add('key');
    const topSymbol = document.createElement('div');
    topSymbol.classList.add('topSymbol');
    topSymbol.textContent = rows[i][j];
    const bottomSymbol = document.createElement('div');
    bottomSymbol.classList.add('bottomSymbol');
    bottomSymbol.textContent = rows[i + 1][j];
    key.appendChild(topSymbol);
    key.appendChild(bottomSymbol);
    if (rows[i + 1][j] === 'Backspace') {
      key.classList.add('backspace');
    }

    if (rows[i + 1][j] === 'Space') {
      key.classList.add('space');
    }

    if (rows[i + 1][j] === 'Caps') {
      key.classList.add('caps');
    }

    if (rows[i + 1][j] === 'Shift') {
      key.classList.add('shift');
    }

    if (rows[i + 1][j] === 'Enter') {
      key.classList.add('enter');
    }
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

document.body.appendChild(keyboard);
