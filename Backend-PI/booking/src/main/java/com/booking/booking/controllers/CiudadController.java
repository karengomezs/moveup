package com.booking.booking.controllers;

import com.booking.booking.entities.Categoria;
import com.booking.booking.entities.Ciudad;
import com.booking.booking.services.CategoriaService;
import com.booking.booking.services.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ciudad")
@CrossOrigin(origins = "http://localhost:3000")

public class CiudadController {

    private CiudadService ciudadService;

    @Autowired
    public CiudadController(CiudadService ciudadService) {
        this.ciudadService = ciudadService;
    }

    @GetMapping
    public ResponseEntity<List<Ciudad>> getAll(){
        List<Ciudad> ciudadList = ciudadService.getAll();
        if(ciudadList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(ciudadService.getAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> getOne(@PathVariable Long id){
        Optional<Ciudad> ciudad = ciudadService.getOne(id);
        if (ciudad.isPresent()){
            return ResponseEntity.ok(ciudad.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Ciudad> post(@RequestBody Ciudad ciudad){
        if(ciudad.getNombreCiudad() != null){
            ciudadService.post(ciudad);{
                return ResponseEntity.status(201).body(ciudad);
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Ciudad ciudad){
        Optional<Ciudad> findCiudad = ciudadService.getOne(ciudad.getId());
        if (findCiudad.isPresent()){
            ciudadService.put(ciudad);
            return ResponseEntity.status(201).body("Updated the category with ID: "+ ciudad.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No category with ID: "+ ciudad.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Ciudad> findCiudad = ciudadService.getOne(id);
        if(findCiudad.isPresent()){
            ciudadService.delete(id);
            return ResponseEntity.ok("The removal of the category with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No category with ID: "+id+" was found in the database.");
        }
    }
}
