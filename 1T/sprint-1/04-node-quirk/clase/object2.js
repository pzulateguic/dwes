const personas = {
    nombre: 'Pablo'
    apellido: 'Zulategui'
    edad: 24,

    nombreCompleto: () => {
        return `${this.nombre} ${this.apellido}`;
    }
}

personas.nombreCompleto.bind(persona);

console.log(persona.nombreCompleto());