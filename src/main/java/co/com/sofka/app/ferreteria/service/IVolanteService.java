package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.FacturaIdDTO;
import co.com.sofka.app.ferreteria.dto.VolanteDTO;
import co.com.sofka.app.ferreteria.dto.VolanteIdDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface IVolanteService {

    Mono<VolanteDTO> save(VolanteDTO volanteDTO);

    Mono<VolanteDTO> findById(String id);

    Flux<VolanteDTO> findAll();

    Mono<VolanteDTO> update(String id, VolanteDTO volanteDTO);

    Mono<List<String>> getSortedVolanteIds();
}
