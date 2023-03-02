package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private Double calificacion;

    @Column
    private String nombreClase;

    @Column
    private String direccion;
    @Column
    private String descripcionClase;

    @ManyToOne
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Collection<Imagen> imagenes;

    @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonIgnore
    private Collection<Reserva> reservas;

    @ManyToOne
    private Categoria categorias;

    public Producto(Double calificacion, String nombreClase, String direccion, String descripcionClase) {
        this.calificacion = calificacion;
        this.nombreClase = nombreClase;
        this.direccion = direccion;
        this.descripcionClase = descripcionClase;
    }

    public void setImagenes(Collection<Imagen> imagenes) {
        this.imagenes = imagenes;
        for (Imagen imagen:imagenes) {
            imagen.setProducto(this);
        }
    }
    public void setReservas(Collection<Reserva> reservas) {
        this.reservas = reservas;
        for (Reserva reserva:reservas) {
            reserva.setProducto(this);
        }
    }
}
