import { Libro } from './Libros';

export class BibliotecaVirtual {
    
    private Libros: Libro[] = [];

    generateID (){
        const ids = this.Libros.map(e=>e.id)
        if(!ids.length){
            ids.push(0)
        };
        return Math.max(...ids) + 1
    };


    getLibros(): Libro[]{
        return this.Libros;
    };

    createLibro(dataLibro: Libro): void{
        this.Libros.push(dataLibro);

        return console.log(`El libro ${dataLibro.nombre} fue agregado a la biblioteca.`);
    };

    prestarLibro(id: number): void {


        this.Libros = this.Libros.map(e => {
            if(e.id=== id){
                if(!e.prestado){
                    e.prestado = true;
                    e.disponible = false;
                } 
            };
            return e;
        });

        return console.log(`El libro fue prestado`);
    };

    devolverLibro(id: number): void {

        this.Libros = this.Libros.map(e =>{

            if(e.id === id){
                e.prestado = false;
                e.disponible = true;           
            };

            return e;
        });

        return console.log('Libro devuelto');
    }
};

const biblioteca = new BibliotecaVirtual;

const libro1: Libro = {
    id: biblioteca.generateID(),
    autor: 'Elmo',
    nombre: 'Las aventuras de elmo',
    disponible: false,
    prestado: true
};
biblioteca.createLibro(libro1)

const libro2: Libro = {
    id: biblioteca.generateID(),
    autor: 'Mickey',
    nombre: 'Mickeye en el pais de las maravillas',
    disponible: true,
    prestado: false
};

biblioteca.createLibro(libro2);


console.log(biblioteca.getLibros());

biblioteca.prestarLibro(2);

biblioteca.devolverLibro(1);




