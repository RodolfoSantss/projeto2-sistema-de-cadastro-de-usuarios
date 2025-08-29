const prompt = require('prompt-sync')()
const Usuario = require('./class/Usuario')

let continuar = true
let usuarios = []

while (continuar) {
  const nome = prompt('Digite o nome do usuario: ')
  const idade = parseInt(prompt('Digite a idade do usuario: '), 10)
  const email = prompt('Digite o email do usuario: ')
  let status = prompt('Usuário ativo? [S/N]: ').trim().toUpperCase()
  if (status !== 'S' && status !== 'N') {
    console.log('Dado incorreto!')
  }

  const usuario = new Usuario(nome, email, idade)
  if(status == "S") {
    usuario.ativo = true
  } else if (status == "N") {
    usuario.ativo = false
  }

  usuarios.push(usuario)

  let continuarResposta = prompt('Deseja adicionar outro usuario? [S/N]: ').trim().toUpperCase()
  if (continuarResposta === 'N') {
    continuar = false
    Usuario.contarUsuarios();
  } else if (continuarResposta !== 'S') {
    console.log('Dado incorreto!')
    break;
   }
 
}

for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].boasVindas)
  usuarios[i].mostrarDados()

  if(usuarios[i+1] !== undefined){
    console.log("==========================")
  }
}
Usuario.contarUsuarios()
