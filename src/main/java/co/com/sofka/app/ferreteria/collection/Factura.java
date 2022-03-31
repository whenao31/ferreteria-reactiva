package co.com.sofka.app.ferreteria.collection;

import co.com.sofka.app.ferreteria.dto.InventarioDTO;
import co.com.sofka.app.ferreteria.model.Persona;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Data
@Document(collection = "facturas")
public class Factura {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);

    private LocalDate fecha;

    private Persona cliente;

    private Persona vendedor;

    private HashMap<String, Long> pedido;

    private Double total;
}
