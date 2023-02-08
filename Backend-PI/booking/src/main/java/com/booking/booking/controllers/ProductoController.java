package com.booking.booking.controllers;

import com.booking.booking.entities.Producto;
import com.booking.booking.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductoController {
    private ProductoService productoService;
    @Autowired

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public ResponseEntity<List<Producto>> getAll(){
        List<Producto> productList = productoService.getAll();
        if(productList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(productoService.getAll());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getOne(@PathVariable Long id){
        Optional<Producto> product = productoService.getOne(id);
        if (product.isPresent()){
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Producto> post(@RequestBody Producto producto){
        if(producto.getNombreClase() != null && producto.getNombreClase() != null){
            productoService.post(producto);{
                return ResponseEntity.status(201).body(producto);
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Producto producto){
        Optional<Producto> findProduct = productoService.getOne(producto.getId());
        if (findProduct.isPresent()){
            productoService.put(producto);
            return ResponseEntity.status(201).body("Updated the product with ID: "+producto.getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No product with ID: "+producto.getId()+" was found in the database."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<Producto> findProduct = productoService.getOne(id);
        if(findProduct.isPresent()){
            productoService.delete(id);
            return ResponseEntity.ok("The removal of the product with the ID: "+id+" has been successfully completed.");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No product with ID: "+id+" was found in the database.");
        }
    }

    @GetMapping("/{nombre}")
    public ResponseEntity<List<Producto>> getByCity(@PathVariable String nombre){
        Optional<List<Producto>> productList = productoService.getByCiudad(nombre);
        if(productList.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(productoService.getAll());
        }
    }
}
