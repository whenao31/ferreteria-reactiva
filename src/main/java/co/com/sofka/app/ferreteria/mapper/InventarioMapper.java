package co.com.sofka.app.ferreteria.mapper;

import co.com.sofka.app.ferreteria.collection.Inventario;
import co.com.sofka.app.ferreteria.dto.InventarioDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class InventarioMapper {

    public Inventario fromDTO(InventarioDTO inventarioDTO){
        return new Inventario(
                inventarioDTO.getId(),
                inventarioDTO.getProducto(),
                inventarioDTO.getCantidad(),
                inventarioDTO.getCantidadMax(),
                inventarioDTO.getCantidadMin(),
                inventarioDTO.getProveedores()
        );
    }

    public InventarioDTO fromCollection(Inventario inventario){
        return new InventarioDTO(
                inventario.getId(),
                inventario.getProducto(),
                inventario.getCantidad(),
                inventario.getCantidadMax(),
                inventario.getCantidadMin(),
                inventario.getProveedores()
        );
    }

    public Mono<InventarioDTO> fromMonoCollection(Mono<Inventario> articulo){
        return articulo.map(this::fromCollection);
    }

    public Flux<InventarioDTO> fromFluxCollection(Flux<Inventario> articulos){
        return articulos.map(item -> fromCollection(item));
    }
}
