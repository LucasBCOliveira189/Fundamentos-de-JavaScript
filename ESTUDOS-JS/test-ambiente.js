console.log("Olá Mundo!");

const animal = {
    _idade: '123',

    set idade(valor) {
        this._idade = valor
    }
}

animal._idade = 10
console.log(animal._idade)