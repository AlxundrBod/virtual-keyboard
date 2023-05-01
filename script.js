const rowsRussian = [
  ['', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ''],
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '/'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
  ['', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['', '', '', '', '', '', '', '', '', '', ',', '', ''],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['', '', '', '', '', '', '', '', ''],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const rowsEnglish = [
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

let rows = rowsRussian;
const keyboard = document.createElement('div');
const textArea = document.createElement('textarea');

// Highlights the key on the virtual keyboard START

function highlights() {
  document.addEventListener('keydown', (event) => {
    const keydown = event.key.toLowerCase();
    const virtualKey = keyboard.querySelector('.key .bottomSymbol:not(.topSymbol):not(:empty):not(.caps):not(.shift):not(.backspace):not(.enter):not(.space):not(.tab):not(.ctrl):not(.alt):not(.win):not(.arrow):not(:has(*))');
    if (virtualKey) {
      if (keydown === 'backspace') {
        keyboard.querySelector('.backspace').classList.add('active');
      } else if (keydown === 'capslock') {
        keyboard.querySelector('.caps').classList.toggle('active');
      } else if (keydown === 'enter') {
        keyboard.querySelector('.enter').classList.add('active');
      } else if (keydown === 'shift') {
        keyboard.querySelectorAll('.shift').forEach((key) => key.classList.add('active'));
      } else if (keydown === 'alt') {
        keyboard.querySelectorAll('.alt').forEach((key) => key.classList.add('active'));
        event.preventDefault();
      } else if (keydown === 'control') {
        keyboard.querySelectorAll('.ctrl').forEach((key) => key.classList.add('active'));
      } else if (keydown === 'meta') {
        keyboard.querySelector('.win').classList.add('active');
        event.preventDefault();
      } else if (keydown === ' ') {
        keyboard.querySelector('.space').classList.add('active');
      } else if (keydown === 'tab') {
        keyboard.querySelector('.tab').classList.add('active');
        event.preventDefault();
      } else if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(keydown)) {
        keyboard.querySelector(`.${keydown}`).classList.add('active');
      } else {
        const keys = keyboard.querySelectorAll('.key .bottomSymbol:not(.topSymbol):not(:empty)');
        keys.forEach((key) => {
          if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
            key.parentNode.classList.add('active');
          }
        });
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    const keyup = event.key.toLowerCase();
    if (keyup === 'backspace') {
      keyboard.querySelector('.backspace').classList.remove('active');
    } else if (keyup === 'enter') {
      keyboard.querySelector('.enter').classList.remove('active');
    } else if (keyup === 'shift') {
      keyboard.querySelectorAll('.shift').forEach((key) => key.classList.remove('active'));
    } else if (keyup === 'control') {
      keyboard.querySelectorAll('.ctrl').forEach((key) => key.classList.remove('active'));
    } else if (keyup === 'alt') {
      keyboard.querySelectorAll('.alt').forEach((key) => key.classList.remove('active'));
    } else if (keyup === 'meta') {
      keyboard.querySelectorAll('.win').forEach((key) => key.classList.remove('active'));
    } else if (keyup === ' ') {
      keyboard.querySelector('.space').classList.remove('active');
    } else if (keyup === 'tab') {
      keyboard.querySelector('.tab').classList.remove('active');
    } else if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(keyup)) {
      keyboard.querySelector(`.${keyup}`).classList.remove('active');
    } else {
      const keys = keyboard.querySelectorAll('.key .bottomSymbol:not(.topSymbol):not(:empty)');
      keys.forEach((key) => {
        if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
          key.parentNode.classList.remove('active');
        }
      });
    }
  });
}

// Highlights the key on the virtual keyboard END

// mouse clicks on buttons of the virtual keyboard START

function attachKeyListeners() {
  const pressedKeys = document.querySelectorAll('.key');

  pressedKeys.forEach((key) => {
    key.addEventListener('click', () => {
      const keyText = key.querySelector('.bottomSymbol').textContent;
      textArea.value += keyText;
    });
  });
}

// mouse clicks on buttons of the virtual keyboard END

// Create keyboard START

function createKeyboard() {
  keyboard.classList.add('keyboard');

  textArea.classList.add('textArea');

  keyboard.appendChild(textArea);

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

      if (rows[i + 1][j] === 'Win') {
        key.classList.add('win');
      }

      if (rows[i + 1][j] === 'Alt') {
        key.classList.add('alt');
      }

      if (rows[i + 1][j] === 'Ctrl') {
        key.classList.add('ctrl');
      }

      if (rows[i + 1][j] === 'Tab') {
        key.classList.add('tab');
      }

      if (rows[i + 1][j] === '↑') {
        key.classList.add('arrowup');
      }

      if (rows[i + 1][j] === '←') {
        key.classList.add('arrowleft');
      }

      if (rows[i + 1][j] === '↓') {
        key.classList.add('arrowdown');
      }

      if (rows[i + 1][j] === '→') {
        key.classList.add('arrowright');
      }

      if (rows[i + 1][j] === 'Enter') {
        key.classList.add('enter');
      }
      row.appendChild(key);
    }
    keyboard.appendChild(row);
  }

  document.body.appendChild(keyboard);
  highlights();
}

// Create keyboard END

// Switch language START

function switchLanguage() {
  if (localStorage.getItem('rows') === 'russian') {
    rows = rowsRussian;
  } else {
    rows = rowsEnglish;
  }

  createKeyboard();
  attachKeyListeners();

  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      if (rows === rowsEnglish) {
        rows = rowsRussian;
        localStorage.setItem('rows', 'russian');
      } else {
        rows = rowsEnglish;
        localStorage.setItem('rows', 'english');
      }
      keyboard.innerHTML = '';
      createKeyboard();
      attachKeyListeners();
    }
  });
}

switchLanguage();

// Switch language END

// description START

const description = document.createElement('div');
const descriptionFirstRow = document.createElement('p');
const descriptionSecondRow = document.createElement('p');
descriptionFirstRow.classList.add('descriptionFirstRow');
descriptionSecondRow.classList.add('descriptionSecondRow');
description.classList.add('description');
keyboard.appendChild(description);
description.appendChild(descriptionFirstRow);
description.appendChild(descriptionSecondRow);
descriptionFirstRow.textContent = 'Клавиатура создана в операционной системе Windows';
descriptionSecondRow.textContent = 'Для переключения языка используйте комбинацию: Alt + Shift';

// description END
