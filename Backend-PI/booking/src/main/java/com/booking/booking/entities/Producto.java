package com.booking.booking.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
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

    @ElementCollection
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ciudad_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto",fetch = FetchType.EAGER)
    private Set<Imagen> imagenes = new HashSet<>();

    @Column
    private String entrenador;

    @ManyToMany(mappedBy = "productoSet", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "usuario_categoria", joinColumns = @JoinColumn(name = "producto_id"), inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private Set<Categoria> categorias=new HashSet<>();

    public Producto(Double calificacion, LocalDate fechaDisponible, Date horarioDisponible, String nombreClase, String descripcionClase, String entrenador) {
        this.calificacion = calificacion;
        this.fechaDisponible = fechaDisponible;
        this.horarioDisponible = horarioDisponible;
        this.nombreClase = nombreClase;
        this.descripcionClase = descripcionClase;
        this.entrenador = entrenador;
    }
}
