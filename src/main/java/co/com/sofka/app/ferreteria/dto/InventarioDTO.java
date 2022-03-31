package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.Producto;
import co.com.sofka.app.ferreteria.model.Proveedor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.UUID;

@Data
public class InventarioDTO {
    private String id = UUID.randomUUID().toString().substring(0, 10);

    @NotBlank
    private Producto producto;

    private Long cantidad;
    @NotBlank
    private Long cantidadMax;
    @NotBlank
    private Long cantidadMin;

    private List<Proveedor> proveedores;

    public InventarioDTO() {
    }

    public InventarioDTO(String id, Producto producto, Long cantidad, Long cantidadMax, Long cantidadMin, List<Proveedor> proveedores) {
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.cantidadMax = cantidadMax;
        this.cantidadMin = cantidadMin;
        this.proveedores = proveedores;
    }
}
