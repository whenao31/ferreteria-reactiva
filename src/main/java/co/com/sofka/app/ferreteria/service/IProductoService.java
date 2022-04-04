package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.dto.ProductoDTO;
import co.com.sofka.app.ferreteria.dto.ProductoIdDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface IProductoService {

    Mono<ProductoDTO> save(ProductoDTO productoDTO);

    Mono<ProductoDTO> findById(String id);

    Flux<ProductoDTO> findAll();

    Mono<ProductoDTO> update(String id, ProductoDTO productoDTO);

    Mono<ProductoDTO> addCantidad(String id, Long cantidadSumar);

    Mono<ProductoDTO> subtractCantidad(String id, Long cantidadRestar);

    Mono<List<String>> getSortedProductIds();
}
