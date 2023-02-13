package com.booking.booking.services;

import com.booking.booking.entities.Imagen;
import com.booking.booking.repositories.ImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {

    private ImagenRepository imagenRepository;

    @Autowired
    public ImagenService(ImagenRepository imagenRepository) {
        this.imagenRepository = imagenRepository;
    }

    public Imagen post (Imagen imagen){return imagenRepository.save(imagen);}

    public List<Imagen> saveAll(List<Imagen> imagenList) {return imagenRepository.saveAll(imagenList); }

    public List<Imagen> getAll() {return imagenRepository.findAll();}

    public Optional<Imagen> getOne(Long id){return imagenRepository.findById(id);}

    public void put(Imagen imagen){
        imagenRepository.save(imagen);}

    public void delete(Long id){
        imagenRepository.deleteById(id);}
}
