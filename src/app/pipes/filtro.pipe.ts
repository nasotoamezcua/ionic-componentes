import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto:string = '', columna:string = ''): any[] {

    if(texto === ''){
      return arreglo;
    }

    if(!arreglo){
      return arreglo;
    }
    
    texto = texto.toLocaleLowerCase();

    //console.log(arreglo);
    //console.log(texto);
    //console.log(columna);
    
    return arreglo.filter(
      item => item[columna].toLocaleLowerCase().includes(texto)
    );
  }

}
