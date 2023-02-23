package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;


public interface ProductosRepository extends JpaRepository<Producto, Long> {
   @Query(value="SELECT p FROM Producto p LEFT JOIN p.reservas r WHERE NOT (( r.fechaInicial BETWEEN :fechaInicial  AND :fechaFinal) OR (r.fechaFinal BETWEEN :fechaInicial AND :fechaFinal))")
    List<Producto> findProductoByReservas(LocalDate fechaInicial, LocalDate fechaFinal);

    @Query(value="SELECT p FROM Producto p LEFT JOIN p.reservas r WHERE p.ciudad.id =:ciudadId AND NOT (( r.fechaInicial BETWEEN :fechaInicial  AND :fechaFinal) OR (r.fechaFinal BETWEEN :fechaInicial AND :fechaFinal))")
    List<Producto> findProductoByReservasAndCiudadId(String ciudadId, LocalDate fechaInicial, LocalDate fechaFinal);

    List<Producto> findAllByReservasIsNull();

    List<Producto> findAllByReservasIsNullAndCiudad_Id(String ciudad);

    List<Producto> findProductoByCiudad_Id(String ciudadId);

    List<Producto> findByEntrenador(String nombreEntrenador);

    @Query(value = "SELECT p FROM Producto p ORDER BY RAND()")
    List<Producto> findRandomProducto();

    @Query(value="SELECT p FROM Producto p JOIN p.categorias c WHERE c.id = ?1")
    List<Producto> findProductoByCategoria(String categoriaId);
}
