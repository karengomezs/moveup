package com.booking.booking;

import com.booking.booking.entities.Categoria;
import com.booking.booking.entities.Ciudad;
import com.booking.booking.entities.Entrenador;
import com.booking.booking.services.CategoriaService;
import com.booking.booking.services.EntrenadorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BookingApplicationTests {

	@Autowired
	private EntrenadorService entrenadorService;

	@Autowired
	private CategoriaService categoriaService;


	@Test
	public void saveEntrenador(){
		entrenadorService.post(new Entrenador("damian","Entrenador","jajaljdnalskdnaja"));
		Assertions.assertEquals("damian",entrenadorService.getOne(1l).get().getNombre());
	}

	@Test
	public void saveCategoria(){
		categoriaService.post(new Categoria("acuatico","jdfnjdsnf"));
		Assertions.assertEquals("acuatico", categoriaService.getOne(1l).get().getNombreCategorias());
	}

	@Test
	void contextLoads() {
	}

}
