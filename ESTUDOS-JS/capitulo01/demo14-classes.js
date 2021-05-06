class Heroi {
    atacar(){
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor!

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade 
    }

    atacar() {
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}
const heroi2 = new Heroi2(
    `Flash`, 80
)
heroi2.atacar()


class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 -idade 
    } 
}
const anoNascimento = Heroi3.obterAnoNascimento(19)
console.log(
    `O ano de nascimento do Heroi é ${anoNascimento}`
)


class Hero {
    constructor(name, years, force){
        this.name = name,
        this.years = years,
        this.force = force
    }

    attack(value) {
        let damage = this.force * value
        console.log(`${this.name}'s attack took ${damage} of damage`)
    }
}

const newHero = new Hero("Herkul", 173, 4)
newHero.attack(150)
