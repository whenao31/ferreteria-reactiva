package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.VolanteDTO;
import co.com.sofka.app.ferreteria.service.implemented.VolanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController(value = "/ingreso")
public class VolanteController {

    @Autowired
    private VolanteService volanteService;

    @PostMapping("/volante")
    private ResponseEntity<Mono<VolanteDTO>> saveVolante(@RequestBody VolanteDTO volanteDTO){
        return new ResponseEntity<Mono<VolanteDTO>>(volanteService.save(volanteDTO), HttpStatus.CREATED);
    }

    @GetMapping("/volante")
    private ResponseEntity<Flux<VolanteDTO>> findAllVolantes(){
        return new ResponseEntity<Flux<VolanteDTO>>(volanteService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/volante/{idVolante}")
    private ResponseEntity<Mono<VolanteDTO>> findVolanteById(@PathVariable("idVolante") String idVolante){
        return new ResponseEntity<Mono<VolanteDTO>>(volanteService.findById(idVolante), HttpStatus.OK);
    }

    @PutMapping("/volante/{idVolante}")
    private Mono<ResponseEntity<VolanteDTO>> updateVolante(@PathVariable("idVolante") String idVolante, @RequestBody VolanteDTO volanteDTO){
        return volanteService.update(idVolante, volanteDTO)
                .flatMap(prod -> Mono.just(ResponseEntity.ok(prod)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }
}
