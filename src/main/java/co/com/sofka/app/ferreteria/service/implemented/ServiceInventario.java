package co.com.sofka.app.ferreteria.service.implemented;

import co.com.sofka.app.ferreteria.collection.Inventario;
import co.com.sofka.app.ferreteria.dto.InventarioDTO;
import co.com.sofka.app.ferreteria.mapper.InventarioMapper;
import co.com.sofka.app.ferreteria.repository.InventarioRepository;
import co.com.sofka.app.ferreteria.service.IServiceInventario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.stream.Collectors;

@Service
public class ServiceInventario implements IServiceInventario {

    @Autowired
    private InventarioRepository inventarioRepository;

    InventarioMapper mapper = new InventarioMapper();

    @Override
    public Mono<InventarioDTO> save(InventarioDTO inventarioDTO) {
        Inventario inventario = mapper.fromDTO(inventarioDTO);
        return mapper.fromMonoCollection(inventarioRepository.save(inventario));
    }

    @Override
    public Flux<InventarioDTO> findAll() {
        return mapper.fromFluxCollection(inventarioRepository.findAll());
    }

    @Override
    public Mono<InventarioDTO> findById(String idArticulo) {
        return mapper.fromMonoCollection(inventarioRepository.findById(idArticulo));
    }

    @Override
    public Mono<InventarioDTO> update(String idArticulo, InventarioDTO inventarioDTO) {
        return inventarioRepository.findById(idArticulo)
                        .flatMap(articulo -> {
                            inventarioDTO.setId(idArticulo);
                            return this.save(inventarioDTO);
                        })
                        .switchIfEmpty(Mono.empty()
                        );
    }

    @Override
    public Mono<InventarioDTO> delete(String idArticulo) {
        return mapper.fromMonoCollection(inventarioRepository
                .findById(idArticulo)
                .flatMap(a -> inventarioRepository.deleteById(a.getId()).thenReturn(a)));
    }

    @Override
    public Flux<InventarioDTO> findProductosPorProveedor(String proveedorId) {
        return mapper.fromFluxCollection(
                inventarioRepository.findAll()
                        .flatMap(item -> {
                            return item.
                                    getProveedores()
                                    .stream()
                                    .filter(prov -> prov.getId().equals(proveedorId)).count() > 0 ?
                            Mono.just(item) :
                            Mono.empty();
                        })
        );
    }
}
