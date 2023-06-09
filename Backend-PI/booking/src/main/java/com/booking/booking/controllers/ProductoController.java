package com.booking.booking.controllers;

import com.booking.booking.entities.Producto;
import com.booking.booking.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> getAll(){
        List<Producto> productList = productoService.getAll();

        if(productList.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(productList);
    }

    @GetMapping(params = {"ciudad", "fechaInicial", "fechaFinal"})
    public ResponseEntity<List<Producto>> getAll(@RequestParam(required = false) String ciudad, @RequestParam(required = false) LocalDate fechaInicial, @RequestParam(required = false) LocalDate fechaFinal){
        List<Producto> productoList = productoService.getProductosFiltrados(ciudad, fechaInicial, fechaFinal);
        return ResponseEntity.ok(productoList);
    }

    @GetMapping("/recomendado")
    public ResponseEntity<List<Producto>> getByRandom(){
        List<Producto> productList = productoService.getByRandom();

        if(productList.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(productList);
    }

    @GetMapping("/buscar/categoria/{categoriaId}")
    public ResponseEntity<List<Producto>> getByCategoria(@PathVariable String categoriaId){
        List<Producto> productList=productoService.getByCategoria(categoriaId);

        if(productList.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(productList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getOne(@PathVariable Long id){
        Optional<Producto> product = productoService.getOne(id);

        if (product.isPresent()){
            return ResponseEntity.ok(product.get());
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping("/new/product")
    public ResponseEntity<Producto> post(@RequestBody Producto producto){
        if(producto.getNombreClase() != null){
            productoService.post(producto);{
                return ResponseEntity.status(201).body(producto);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping("/all")
    public List<Producto> saveAll(@RequestBody List<Producto> productos){
        return productoService.saveAll(productos);
    }

    @PutMapping
    public ResponseEntity<String> put(@RequestBody Producto producto){
        Optional<Producto> findProduct = productoService.getOne(producto.getId());

        if (findProduct.isPresent()){
            productoService.put(producto);
            return ResponseEntity.status(201).body("Updated the product with ID: "+producto.getId());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("No product with ID: "+producto.getId()+" was found in the database."));
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
}
