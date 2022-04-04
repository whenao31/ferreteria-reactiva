package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import co.com.sofka.app.ferreteria.dto.FacturaIdDTO;
import co.com.sofka.app.ferreteria.service.implemented.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/factura")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @PostMapping
    public ResponseEntity<Mono<FacturaDTO>> save(@RequestBody FacturaDTO facturaDTO){
        return new ResponseEntity<Mono<FacturaDTO>>(facturaService.save(facturaDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Flux<FacturaDTO>> findAll(){
        return new ResponseEntity<Flux<FacturaDTO>>(facturaService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mono<FacturaDTO>> findById(@PathVariable("id") String id){
        return new ResponseEntity<Mono<FacturaDTO>>(facturaService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{idFactura}")
    public Mono<ResponseEntity<FacturaDTO>> update(@PathVariable("idFactura") String idFactura, @RequestBody FacturaDTO facturaDTO){
        return facturaService.update(idFactura, facturaDTO)
                .flatMap(facturaDTO1 -> Mono.just(ResponseEntity.ok(facturaDTO1)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @GetMapping("/factura/sortedIds")
    private ResponseEntity<Mono<List<String>>> getLastId(){
        return new ResponseEntity<Mono<List<String>>>(facturaService.getSortedFacturaIds(), HttpStatus.OK);
    }

}
