package co.com.sofka.app.ferreteria.collection;

import co.com.sofka.app.ferreteria.model.Transaccion;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.UUID;

@Data
@Document(collection = "stock")
public class AlmacenTransaccion {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);

    private HashMap<String, Long> items;

    private Transaccion transaccion;

    //Campos Producto
    private String productoIdentificacion;

    private String nombreProducto;

    private Double precio;

    private Long cantidad;

    private Long cantidadMaxima;

    private Long cantidadMinima;

//    Campos Factura
    private String facturaIdentificacion;

    private LocalDate fecha;

    private String nombreCliente;

    private String clienteIdentificacion;

    private String telefonoCliente;

    private String nombreVendedor;

    private Double total;

//    Campos Voolante
    private  String volanteIdentificacion;

    private String nombreProveedor;

    private String proveedorIdentificacion;

    public AlmacenTransaccion() {
    }

    public AlmacenTransaccion(String id, HashMap<String, Long> items, Transaccion transaccion, String idProducto, String nombreProducto, Double precio, Long cantidad, Long cantidadMaxima, Long cantidadMinima, String idFactura, LocalDate fecha, String nombreCliente, String idCliente, String telefonoCliente, String nombreVendedor, Double total, String idVolante, String nombreProveedor, String idProveedor) {
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

    public String restarCantidad(Long cantidadRestar){
        if ( this.cantidad - cantidadRestar >= 0){
            this.cantidad = this.cantidad - cantidadRestar;
            return "resta exitosa";
        }
        return "no hay suficiente stock";
    }
}
