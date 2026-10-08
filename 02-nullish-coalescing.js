const nome = null;
console.log(nome ?? 'Não informado');

const idade = null;

console.log(idade ?? 18);


const estoque = 0;

console.log(estoque ?? 10);

const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

const usuario = {
  apelido: undefined
};

const nomeExibido = usuario.apelido ??"Visitante";
console.log(nomeExibido);








