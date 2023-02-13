package com.booking.booking.services;

import com.booking.booking.entities.Producto;
import com.booking.booking.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private ProductosRepository productosRepository;

    @Autowired
    public ProductoService(ProductosRepository productosRepository){
        this.productosRepository = productosRepository;
    }

    public List<Producto> saveAll(List<Producto> productos) {return productosRepository.saveAll(productos); }

    public Producto post (Producto producto){
        return productosRepository.save(producto);
    }

    public List<Producto> getAll() {return productosRepository.findAll(); }

    public Optional<Producto> getOne(Long id){ return productosRepository.findById(id);}

    public void put(Producto producto){ productosRepository.save(producto);}

    public void delete (Long id){ productosRepository.deleteById(id);}

    public List<Producto> getByCategoria(String categoriaId){
        return productosRepository.findProductoByCategoria(categoriaId);
    }

    public List<Producto> getProductosFiltrados(String ciudadId, LocalDate fecha){
        if(!ciudadId.isEmpty() && fecha != null){
            return productosRepository.findProductoByCiudad_IdAndFechaDisponible(ciudadId, fecha);
        }

        if (!ciudadId.isEmpty()) {
            return productosRepository.findProductoByCiudad_Id(ciudadId);
        }

        if (fecha != null) {
            return productosRepository.findByFechaDisponible(fecha);
        }

        return List.of();
    }

    public List<Producto> getByEntrenador(String nombreEntrenador){
        return productosRepository.findByEntrenador(nombreEntrenador);
    }

    public List<Producto> getByRandom(){
        return productosRepository.findRandomProducto();
    }
}
