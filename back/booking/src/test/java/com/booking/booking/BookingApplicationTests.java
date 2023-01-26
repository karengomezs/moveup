package com.booking.booking;

import com.booking.booking.entities.Entrenador;
import com.booking.booking.services.EntrenadorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class BookingApplicationTests {

	@Autowired
	private EntrenadorService entrenadorService;


	@Test
	public void saveEntrenador(){
		entrenadorService.post(new Entrenador("damian","Entrenador","jajaljdnalskdnaja"));
		Assertions.assertEquals("damian",entrenadorService.getOne(1l).get().getNombre());
	}

	@Test
	void contextLoads() {
	}

}
