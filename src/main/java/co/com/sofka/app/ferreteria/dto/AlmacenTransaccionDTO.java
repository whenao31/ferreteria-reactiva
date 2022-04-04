package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Data
public class AlmacenTransaccionDTO {

    private String id = UUID.randomUUID().toString().substring(0, 10);

    private Map<String, Long> items;

    private TransaccionEnum transaccion;

    private LocalDate fecha;

    private Double precio;

    //Campos Producto
    private String productoIdentificacion;

    private String nombreProducto;

    private Long cantidad;

    private Long cantidadMaxima;

    private Long cantidadMinima;

    //    Campos Factura
    private String facturaIdentificacion;

    private String nombreCliente;

    private String clienteIdentificacion;

    private String telefonoCliente;

    private String nombreVendedor;

    private Double total;

    //    Campos Voolante
    private  String volanteIdentificacion;

    private String nombreProveedor;

    private String proveedorIdentificacion;

    public AlmacenTransaccionDTO() {
    }

    public AlmacenTransaccionDTO(String id, Map<String, Long> items, TransaccionEnum transaccion, String idProducto, String nombreProducto, Double precio, Long cantidad, Long cantidadMaxima, Long cantidadMinima, String idFactura, LocalDate fecha, String nombreCliente, String idCliente, String telefonoCliente, String nombreVendedor, Double total, String idVolante, String nombreProveedor, String idProveedor) {
        this.id = id;
        this.items = items;
        this.transaccion = transaccion;
        this.productoIdentificacion = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.cantidadMaxima = cantidadMaxima;
        this.cantidadMinima = cantidadMinima;
        this.facturaIdentificacion = idFactura;
        this.fecha = fecha;
        this.nombreCliente = nombreCliente;
        this.clienteIdentificacion = idCliente;
        this.telefonoCliente = telefonoCliente;
        this.nombreVendedor = nombreVendedor;
        this.total = total;
        this.volanteIdentificacion = idVolante;
        this.nombreProveedor = nombreProveedor;
        this.proveedorIdentificacion = idProveedor;
    }
}
