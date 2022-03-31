package co.com.sofka.app.ferreteria.repository;

import co.com.sofka.app.ferreteria.collection.Factura;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface FacturaRepository extends ReactiveMongoRepository<Factura, String> {
}
