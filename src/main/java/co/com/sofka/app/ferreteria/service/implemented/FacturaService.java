package co.com.sofka.app.ferreteria.service.implemented;

import co.com.sofka.app.ferreteria.collection.AlmacenTransaccion;
import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import co.com.sofka.app.ferreteria.model.Transaccion;
import co.com.sofka.app.ferreteria.repository.AlmacenTransaccionRepository;
import co.com.sofka.app.ferreteria.repository.FacturaRepository;
import co.com.sofka.app.ferreteria.service.IServiceFactura;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class FacturaService implements IServiceFactura {

    @Autowired
    private FacturaRepository facturaRepository;

    @Autowired
    private ServiceInventario serviceInventario;

    @Autowired
    private AlmacenTransaccionRepository transaccionRepository;

    ModelMapper modelMapper= new ModelMapper();

    @Override
    public Mono<FacturaDTO> save(FacturaDTO facturaDTO) {
        return transaccionRepository.save(modelMapper.map(facturaDTO, AlmacenTransaccion.class))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, FacturaDTO.class)));
//        Flux.fromIterable(facturaDTO.getPedido().entrySet())
//                        .map(entry -> {
//                            System.out.println(entry.getKey() + entry.getValue());
//                            return serviceInventario.findById(entry.getKey())
//                                    .map(item -> serviceInventario.update(entry.getKey() ,item)
//                                            .subscribe())
//                                    .subscribe();
//                        }).subscribe();
//        facturaDTO.getPedido()
//                .entrySet()
//                .stream()
//                .forEach(entry -> {
//                    System.out.println(entry.getKey() + entry.getValue());
//                    serviceInventario.findById(entry.getKey())
//                            .map(item -> serviceInventario.update(entry.getKey() ,item));
//                });
//        return facturaRepository.save(modelMapper.map(facturaDTO, Factura.class))
//                .map(factura -> modelMapper.map(factura, FacturaDTO.class));
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
                .filter(tran -> tran.getTransaccion().equals(Transaccion.FACTURA))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, FacturaDTO.class)));
    }

    @Override
    public Mono<FacturaDTO> update(String id, FacturaDTO facturaDTO) {
        return findById(id)
                .flatMap( facturaDTO1 -> {
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
                .filter(tran -> tran.getTransaccion().equals(Transaccion.PRODUCTO))
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


}
