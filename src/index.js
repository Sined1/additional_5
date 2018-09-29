module.exports = function check(str, bracketsConfig) {
  let br = {
    '[': ']',
    '(': ')',
    '{': '}',
    '|': '|',
    '1': '2',
    '3': '4',
    '5': '6',
  };

  let stack = [];
  let count1 = 0;
  let count2 = 0;

  for (let i=0; i < str.length; i++) {
    if (str[i] == '|' || str[i] == '7') {
      count1++;
      continue;
    }

    if (str[i] == '8') {
      count2++;
      continue;
    }

    if (br[str[i]]) {
      stack.push(str[i]);
    } else if (br[stack[stack.length-1]] === str[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (count1 % 2 !== 0) return false;
  if (count2 % 2 !== 0) return false;

  if (stack.length < 1 || stack == undefined) {
    return true;
  } else return false;
}
