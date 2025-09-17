const fibonacci = function (member) {
  if (typeof member === 'string') member = parseInt(member);

  if (member < 0) return 'OOPS';
  if (member === 0 || member === 1) return member;

  let current;
  let prev1 = 0;
  let prev2 = 1;

  for (let n = 0; n < member - 1; n++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
