package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.FacturaDTO;
import co.com.sofka.app.ferreteria.service.implemented.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController(value = "/factura")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @PostMapping
    private ResponseEntity<Mono<FacturaDTO>> save(@RequestBody FacturaDTO facturaDTO){
        return new ResponseEntity<Mono<FacturaDTO>>(facturaService.save(facturaDTO), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<Flux<FacturaDTO>> findAll(){
        return new ResponseEntity<Flux<FacturaDTO>>(facturaService.findAll(), HttpStatus.OK);
    }

}
