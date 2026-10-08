const usuario2 = {
  perfil: {
    nome: "Maria"
  }
};

const nome = usuario2.perfil?.nome?? "Sem nome";
console.log(nome);


const usuario = {};

const cidade = null;
console.log(cidade || 'Não informada');



const usuario1 = {};

const cidade1 = usuario1.endereco?.cidade1 ?? "Não informada";
console.log(cidade1);


const pedido = {
  cliente: {
    nome: "Pedro"
  }
};

const telefone = pedido.cliente?.telefone ?? "Telefone não informado";
console.log(telefone);





