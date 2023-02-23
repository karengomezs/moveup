package com.booking.booking.services;


import com.booking.booking.entities.Reserva;
import com.booking.booking.repositories.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    private ReservaRepository reservaRepository;

    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva post (Reserva reserva){return reservaRepository.save(reserva);}

    public List<Reserva> saveAll(List<Reserva> reservaList) {return reservaRepository.saveAll(reservaList); }

    public List<Reserva> getAll() {return reservaRepository.findAll();}

    public Optional<Reserva> getOne(Long id){return reservaRepository.findById(id);}

    public void put(Reserva reserva){
        reservaRepository.save(reserva);}

    public void delete(Long id){
        reservaRepository.deleteById(id);}
    public List<LocalDate> getFechasByProducto(String productoId){
        List<Reserva> reservas = reservaRepository.findReservaByProducto_IdAndFechaInicialIsAfterOrFechaFinalIsAfter(productoId, LocalDate.now(),LocalDate.now());
        List<LocalDate> fechas = new ArrayList<>();

        for (Reserva reserva : reservas) {
            for (LocalDate date = reserva.getFechaInicial(); !date.isAfter(reserva.getFechaFinal()); date = date.plusDays(1)) {
                if(date.isAfter(LocalDate.now())){
                    fechas.add(date);
                }
            }
        }

        if(fechas.isEmpty()) {
            return List.of();
        }

        return fechas;
    }

    public Optional<Reserva> getReservasFechas(LocalDate fechaInicial, LocalDate fechaFinal){
        return reservaRepository.findReservaByFechaInicialAndFechaFinal(fechaInicial, fechaFinal);
    }
}
