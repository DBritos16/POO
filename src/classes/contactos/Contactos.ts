import { contacto } from "./contacto.interface";

export class Contactos {

    private Contactos: contacto[] = [];


    nuevoContacto(data: contacto): void{
        this.Contactos.push(data);

        return console.log(`Has agredado a ${data.nombre} a tu lista de contactos`);
    };

    verContactos(): contacto[] {
        return this.Contactos;
    };

    buscarContacto(nombre: string):contacto{
        return this.Contactos.filter(e => e.nombre == nombre)[0];
    };

    eliminarContacto(telefono: number): void {
        this.Contactos = this.Contactos.filter( e => e.telefono !== e.telefono);

        return console.log(`El contacto ${telefono} fue eliminado`);
    };
};


const listaContactos = new Contactos;

const nahuel: contacto = {
    nombre: 'Nahuel',
    email: 'marcelo2023@gmail.com',
    telefono: 3704112233
};
const guille: contacto = {
    nombre: 'Guille',
    email: 'guillexcz@hotmail.com',
    telefono: 3718992233
};
const nico: contacto = {
    nombre: 'Nico',
    email: 'nicolis@gmail.com',
    telefono: 3705445511
};;

listaContactos.nuevoContacto(nahuel);
listaContactos.nuevoContacto(guille);
listaContactos.nuevoContacto(nico);

console.log(listaContactos.verContactos());

console.log(listaContactos.buscarContacto('Nico'));

listaContactos.eliminarContacto(3705445511);

