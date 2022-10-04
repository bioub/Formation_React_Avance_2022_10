// Technique d'optimisation :
// Mémoisation (Memoization)
const { memoize } = require('lodash')

let todos = Array.from({ length: 2_000_000 }, () => ({
  id: Math.random(),
  text: String(Math.random()),
  completed: Boolean(Math.random() > 0.5)
}));

// Fonction Pure
// - prédictive (toujours le meme retour en fonction des params)
// - pas de side effect (pas de requete http)
// - pas modifier les paramètres d'entrées
function uncompletedTodos(todos) {
  return todos.filter((t) => !t.completed).length;
}

const uncompletedTodosMemo = memoize(uncompletedTodos);

console.time('uncompletedTodos');
console.log('count:', uncompletedTodosMemo(todos));
console.timeEnd('uncompletedTodos');

console.time('uncompletedTodos');
console.log('count:', uncompletedTodosMemo(todos));
console.timeEnd('uncompletedTodos');

// todos.push({id: 1, text: 'ABC', completed: false})
todos = [...todos, {id: 1, text: 'ABC', completed: false}]

console.time('uncompletedTodos');
console.log('count:', uncompletedTodosMemo(todos));
console.timeEnd('uncompletedTodos');
