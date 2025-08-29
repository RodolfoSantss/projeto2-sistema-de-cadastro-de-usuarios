class Usuario {
    static totalUsuarios = 0

    #ativo

    constructor(nome, email, idade) {
        this.nome = nome
        this.email = email
        this.idade = idade
        Usuario.totalUsuarios++
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(status) {
        if (typeof status === 'boolean') {
            this.#ativo = status
        }
    }

   get boasVindas() {
    return `Bem-vindo, ${this.nome}!`
  }

    mostrarDados() {
        console.log(`Nome: ${this.nome}
Idade: ${this.idade}
Email: ${this.email}
Ativo: ${this.ativo}`)
    }

    static contarUsuarios() {
        console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
  }
}

module.exports = Usuario
