package co.com.sofka.app.ferreteria.service;

import co.com.sofka.app.ferreteria.collection.Inventario;
import co.com.sofka.app.ferreteria.dto.InventarioDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IServiceInventario {
    Mono<InventarioDTO> save(InventarioDTO inventarioDTO);

    Flux<InventarioDTO> findAll();

    Mono<InventarioDTO> findById(String idArticulo);

    Mono<InventarioDTO> update(String idArticulo, InventarioDTO inventarioDTO);

    Mono<InventarioDTO> delete(String idArticulo);

    Flux<InventarioDTO> findProductosPorProveedor(String proveedorId);
}
