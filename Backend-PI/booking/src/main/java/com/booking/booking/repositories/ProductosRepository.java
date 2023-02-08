package com.booking.booking.repositories;

import com.booking.booking.entities.Ciudad;
import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductosRepository extends JpaRepository<Producto, Long> {

    Optional<List<Producto>> findByCiudad(String nombre);
}
