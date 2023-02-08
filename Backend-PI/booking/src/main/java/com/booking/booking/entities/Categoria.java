package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @GeneratedValue
    private Long id;
    @Column
    private String nombreCategorias;

    @Column
    private String descripcionCategorias;

    @Column
    private String url;

    @ManyToMany
    @JoinTable(name = "productosXcategorias",
            joinColumns = @JoinColumn(name = "categoria_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id"))
    @JsonIgnore
    private Set<Producto> productoSet=new HashSet<>();

    public Categoria(String nombreCategorias, String descripcionCategorias, String url) {
        this.nombreCategorias = nombreCategorias;
        this.descripcionCategorias = descripcionCategorias;
        this.url = url;
    }
}
