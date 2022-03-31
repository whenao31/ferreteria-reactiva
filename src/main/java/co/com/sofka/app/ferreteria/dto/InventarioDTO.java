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

    private Producto producto;

    private Long cantidad;

    private Long cantidadMax;

    private Long cantidadMin;

    private List<String> proveedores;

    public InventarioDTO() {
    }

    public InventarioDTO(String id, Producto producto, Long cantidad, Long cantidadMax, Long cantidadMin, List<String> proveedores) {
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.cantidadMax = cantidadMax;
        this.cantidadMin = cantidadMin;
        this.proveedores = proveedores;
    }

    public Boolean restar(Long cantidadSustraer){
        if (this.cantidad - cantidadSustraer >= 0){
            this.cantidad = this.cantidad - cantidadSustraer;
            return true;
        }
        throw new IllegalArgumentException("No hay suficiente cantidad!");
    }

    public Boolean sumar(Long cantidadSumar){
        if (this.cantidad + cantidadSumar > this.cantidadMax){
            this.cantidad = this.cantidad + cantidadSumar;
            return true;
        }
        throw new IllegalArgumentException("Se sobrepasa al maximo en stock!");
    }
}
