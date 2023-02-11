package com.booking.booking;

import com.booking.booking.entities.Categoria;
import com.booking.booking.services.CategoriaService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BookingApplicationTests {



	@Autowired
	private CategoriaService categoriaService;

	

	@Test
	public void saveCategoria(){
		categoriaService.post(new Categoria("acuatico","agua","ajjjsdsa"));
		Assertions.assertEquals("acuatico", categoriaService.getOne(1l).get().getNombreCategorias());
	}

	@Test
	void contextLoads() {
	}

}
