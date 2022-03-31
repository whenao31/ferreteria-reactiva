package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.VolanteDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IVolanteService {

    Mono<VolanteDTO> save(VolanteDTO volanteDTO);

    Mono<VolanteDTO> findById(String id);

    Flux<VolanteDTO> findAll();

    Mono<VolanteDTO> update(String id, VolanteDTO volanteDTO);
}
