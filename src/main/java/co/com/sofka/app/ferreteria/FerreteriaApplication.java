package co.com.sofka.app.ferreteria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableReactiveMongoRepositories
public class FerreteriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FerreteriaApplication.class, args);
	}

}
