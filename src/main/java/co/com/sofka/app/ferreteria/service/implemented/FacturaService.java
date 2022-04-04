package co.com.sofka.app.ferreteria.service.implemented;

import co.com.sofka.app.ferreteria.collection.AlmacenTransaccion;
import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import co.com.sofka.app.ferreteria.dto.FacturaIdDTO;
import co.com.sofka.app.ferreteria.dto.ProductoIdDTO;
import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import co.com.sofka.app.ferreteria.repository.AlmacenTransaccionRepository;
import co.com.sofka.app.ferreteria.service.IServiceFactura;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class FacturaService implements IServiceFactura {

    @Autowired
    private AlmacenTransaccionRepository transaccionRepository;

    ModelMapper modelMapper= new ModelMapper();

    @Override
    public Mono<FacturaDTO> save(FacturaDTO facturaDTO) {
        return transaccionRepository.save(modelMapper.map(facturaDTO, AlmacenTransaccion.class))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, FacturaDTO.class)));
    }

    @Override
    public Mono<FacturaDTO> findById(String id) {
        return findAll()
                .filter(facturaDTO1 -> facturaDTO1.getFacturaIdentificacion().equals(id))
                .singleOrEmpty();
    }

    @Override
    public Flux<FacturaDTO> findAll() {
        return transaccionRepository.findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.FACTURA))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, FacturaDTO.class)));
    }

    @Override
    public Mono<FacturaDTO> update(String id, FacturaDTO facturaDTO) {
        return findById(id)
                .flatMap( facturaDTO1 -> {
                    facturaDTO.setId(facturaDTO1.getId());
                    facturaDTO.setFacturaIdentificacion(id);
                    return save(facturaDTO);
                });
    }

    @Override
    public Mono<FacturaDTO> delete(String id) {
        return null;
    }

    @Override
    public void restarInventario(String facturaId , FacturaDTO facturaDTO){

        transaccionRepository.findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.PRODUCTO))
                .flatMap(tran -> {
                    var firstOfMap = facturaDTO.
                            getItems().entrySet().stream().findFirst().get();
                    if (tran.getProductoIdentificacion().equals(firstOfMap.getKey())){
                        tran.restarCantidad(firstOfMap.getValue());
                        transaccionRepository.save(tran);
                    }
                    return Mono.just(tran);
                });
    }

    @Override
    public Mono<List<String>> getSortedFacturaIds() {
        return findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.FACTURA))
                .sort((a,b) -> b.getFacturaIdentificacion().compareTo(a.getFacturaIdentificacion()))
                .map(factura -> factura.getFacturaIdentificacion())
                .collectList();
    }


}
