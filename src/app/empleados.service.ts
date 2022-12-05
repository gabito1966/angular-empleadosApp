
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

    encontrarEmpleado(indice:number) {

        let empleado:Empleado = this.empleados[indice];

        return empleado;

    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado = this.empleados[indice];

        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

    }

    eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
    }

}