package co.com.sofka.app.ferreteria.dto;

import co.com.sofka.app.ferreteria.model.Persona;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class InvoiceDTO {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);

    private LocalDate fecha;

    private Persona cliente;

    private Persona vendedor;

    private Long pedido;

    private Double total;

    public InvoiceDTO() {
    }

    public InvoiceDTO(String id, LocalDate fecha, Persona cliente, Persona vendedor, Long pedido, Double total) {
        this.id = id;
        this.fecha = fecha;
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.pedido = pedido;
        this.total = total;
    }
}
