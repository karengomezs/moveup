package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String nombreCiudad;

    @Column
    private String url;

    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.ALL)
    private Collection<Producto> productos;


    public Ciudad(String nombreCiudad, String url) {
        this.nombreCiudad = nombreCiudad;
        this.url = url;
    }

    public void Ciudad(Collection<Producto> productos) {
        this.productos = productos;
        for (Producto producto:productos) {
            producto.setCiudad(this);
        }   
    }
}



