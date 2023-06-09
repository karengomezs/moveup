package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String url;

    @Column
    private String nombre;

    @Column
    private String descripcion;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "producto_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Producto producto;

    public Imagen(String url, String nombre, String descripcion) {
        this.url = url;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
