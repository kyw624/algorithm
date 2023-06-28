function solution(new_id) {
  let step = 1;
  let currentId = new_id;

  while (step <= 7) {
    currentId = validCheck(currentId, step);
    step++;
  }

  return currentId;
}

function validCheck(id, step) {
  switch (step) {
    case 1:
      return id.toLowerCase();

    case 2:
      return id.replaceAll(/[^a-z0-9\-\_\.]/g, "");

    case 3:
      return id.replaceAll(/\.{2,}/g, ".");

    case 4:
      return id.replace(/^\.|\.$/, "");

    case 5:
      return id === "" ? "a" : id;

    case 6:
      let _id = id;

      if (_id.length >= 16) {
        _id = _id.slice(0, 15);
      }

      return _id.replace(/\.$/, "");

    case 7:
      return id.padEnd(3, id[id.length - 1]);
  }
}

const inputs = [
  ["...!@BaT#*..y.abcdefghijklm", "bat.y.abcdefghi"],
  ["z-+.^.", "z--"],
  ["=.=", "aaa"],
  ["123_.def", "123_.def"],
  ["abcdefghijklmn.p", "abcdefghijklmn"],
];

inputs.forEach((input) => {
  const result = solution(input[0]);
  console.log(result, result === input[1]);
});
