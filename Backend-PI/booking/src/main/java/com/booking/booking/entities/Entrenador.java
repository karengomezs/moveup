package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "entrenador")
public class Entrenador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String nombre;
    @Column
    private String descripcion;
    @Column
    private String url;

    @OneToMany(mappedBy = "entrenador",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Producto> productos= new HashSet<>();

    @ManyToOne
    @JsonIgnore
    private Ciudad ciudad;

    public Entrenador(String nombre, String descripcion, String url) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
    }
}
