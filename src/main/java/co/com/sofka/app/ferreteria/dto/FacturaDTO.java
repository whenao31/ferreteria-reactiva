package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Data
public class FacturaDTO {

    private String id;

    private String facturaIdentificacion;

    private LocalDate fecha;

    private String nombreCliente;

    private String clienteIdentificacion;

    private String telefonoCliente;

    private String nombreVendedor;

    private Double total;

    private Map<String, Long> items;

    private TransaccionEnum transaccion;
}
