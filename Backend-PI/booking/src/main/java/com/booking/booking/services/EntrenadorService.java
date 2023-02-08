package com.booking.booking.services;

import com.booking.booking.entities.Entrenador;
import com.booking.booking.repositories.EntrenadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntrenadorService {
    private EntrenadorRepository entrenadorRepository;
    @Autowired

    public EntrenadorService(EntrenadorRepository entrenadorRepository) {

        this.entrenadorRepository = entrenadorRepository;
    }

    public Entrenador post(Entrenador entrenador){
        return entrenadorRepository.save(entrenador);
    }
    public List<Entrenador> getAll(){
        return entrenadorRepository.findAll();
    }
    public Optional<Entrenador> getOne(Long id){
        return entrenadorRepository.findById(id);
    }
    public void put(Entrenador entrenador){
        entrenadorRepository.save(entrenador);
    }
    public void delete(Long id){
        entrenadorRepository.deleteById(id);
    }
}
