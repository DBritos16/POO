import { Mascota } from './Mascota';

export class Mascotas {

    private Mascotas: Mascota[] = [];


    adoptarMascota(data: Mascota) {
        this.Mascotas.push(data);

        return console.log(`Felicidades, adoptaste a ${data.nombre}`);
    };


    verMascota(nombre: string): Mascota{
        return this.Mascotas.filter(e => e.nombre === nombre)[0];
    }

    verMascotas(): Mascota[]{
        return this.Mascotas;
    }


    jugar(nombre: string): Mascota{
        this.Mascotas = this.Mascotas.map(e=>{
            if(e.nombre === nombre){
                if(e.felicidad < 10){
                    e.felicidad++;
                }
            };
            return e;
        })

        return this.Mascotas.filter(e=> e.nombre=== nombre)[0];
    };

    alimentar(nombre: string): Mascota{
        this.Mascotas = this.Mascotas.map(e => {
            if(e.nombre === nombre){

                if(e.hambre > 0){
                    e.hambre--;
                    if(e.felicidad < 10){
                        e.felicidad++;
                    }
                };
            };

            return e;
        });

        return this.Mascotas.filter(e=> e.nombre=== nombre)[0];
    };
}


const misMascotas = new Mascotas;


const perro: Mascota = {
    nombre: 'Pitufo',
    edad: 1,
    felicidad: 5,
    hambre: 3
};

const gato: Mascota = {
    nombre: 'Michi',
    edad: 2,
    felicidad: 2,
    hambre: 8
}

misMascotas.adoptarMascota(perro);
misMascotas.adoptarMascota(gato);

console.log(misMascotas.verMascotas());

console.log(misMascotas.alimentar('Pitufo'));

console.log(misMascotas.jugar('Michi'));
console.log(misMascotas.alimentar('Michi'));
