import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService){};

  empleados:Empleado[]=[

    new Empleado('Gabriel', 'García', 'presidente', 15000),
    new Empleado('Mabel', 'Vizgarra', 'Gerente', 13500),
    new Empleado('Federico', 'Guiance','Jefe de sector', 8500),
    new Empleado('Diego', 'Mereles', 'Administrativo', 5600)
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleados.push(miEmpleado);
  }

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

}
