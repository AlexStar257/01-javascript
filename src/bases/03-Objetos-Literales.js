
const persona = {
    nombre: 'Alejandro',
    apellido: 'Motta',
    mascota: 'Rocky',
    direccion: {
        ciudad : 'Mazatlán',
        zip : '5513135165',
        lat : '14.65165',
        lng : '34.65165',
    }
};

// console.log(persona.mascota);
// console.log({ persona:persona });

const persona2 = {...persona};
persona2.nombre = 'Ricardo';

console.log(persona);
console.log(persona2);