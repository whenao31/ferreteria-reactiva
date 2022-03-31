package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.ProductoDTO;
import co.com.sofka.app.ferreteria.service.implemented.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController(value = "/api")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @PostMapping("/producto")
    private ResponseEntity<Mono<ProductoDTO>> saveProducto(@RequestBody ProductoDTO productoDTO){
        return new ResponseEntity<Mono<ProductoDTO>>(productoService.save(productoDTO), HttpStatus.CREATED);
    }

    @GetMapping("/producto")
    private ResponseEntity<Flux<ProductoDTO>> findAllProductos(){
        return new ResponseEntity<Flux<ProductoDTO>>(productoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/producto/{idProducto}")
    private ResponseEntity<Mono<ProductoDTO>> findProductoById(@PathVariable("idProducto") String idProducto){
        return new ResponseEntity<Mono<ProductoDTO>>(productoService.findById(idProducto), HttpStatus.OK);
    }

    @PutMapping("/producto/{idProducto}")
    private Mono<ResponseEntity<ProductoDTO>> updateProducto(@PathVariable("idProducto") String idProducto, @RequestBody ProductoDTO productoDTO){
        return productoService.update(idProducto, productoDTO)
                .flatMap(prod -> Mono.just(ResponseEntity.ok(prod)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }


}
