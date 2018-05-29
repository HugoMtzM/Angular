import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({

	selector:'empleado',
	templateUrl:'./empleado.component.html'

})

export class EmpleadoComponent{

	public titulo = 'Componente Empelados:';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){

		this.empleado = new Empleado('Hugo Martinez',28,'Desarrollador',true);
		
		this.trabajadores = [
			new Empleado('Hugo Martinez',28,'Desarrollador',true),
			new Empleado('Paco Martinez',23,'Analista',false),
			new Empleado('Luis Martinez',33,'DBA',false),
		];

		this.trabajador_externo = false;
		this.color = 'blue';
		this.color_seleccionado = '#ccc';
	}

	ngOnInit(){

		//console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}