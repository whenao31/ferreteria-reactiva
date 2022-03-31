package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.ProductoDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IProductoService {

    Mono<ProductoDTO> save(ProductoDTO productoDTO);

    Mono<ProductoDTO> findById(String id);

    Flux<ProductoDTO> findAll();

    Mono<ProductoDTO> update(String id, ProductoDTO productoDTO);
}
