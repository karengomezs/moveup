package com.booking.booking.controllers;

import com.booking.booking.entities.Reserva;
import com.booking.booking.security.services.AuthenticationService;
import com.booking.booking.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
// @CrossOrigin
@RequestMapping("/api/reservas")
public class ReservaController {
    private final ReservaService reservaService;

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> getAll(){
        List<Reserva> reservaList = reservaService.getAll();
        if(reservaList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(reservaService.getAll());
        }
    }

    @GetMapping(params = {"usuarioId"})
    public ResponseEntity<List<Reserva>> getReservasUsuarioId(@RequestParam(required = false) String usuarioId){
        List<Reserva> reservaList = reservaService.getReservasUsuario(usuarioId);

        return ResponseEntity.ok(reservaList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> getOne(@PathVariable Long id){
        Optional<Reserva> reserva = reservaService.getOne(id);
        if (reserva.isPresent()){
            return ResponseEntity.ok(reserva.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar/producto/{productoId}")
    public ResponseEntity<List<LocalDate>> getByProducto(@PathVariable String productoId){
        List<LocalDate> reservaList=reservaService.getFechasByProducto(productoId);

        return ResponseEntity.ok(reservaList);
    }

//    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping
    public ResponseEntity<Reserva> post(@RequestBody Reserva reserva){
        Optional<Reserva> reservaNoDisponible = reservaService.getReservasFechas(reserva.getFechaInicial(), reserva.getFechaFinal());

        if (reservaNoDisponible.isPresent()){
            return ResponseEntity.notFound().build();
        }else {
            if(reserva.getFechaInicial() != null){
                Boolean cityUpdated = authenticationService.updateCity(reserva.getUsuario().getId(), reserva.getUsuario().getCiudad());

                if(cityUpdated) {
                    reservaService.post(reserva);
                }
            }
            return ResponseEntity.status(201).body(reserva);
        }
    }

    @PostMapping("/all")
    public List<Reserva> saveAll(@RequestBody List<Reserva> reservaList){
        return reservaService.saveAll(reservaList);
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Reserva reserva){
        Optional<Reserva> findReserve = reservaService.getOne(reserva.getId());
        if (findReserve.isPresent()){
            reservaService.put(reserva);
            return ResponseEntity.status(201).body("Updated the reserve with ID: "+ reserva.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No reserve with ID: "+ reserva.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Reserva> findReserve = reservaService.getOne(id);
        if(findReserve.isPresent()){
            reservaService.delete(id);
            return ResponseEntity.ok("The removal of the reserve with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No reserve with ID: "+id+" was found in the database.");
        }
    }
}
