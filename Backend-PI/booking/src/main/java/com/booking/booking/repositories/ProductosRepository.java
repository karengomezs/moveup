package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductosRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByUbicaciónClase(String ubicaciónClase);
}