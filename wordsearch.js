
const wordSearch = (letters, word) => { 
    if (letters.length > 1) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join('')); 
    //let massiveArr = horizontalJoin.concat(verticalJoin)
    
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    }
    return false;
};

function transpose(letters) {
    const rows = letters.length, cols = letters[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
      grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[j][i] = letters[i][j];
      }
    }
    return grid;
  }

module.exports = wordSearch      

