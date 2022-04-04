package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.VolanteDTO;
import co.com.sofka.app.ferreteria.service.implemented.VolanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/volante")
public class VolanteController {

    @Autowired
    private VolanteService volanteService;

    @PostMapping
    private ResponseEntity<Mono<VolanteDTO>> saveVolante(@RequestBody VolanteDTO volanteDTO){
        return new ResponseEntity<Mono<VolanteDTO>>(volanteService.save(volanteDTO), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<Flux<VolanteDTO>> findAllVolantes(){
        return new ResponseEntity<Flux<VolanteDTO>>(volanteService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{idVolante}")
    private ResponseEntity<Mono<VolanteDTO>> findVolanteById(@PathVariable("idVolante") String idVolante){
        return new ResponseEntity<Mono<VolanteDTO>>(volanteService.findById(idVolante), HttpStatus.OK);
    }

    @PutMapping("/{idVolante}")
    private Mono<ResponseEntity<VolanteDTO>> updateVolante(@PathVariable("idVolante") String idVolante, @RequestBody VolanteDTO volanteDTO){
        return volanteService.update(idVolante, volanteDTO)
                .flatMap(prod -> Mono.just(ResponseEntity.ok(prod)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @GetMapping("/volante/sortedIds")
    private ResponseEntity<Mono<List<String>>> getLastId(){
        return new ResponseEntity<Mono<List<String>>>(volanteService.getSortedVolanteIds(), HttpStatus.OK);
    }
}
