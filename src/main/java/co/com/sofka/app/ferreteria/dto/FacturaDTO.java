package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.Transaccion;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashMap;

@Data
public class FacturaDTO {

    private String facturaIdentificacion;

    private LocalDate fecha;

    private String nombreCliente;

    private String clienteIdentificacion;

    private String telefonoCliente;

    private String nombreVendedor;

    private Double total;

    private HashMap<String, Long> items;

    private Transaccion transaccion;
}
