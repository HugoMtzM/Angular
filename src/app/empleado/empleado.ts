export class Empleado{
	/*
	public nombre:string;
	public edad:number;

	contructor(nombre,edad){
		this.nombre = nombre;
		this.edad = edad;
	}
	*/
	constructor(
		public nombre:string,
		public edad:number,
		public cargo:string,
		public contratado:boolean
	){}
}