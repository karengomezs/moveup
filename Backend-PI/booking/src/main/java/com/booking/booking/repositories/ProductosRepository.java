package com.booking.booking.repositories;

import com.booking.booking.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;


public interface ProductosRepository extends JpaRepository<Producto, Long> {
   @Query(value = "FROM Producto p WHERE NOT EXISTS "
           + "(SELECT b FROM Reserva b "
           + "WHERE b.producto = p AND "
           + "(b.fechaInicial <= :endDate AND b.fechaFinal >= :startDate))")
    List<Producto> findProductoByFechasDisponibles(LocalDate startDate, LocalDate endDate);

    @Query(value = "FROM Producto p WHERE p.ciudad.id = :ciudadId AND NOT EXISTS "
            + "(SELECT b FROM Reserva b "
            + "WHERE b.producto = p AND "
            + "(b.fechaInicial <= :endDate AND b.fechaFinal >= :startDate))")
    List<Producto> findProductoByFechasDisponiblesAndCiudad(LocalDate startDate, LocalDate endDate, String ciudadId);


    List<Producto> findAllByReservasIsNullAndCiudad_Id(String ciudad);

    List<Producto> findProductoByCiudad_Id(String ciudadId);

    List<Producto> findByEntrenador(String nombreEntrenador);

    @Query(value = "SELECT p FROM Producto p ORDER BY RAND()")
    List<Producto> findRandomProducto();

    @Query(value="SELECT p FROM Producto p JOIN p.categorias c WHERE c.id = ?1")
    List<Producto> findProductoByCategoria(String categoriaId);
}
