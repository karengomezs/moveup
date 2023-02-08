package com.booking.booking.services;


import com.booking.booking.entities.Ciudad;
import com.booking.booking.repositories.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {


    private CiudadRepository ciudadRepository;

    @Autowired
    public CiudadService(CiudadRepository ciudadRepository){

        this.ciudadRepository = ciudadRepository;
    }

    public Ciudad post (Ciudad ciudad){return ciudadRepository.save(ciudad);}

    public List<Ciudad> getAll() {return ciudadRepository.findAll();}

    public Optional<Ciudad> getOne(Long id){return ciudadRepository.findById(id);}

    public void put(Ciudad ciudad){
        ciudadRepository.save(ciudad);}

    public void delete(Long id){
        ciudadRepository.deleteById(id);}

}
