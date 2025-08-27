const prompt = require('prompt-sync')()
const Usuario = require('./class/Usuario')

let continuar = true

try {
  while (continuar) {
    const nome = prompt('Digite o nome do usuario: ')
    const idade = parseInt(prompt('Digite a idade do usuario: '), 10)
    const email = prompt('Digite o email do usuario: ')

    let status = prompt('Usuário ativo? [S/N]: ').trim().toUpperCase()
    if (status !== 'S' && status !== 'N') {
      console.log('Dado incorreto!')
      break;
    }

    const usuario = new Usuario(nome, idade, email)
    usuario.ativo = status === 'S'

    usuario.mostrarDados()

    let continuarResposta = prompt('Deseja adicionar outro usuario? [S/N]: ').trim().toUpperCase()
    if (continuarResposta === 'N') {
      continuar = false
      Usuario.contarUsuarios();
    } else if (continuarResposta !== 'S') {
      console.log('Dado incorreto!')
      break;
    }
  }
} catch (error) {
  console.error('Erro', error.message)
}