package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String nombreCategorias;

    @Column
    private String descripcionCategorias;

    @Column
    private String url;

    @ManyToMany(mappedBy = "categorias")
    @JsonIgnore
    private Set<Producto> productoSet=new HashSet<>();

    public Categoria(String nombreCategorias, String descripcionCategorias, String url) {
        this.nombreCategorias = nombreCategorias;
        this.descripcionCategorias = descripcionCategorias;
        this.url = url;
    }
}
