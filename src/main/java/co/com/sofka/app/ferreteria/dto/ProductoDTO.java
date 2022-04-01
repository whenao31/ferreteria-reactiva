package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import lombok.Data;

@Data
public class ProductoDTO {

    private String id;

    private TransaccionEnum transaccion;

    private String productoIdentificacion;

    private String nombreProducto;

    private Double precio;

    private Long cantidad;

    private Long cantidadMaxima;

    private Long cantidadMinima;

    public ProductoDTO() {
    }

    public ProductoDTO(TransaccionEnum transaccion, String idProducto, String nombreProducto, Double precio, Long cantidad, Long cantidadMaxima, Long cantidadMinima) {
        this.transaccion = transaccion;
        this.productoIdentificacion = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.cantidadMaxima = cantidadMaxima;
        this.cantidadMinima = cantidadMinima;
    }
}
