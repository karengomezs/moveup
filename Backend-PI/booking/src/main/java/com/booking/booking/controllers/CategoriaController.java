package com.booking.booking.controllers;

import com.booking.booking.entities.Categoria;
import com.booking.booking.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoriaController {

    private CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }





    @GetMapping
    public ResponseEntity<List<Categoria>> getAll(){
        List<Categoria> categoryList = categoriaService.getAll();
        if(categoryList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(categoriaService.getAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> getOne(@PathVariable Long id){
        Optional<Categoria> category = categoriaService.getOne(id);
        if (category.isPresent()){
            return ResponseEntity.ok(category.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Categoria> post(@RequestBody Categoria categoria){
        if(categoria.getNombreCategorias() != null){
            categoriaService.post(categoria);{
                return ResponseEntity.status(201).body(categoria);
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Categoria categoria){
        Optional<Categoria> findCategory = categoriaService.getOne(categoria.getId());
        if (findCategory.isPresent()){
            categoriaService.put(categoria);
            return ResponseEntity.status(201).body("Updated the category with ID: "+ categoria.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No category with ID: "+ categoria.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Categoria> findCategory = categoriaService.getOne(id);
        if(findCategory.isPresent()){
            categoriaService.delete(id);
            return ResponseEntity.ok("The removal of the category with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No category with ID: "+id+" was found in the database.");
        }
    }
}
