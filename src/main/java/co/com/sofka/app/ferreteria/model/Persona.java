package co.com.sofka.app.ferreteria.model;

import lombok.Data;

@Data
public class Persona {

    private String id;

    private String nombre;

    private String telefono;

    private Rol rol;
}
