package co.com.sofka.app.ferreteria.repository;

import co.com.sofka.app.ferreteria.collection.AlmacenTransaccion;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface AlmacenTransaccionRepository extends ReactiveMongoRepository<AlmacenTransaccion,String> {
}
