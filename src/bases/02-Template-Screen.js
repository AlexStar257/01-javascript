

const nombre = 'Alejandro';
const apellido = 'Motta';
// const perro = 'Rocky';

const nombreCompleto = `${nombre} ${apellido}`
// ${perro}
// ${5 + 5}`
;

console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return 'Hola ' + nombreCompleto;
}

console.log('Este es mi mensaje: ' + getSaludo(nombreCompleto));
