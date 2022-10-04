function bonjour(prenom: string) {
  return `Bonjour ${prenom.toUpperCase()}`;
}

const prenoms = ['Toto', 'Titi', 'Tata', 12];

for (const p of prenoms) {
  console.log(bonjour(p));
}
