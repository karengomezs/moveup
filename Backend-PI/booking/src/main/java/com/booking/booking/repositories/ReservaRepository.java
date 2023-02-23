package com.booking.booking.repositories;

import com.booking.booking.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findReservaByProducto_IdAndFechaInicialIsAfterOrFechaFinalIsAfter(String productoId, LocalDate fechaUno, LocalDate fechaDos);

    Optional<Reserva> findReservaByFechaInicialAndFechaFinal(LocalDate fechaInicial, LocalDate fechaFinal);
}
