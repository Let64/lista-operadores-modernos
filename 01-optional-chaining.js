const aluno = {
  nome: "Carlos",
  endereco: {
    cidade: "São Paulo"
  }
};

console.log("Cidade:", aluno.endereco?.cidade);

const usuario = {
  nome: "Ana"
};

console.log(usuario.endereco?.rua);


const cliente = {
  nome: "João"
};

console.log(cliente.endereco?.cidade);

const escola = {
  diretor: {
    contato: {
      email: "diretor@escola.com"
    }
  }
};

console.log("Email Diretor:",escola.diretor?.contato?.email);




