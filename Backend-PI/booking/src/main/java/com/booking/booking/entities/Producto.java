package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;

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
    private LocalDate fechaDisponible;
    @Column
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "HH:mm")
    private Date horarioDisponible;
    @Column
    private String nombreClase;
    @Column
    private String descripcionClase;

    @ManyToOne
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Collection<Imagen> imagenes;

    @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Collection<Reserva> reservas;

    @Column
    private String entrenador;

    @ManyToOne
    private Categoria categorias;

    public Producto(Double calificacion, LocalDate fechaDisponible, Date horarioDisponible, String nombreClase, String descripcionClase, String entrenador) {
        this.calificacion = calificacion;
        this.fechaDisponible = fechaDisponible;
        this.horarioDisponible = horarioDisponible;
        this.nombreClase = nombreClase;
        this.descripcionClase = descripcionClase;
        this.entrenador = entrenador;
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
