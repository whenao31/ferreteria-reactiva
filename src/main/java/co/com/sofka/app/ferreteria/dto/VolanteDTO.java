package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.UUID;

@Data
public class VolanteDTO {

    private String id;

    private String volanteIdentificacion = UUID.randomUUID().toString().substring(0, 10);

    private LocalDate fecha;

    private String proveedorIdentificacion;

    private HashMap<String, Long> items;

    private TransaccionEnum transaccion;

    public VolanteDTO() {
    }

    public VolanteDTO(String id, String volanteIdentificacion, LocalDate fecha, String proveedorIdentificacion, HashMap<String, Long> items, TransaccionEnum transaccion) {
        this.id = id;
        this.volanteIdentificacion = volanteIdentificacion;
        this.fecha = fecha;
        this.proveedorIdentificacion = proveedorIdentificacion;
        this.items = items;
        this.transaccion = transaccion;
    }
}
