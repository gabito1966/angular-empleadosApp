
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Injectable()
export class EmpleadosService {

    constructor(private ServicioVentanaEmergente:ServicioEmpleadosService){}

    empleados:Empleado[]=[

        new Empleado('Gabriel', 'García', 'presidente', 15000),
        new Empleado('Mabel', 'Vizgarra', 'Gerente', 13500),
        new Empleado('Federico', 'Guiance','Jefe de sector', 8500),
        new Empleado('Diego', 'Mereles', 'Administrativo', 5600)
    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.ServicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" 
        + empleado.nombre + " " + empleado.apellido + "\n" + "Salario: " + empleado.salario)

        this.empleados.push(empleado)


    }

}