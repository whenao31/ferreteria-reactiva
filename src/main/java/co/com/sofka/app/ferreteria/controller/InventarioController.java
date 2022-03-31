package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.collection.Inventario;
import co.com.sofka.app.ferreteria.dto.InventarioDTO;
import co.com.sofka.app.ferreteria.service.implemented.ServiceInventario;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

//import java.util.logging.Logger;

@RestController
public class InventarioController {

    @Autowired
    private ServiceInventario serviceInventario;

    @PostMapping("/inventario")
    private ResponseEntity<Mono<InventarioDTO>> save(@RequestBody InventarioDTO inventarioDTO){
        return new ResponseEntity<Mono<InventarioDTO>>(serviceInventario.save(inventarioDTO), HttpStatus.CREATED);
    }

    @GetMapping("/inventario")
    private ResponseEntity<Flux<InventarioDTO>> findAll(){
        return new ResponseEntity<Flux<InventarioDTO>>(serviceInventario.findAll(), HttpStatus.OK);
    }

    @PutMapping("/inventario/{id}")
    private Mono<ResponseEntity<InventarioDTO>> findById(@PathVariable("id")String idArticulo, @RequestBody InventarioDTO articulo){
        return serviceInventario.update(idArticulo, articulo)
                        .flatMap(removedArticulo -> Mono.just(ResponseEntity.ok(removedArticulo)))
                        .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @DeleteMapping("/inventario/{id}")
    private Mono<ResponseEntity<InventarioDTO>> delete(@PathVariable("id") String idArticulo){
        return serviceInventario.delete(idArticulo)
                .flatMap(returnedArticulo -> Mono.just(ResponseEntity.ok(returnedArticulo)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @GetMapping("/inventario/{proveedorId}/proveedor")
    private ResponseEntity<Flux<InventarioDTO>> findArticulosPorProveedor(@PathVariable("proveedorId") String proveedorId){
        return new ResponseEntity<Flux<InventarioDTO>>(serviceInventario.findProductosPorProveedor(proveedorId), HttpStatus.OK);
    }
}
