package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IServiceFactura {

    Mono<FacturaDTO> save(FacturaDTO facturaDTO);

    Mono<FacturaDTO> findById(String id);

    Flux<FacturaDTO> findAll();

    Mono<FacturaDTO> update(String id, FacturaDTO facturaDTO);

    Mono<FacturaDTO> delete(String id);

    public void restarInventario(String facturaId , FacturaDTO facturaDTO);
}
