package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;


public interface ProductosRepository extends JpaRepository<Producto, Long> {

    @Query("select p from Producto p where p.fechaDisponible = ?1")
    List<Producto> findByfechaDisponible(LocalDate fecha);

    @Query("select p from Producto p where p.entrenador = ?1")
    List<Producto> findByEntrenador(String nombreEntrenador);

    @Query(value = "SELECT p FROM Producto p ORDER BY RAND()")
    List<Producto> findRandomProducto();
}