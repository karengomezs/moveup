package com.booking.booking.controllers;

import com.booking.booking.entities.Ciudad;
import com.booking.booking.entities.Imagen;
import com.booking.booking.services.CiudadService;
import com.booking.booking.services.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/imagenes")
@CrossOrigin(origins = "http://localhost:3000")
public class ImagenCotroller {

    private ImagenService imagenService;

    @Autowired
    public ImagenCotroller(ImagenService imagenService) {
        this.imagenService = imagenService;
    }

    @GetMapping
    public ResponseEntity<List<Imagen>> getAll(){
        List<Imagen> imagenList = imagenService.getAll();
        if(imagenList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(imagenService.getAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imagen> getOne(@PathVariable Long id){
        Optional<Imagen> imagen = imagenService.getOne(id);
        if (imagen.isPresent()){
            return ResponseEntity.ok(imagen.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Imagen> post(@RequestBody Imagen imagen){
        if(imagen.getNombre() != null){
            imagenService.post(imagen);{
                return ResponseEntity.status(201).body(imagen);
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/all")
    public List<Imagen> saveAll(@RequestBody List<Imagen> imagenList){
        return imagenService.saveAll(imagenList);
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Imagen imagen){
        Optional<Imagen> findImagen = imagenService.getOne(imagen.getId());
        if (findImagen.isPresent()){
            imagenService.put(imagen);
            return ResponseEntity.status(201).body("Updated the category with ID: "+ imagen.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No category with ID: "+ imagen.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Imagen> findImagen = imagenService.getOne(id);
        if(findImagen.isPresent()){
            imagenService.delete(id);
            return ResponseEntity.ok("The removal of the category with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No category with ID: "+id+" was found in the database.");
        }
    }
}
