package com.booking.booking.services;

import com.booking.booking.entities.Producto;
import com.booking.booking.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Stream;

@Service
public class ProductoService {
    private ProductosRepository productosRepository;

    @Autowired
    public ProductoService(ProductosRepository productosRepository) {
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

    public List<Producto> getProductosFiltrados(String ciudadId, LocalDate fechaInicial, LocalDate fechaFinal){
        Boolean isValidCiudad = !ciudadId.isEmpty();
        Boolean isValidDates = fechaInicial != null && fechaFinal != null;

        if(isValidCiudad && isValidDates){
            List<Producto> listUno = productosRepository.findAllByReservasIsNullAndCiudad_Id(ciudadId);
            List<Producto> listDos = productosRepository.findProductoByReservasAndCiudadId(ciudadId, fechaInicial, fechaFinal);
            List<Producto> nuevaLista = Stream.concat(listUno.stream(), listDos.stream()).toList();

            return nuevaLista;
        }

        if (isValidCiudad) {
            return productosRepository.findProductoByCiudad_Id(ciudadId);
        }

        if (isValidDates) {
            List<Producto> listUno = productosRepository.findAllByReservasIsNull();
            List<Producto> listDos = productosRepository.findProductoByReservas(fechaInicial,fechaFinal);
            List<Producto> nuevaLista = Stream.concat(listUno.stream(), listDos.stream()).toList();

            return nuevaLista;
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
