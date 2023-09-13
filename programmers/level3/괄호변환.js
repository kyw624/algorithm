const OPEN = '(';
const CLOSE = ')';

const isCompleteBracket = (bracket) => {
  const stack = [];
  let top = -1;

  for (let i = 0; i < bracket.length; i++) {
    const current = bracket[i];

    if (current === CLOSE) {
      if (stack[top] === OPEN) {
        stack.pop();
        top--;
      } else {
        return false;
      }
    } else {
      stack.push(OPEN);
      top++;
    }
  }

  return stack.length ? false : true;
};

const flipBracket = (bracket) => {
  let result = '';

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === OPEN) {
      result += CLOSE;
    } else {
      result += OPEN;
    }
  }

  return result;
};

function solution(p) {
  if (p === '') return '';
  if (isCompleteBracket(p)) return p;

  let open = 0;
  let close = 0;
  let u, v;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === OPEN) {
      open++;
    } else {
      close++;
    }

    if (open === close) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);

      if (isCompleteBracket(u)) {
        return u + solution(v);
      } else {
        let str = OPEN;

        str += solution(v);
        str += CLOSE;
        str += flipBracket(u.slice(1, u.length - 1));

        return str;
      }
    }
  }
}

console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // "()(())()"
