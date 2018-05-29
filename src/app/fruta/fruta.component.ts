import {Component} from '@angular/core';

@Component({

	selector:'fruta',
	templateUrl:'./fruta.component.html'

})

export class FrutaComponent{

	public nombre_component = 'Componente de fruta';
	public listado_frutas = 'Naranja,manzana,pera y sandia';

	public nombre:string;
	public edad:number;
	public mayorEdad: boolean;
	public trabajos:Array<any> = ['carpintero',22,'fontanero'];
	comodin:any;

	constructor(){

		this.nombre = 'Hugo Martinez';
		this.edad = 28;
		this.mayorEdad = true;
		this.comodin = "SI";
	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(45);
		console.log(this.nombre+" "+this.edad);


		//variables y alcances
		var uno = 8;
		var dos = 15;
	}

	cambiarNombre(){
		this.nombre = 'Goku';
	}

	cambiarEdad(edad){
		this.edad = edad;
	}
}