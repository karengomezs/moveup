package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;


public interface ProductosRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByFechaDisponible(LocalDate fecha);

    List<Producto> findByEntrenador(String nombreEntrenador);

    @Query(value = "SELECT p FROM Producto p ORDER BY RAND()")
    List<Producto> findRandomProducto();

    List<Producto> findProductoByCiudad_Id(String ciudadId);

    @Query(value="SELECT p FROM Producto p INNER JOIN Categoria c ON p.id = c.id WHERE c.id = ?1")
    List<Producto> findProductoByCategoria(String categoriaId);
}
