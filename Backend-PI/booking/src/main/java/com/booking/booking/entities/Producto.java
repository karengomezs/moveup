package com.booking.booking.entities;

import com.booking.booking.services.CiudadService;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
    private Double calificación;
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

    @Column
    private String entrenador;

    @ManyToMany(mappedBy = "productoSet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Categoria> categorias=new HashSet<>();

    public Producto(Double calificación, LocalDate fechaDisponible, Date horarioDisponible, String nombreClase, String descripcionClase, String entrenador) {
        this.calificación = calificación;
        this.fechaDisponible = fechaDisponible;
        this.horarioDisponible = horarioDisponible;
        this.nombreClase = nombreClase;
        this.descripcionClase = descripcionClase;
        this.entrenador = entrenador;
    }
}
