package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.Transaccion;
import lombok.Data;

import java.util.HashMap;
@Data
public class ProductoDTO {

    private HashMap<String, Long> items;

    private Transaccion transaccion;

    private String productoIdentificacion;

    private String nombreProducto;

    private Double precio;

    private Long cantidad;

    private Long cantidadMaxima;

    private Long cantidadMinima;

    public ProductoDTO() {
    }

    public ProductoDTO(HashMap<String, Long> items, Transaccion transaccion, String idProducto, String nombreProducto, Double precio, Long cantidad, Long cantidadMaxima, Long cantidadMinima) {
        this.items = items;
        this.transaccion = transaccion;
        this.productoIdentificacion = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.cantidadMaxima = cantidadMaxima;
        this.cantidadMinima = cantidadMinima;
    }
}
