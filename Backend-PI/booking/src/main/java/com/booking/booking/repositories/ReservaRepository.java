package com.booking.booking.repositories;

import com.booking.booking.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query(value = "SELECT r FROM Reserva r JOIN r.producto p WHERE p.id = :productoId AND (r.fechaInicial >= :fechaInicial OR r.fechaFinal >= :fechaFinal)")
    List<Reserva> findReservaByProducto_Id(String productoId, LocalDate fechaInicial, LocalDate fechaFinal);

    Optional<Reserva> findReservaByFechaInicialAndFechaFinal(LocalDate fechaInicial, LocalDate fechaFinal);

    @Query(value = "SELECT r FROM Reserva r JOIN FETCH r.producto WHERE r.usuario.id = :usuarioId")
    List<Reserva> findReservaByUsuario_Id(String usuarioId);
}
