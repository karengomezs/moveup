package com.booking.booking.controllers;

import com.booking.booking.entities.Entrenador;
import com.booking.booking.services.EntrenadorService;
import org.apache.coyote.Response;
import org.hibernate.engine.spi.EntityEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.awt.geom.AffineTransform;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/entrenador")
public class EntrenadorController {
    private EntrenadorService entrenadorService;
    @Autowired

    public EntrenadorController(EntrenadorService entrenadorService) {
        this.entrenadorService = entrenadorService;
    }

    @GetMapping
    public ResponseEntity<List<Entrenador>> getAll(){
        List<Entrenador> trainerList = entrenadorService.getAll();
        if(trainerList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(entrenadorService.getAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entrenador> getOne(@PathVariable Long id){
        Optional<Entrenador> trainer = entrenadorService.getOne(id);
        if (trainer.isPresent()){
            return ResponseEntity.ok(trainer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Entrenador> post(@RequestBody Entrenador entrenador){
        if(entrenador.getDescripcion() != null && entrenador.getNombre() != null && entrenador.getUrl() !=null){
            entrenadorService.post(entrenador);{
                return ResponseEntity.status(201).body(entrenador);
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Entrenador entrenador){
        Optional<Entrenador> findTrainer = entrenadorService.getOne(entrenador.getId());
        if (findTrainer.isPresent()){
            entrenadorService.put(entrenador);
            return ResponseEntity.status(201).body("Updated the trainer with ID: "+entrenador.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No trainer with ID: "+entrenador.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Entrenador> findTrainer = entrenadorService.getOne(id);
        if(findTrainer.isPresent()){
            entrenadorService.delete(id);
            return ResponseEntity.ok("The removal of the trainer with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No trainer with ID: "+id+" was found in the database.");
        }
    }
}
