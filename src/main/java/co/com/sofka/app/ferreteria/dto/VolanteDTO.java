package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.Transaccion;
import lombok.Data;

import java.util.HashMap;
import java.util.UUID;

@Data
public class VolanteDTO {

    private String volanteIdentificacion = UUID.randomUUID().toString().substring(0, 10);

    private String nombreProveedor;

    private String proveedorIdentificacion;

    private HashMap<String, Long> items;

    private Transaccion transaccion;

    public VolanteDTO() {
    }

    public VolanteDTO(String idVolante, String nombreProveedor, String idProveedor, HashMap<String, Long> items, Transaccion transaccion) {
        this.volanteIdentificacion = idVolante;
        this.nombreProveedor = nombreProveedor;
        this.proveedorIdentificacion = idProveedor;
        this.items = items;
        this.transaccion = transaccion;
    }
}
