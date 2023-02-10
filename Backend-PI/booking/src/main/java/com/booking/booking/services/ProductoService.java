package com.booking.booking.services;

import com.booking.booking.entities.Producto;
import com.booking.booking.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private ProductosRepository productosRepository;

    @Autowired
    public ProductoService(ProductosRepository productosRepository){

        this.productosRepository = productosRepository;
    }

    public Producto post (Producto producto){return productosRepository.save(producto);}

    public List<Producto> getAll() {return productosRepository.findAll(); }

    public Optional<Producto> getOne(Long id){ return productosRepository.findById(id);}

    public void put(Producto producto){ productosRepository.save(producto);}

    public void delete (Long id){ productosRepository.deleteById(id);}

    public List<Producto> getByCiudad(String ciudad){
        List<Producto> productoList = productosRepository.findByUbicaciónClase(ciudad);
        return productoList;
    }

    public List<Producto> getRecomendados() {
        String[] propiedades = {"descripcionClase", "ciudadId", "entrenadorId", "nombreClase", "fechaDisponible"};
        int rand = getRandomNumber(0, propiedades.length - 1);
        String propiedad = propiedades[rand];

        return productosRepository.findAll(Sort.by(Sort.Direction.DESC, propiedad));
    }

    public int getRandomNumber(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
