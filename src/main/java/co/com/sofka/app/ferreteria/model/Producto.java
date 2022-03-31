package co.com.sofka.app.ferreteria.model;

import lombok.Data;

@Data
public class Producto {
    private String nombre;
    private String descripcion;
    private double precio;

    public Producto() {
    }

    public Producto(String nombre, String descripcion, double precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
