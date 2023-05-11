//Crear una función que reciba un arreglo de número y retorne el promedio
function promArreglo(vector: number[]): number{
    const s=vector.reduce((total, valor)=>{
        return total+valor;
    },0);

    const prom=s/vector.length;
    return prom;
}
const valVector=[2,4,6,8];
const prom=promArreglo(valVector);
console.log(prom);

//Crear una función que reciba un objeto con propiedades "nombre y apellido", 
//y retorne una cadena con el nombre completo
const nombre= `Marcela `;
const apellido=`Espinoza`; 
const datos={
    nombre:'Marcela',
    apellido: 'Espinoza'
};
function nombreCompleto(objeto: datos):string{
    return `${nombre} ${apellido}`;
}
const nCompleto=nombreCompleto(datos);
console.log(nCompleto);

//Crear una clase rectángulo con propiedades base y altura, y métodos para calcular
//el área y el perímetro 
class rectangulo{
    base: number;
    altura: number;
    constructor(base: number, altura: number){
        this.base=base;
        this.altura=altura;
    }
    Area(): number{
        return this.base*this.altura;
    }
     Perimetro(): number{
        return this.base*2+this.altura*2;
     }
    }
     const Rectangulo= new rectangulo(10,12);
     console.log(Rectangulo.Area());
     console.log(Rectangulo.Perimetro());


