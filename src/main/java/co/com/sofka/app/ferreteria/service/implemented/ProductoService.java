package co.com.sofka.app.ferreteria.service.implemented;

import co.com.sofka.app.ferreteria.collection.AlmacenTransaccion;
import co.com.sofka.app.ferreteria.dto.ProductoDTO;
import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import co.com.sofka.app.ferreteria.repository.AlmacenTransaccionRepository;
import co.com.sofka.app.ferreteria.service.IProductoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    private AlmacenTransaccionRepository transaccionRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public Mono<ProductoDTO> save(ProductoDTO productoDTO){
        return transaccionRepository.save(modelMapper.map(productoDTO, AlmacenTransaccion.class))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, ProductoDTO.class)));
    }

    @Override
    public Mono<ProductoDTO> findById(String id) {
        return findAll()
                .filter(prod -> prod.getProductoIdentificacion().equals(id))
                .singleOrEmpty();
    }

    @Override
    public Flux<ProductoDTO> findAll() {
        return transaccionRepository.findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.PRODUCTO))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, ProductoDTO.class)));
    }

    @Override
    public Mono<ProductoDTO> update(String id, ProductoDTO productoDTO) {
        return findById(id)
                .flatMap(prod -> {
                    productoDTO.setProductoIdentificacion(id);
                    return save(productoDTO);
                });
    }
}
