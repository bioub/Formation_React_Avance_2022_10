// @ts-check

/** @param {string} name */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

function bye(name = '') {
  return `Bye ${name.toUpperCase()}`;
}

/** @type {string[]} */
const names = [12];

names.push('Toto');

for (const n of names) {
  console.log(hello());
}
