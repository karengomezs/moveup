package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductosRepository extends JpaRepository<Producto, Long> {
}
