package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ciudades")
public class Ciudad {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String nombreCiudad;

    @Column
    private String url;


    @OneToMany(mappedBy = "ciudad",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Producto> productos= new HashSet<>();

    @OneToMany(mappedBy = "ciudad",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Entrenador> entrenadors=new HashSet<>();

    public Ciudad(String nombreCiudad, String url) {
        this.nombreCiudad = nombreCiudad;
        this.url = url;
    }
}



