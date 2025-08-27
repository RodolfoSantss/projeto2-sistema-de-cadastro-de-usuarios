class Usuario {
    static totalUsuarios = 0

    #ativo

    constructor(nome, email, senha, ativo) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.#ativo = ativo
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

    mostarDados() {
        console.log(`
            Nome: ${this.nome}
            Idade: ${this.idade}
            Email: ${this.email}
            Ativo: ${this.ativo}
            Total de Usuários: ${Usuario.totalUsuarios}
            =======================`)
    }

    static contarUsuarios() {
        console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
  }
}

module.exports = Usuario