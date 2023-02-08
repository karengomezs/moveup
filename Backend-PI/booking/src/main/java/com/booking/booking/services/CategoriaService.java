package com.booking.booking.services;


import com.booking.booking.entities.Categoria;
import com.booking.booking.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {


    private CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public Categoria post(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public List<Categoria> getAll() {
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> getOne(Long id) {
        return categoriaRepository.findById(id);
    }

    public void put(Categoria categoria) {
        categoriaRepository.save(categoria);
    }

    public void delete(Long id) {
        categoriaRepository.deleteById(id);
    }
}





