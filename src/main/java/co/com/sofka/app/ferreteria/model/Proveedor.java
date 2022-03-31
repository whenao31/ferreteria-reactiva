package co.com.sofka.app.ferreteria.model;

import lombok.Data;

import java.util.UUID;

@Data
public class Proveedor {

    private String id;
    private String nombre;

    public Proveedor() {
    }

    public Proveedor(String id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
