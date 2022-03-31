package co.com.sofka.app.ferreteria.repository;

import co.com.sofka.app.ferreteria.collection.Inventario;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface InventarioRepository extends ReactiveMongoRepository<Inventario, String> {
}
