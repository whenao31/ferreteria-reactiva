package co.com.sofka.app.ferreteria.collection;

import co.com.sofka.app.ferreteria.model.Producto;
import co.com.sofka.app.ferreteria.model.Proveedor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Document(collection = "inventario")
public class Inventario {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);

    private Producto producto;

    private Long cantidad;

    private Long cantidadMax;

    private Long cantidadMin;

    private List<String> proveedores;

    public Inventario() {
    }

    public Inventario(String id, Producto producto, Long cantidad, Long cantidadMax, Long cantidadMin, List<String> proveedores) {
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.cantidadMax = cantidadMax;
        this.cantidadMin = cantidadMin;
        this.proveedores = proveedores;
    }
}
