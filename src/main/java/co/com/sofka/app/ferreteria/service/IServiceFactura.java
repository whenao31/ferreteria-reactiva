package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import co.com.sofka.app.ferreteria.dto.FacturaIdDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface IServiceFactura {

    Mono<FacturaDTO> save(FacturaDTO facturaDTO);

    Mono<FacturaDTO> findById(String id);

    Flux<FacturaDTO> findAll();

    Mono<FacturaDTO> update(String id, FacturaDTO facturaDTO);

    Mono<FacturaDTO> delete(String id);

    public void restarInventario(String facturaId , FacturaDTO facturaDTO);

    Mono<List<String>> getSortedFacturaIds();
}
