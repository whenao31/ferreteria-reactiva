package co.com.sofka.app.ferreteria.service.implemented;

import co.com.sofka.app.ferreteria.collection.AlmacenTransaccion;
import co.com.sofka.app.ferreteria.dto.FacturaIdDTO;
import co.com.sofka.app.ferreteria.dto.VolanteDTO;
import co.com.sofka.app.ferreteria.dto.VolanteIdDTO;
import co.com.sofka.app.ferreteria.model.TransaccionEnum;
import co.com.sofka.app.ferreteria.repository.AlmacenTransaccionRepository;
import co.com.sofka.app.ferreteria.service.IVolanteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class VolanteService implements IVolanteService {

    @Autowired
    private AlmacenTransaccionRepository transaccionRepository;

    ModelMapper modelMapper = new ModelMapper();


    @Override
    public Mono<VolanteDTO> save(VolanteDTO volanteDTO) {
        return transaccionRepository.save(modelMapper.map(volanteDTO, AlmacenTransaccion.class))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, VolanteDTO.class)));
    }

    @Override
    public Mono<VolanteDTO> findById(String id) {
        return findAll()
                .filter(volante -> volante.getVolanteIdentificacion().equals(id))
                .singleOrEmpty();
    }

    @Override
    public Flux<VolanteDTO> findAll() {
        return transaccionRepository.findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.VOLANTE))
                .flatMap(tran -> Mono.just(modelMapper.map(tran, VolanteDTO.class)));
    }

    @Override
    public Mono<VolanteDTO> update(String id, VolanteDTO volanteDTO) {
        return findById(id)
                .flatMap(volante -> {
                    volanteDTO.setId(volante.getId());
                    volanteDTO.setVolanteIdentificacion(id);
                    return save(volanteDTO);
                });
    }

    @Override
    public Mono<List<String>> getSortedVolanteIds() {
        return findAll()
                .filter(tran -> tran.getTransaccion().equals(TransaccionEnum.VOLANTE))
                .sort((a,b) -> b.getVolanteIdentificacion().compareTo(a.getVolanteIdentificacion()))
                .map(volante -> volante.getVolanteIdentificacion())
                .collectList();
    }
}
