package co.com.sofka.app.ferreteria.controller;

import co.com.sofka.app.ferreteria.dto.ProductoDTO;
import co.com.sofka.app.ferreteria.dto.ProductoIdDTO;
import co.com.sofka.app.ferreteria.service.implemented.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/inventario")
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

    @PutMapping("/producto/{idProducto}/add/{cantidad}")
    private Mono<ResponseEntity<ProductoDTO>> addCantidad(@PathVariable("idProducto") String idProducto, @PathVariable("cantidad") Long cantidadSumar){
        return productoService.addCantidad(idProducto, cantidadSumar)
                .flatMap(prod -> Mono.just(ResponseEntity.ok(prod)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @PutMapping("/producto/{idProducto}/subtract/{cantidad}")
    private Mono<ResponseEntity<ProductoDTO>> subtractCantidad(@PathVariable("idProducto") String idProducto, @PathVariable("cantidad") Long cantidadRestar){
        return productoService.subtractCantidad(idProducto, cantidadRestar)
                .flatMap(prod -> Mono.just(ResponseEntity.ok(prod)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

    @GetMapping("/producto/sortedIds")
    private ResponseEntity<Mono<List<String>>> getLastId(){
        return new ResponseEntity<Mono<List<String>>>(productoService.getSortedProductIds(), HttpStatus.OK);
    }
}
