package com.booking.booking.entities;

import com.booking.booking.security.entities.Usuario;
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

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "HH:mm")
    private Date horaInicio;

    @Column
    private LocalDate fechaInicial;
    @Column
    private LocalDate fechaFinal;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "producto_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Producto producto;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "usuario_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Usuario usuario;

    public Reserva(Date horaInicio, LocalDate fechaInicial, LocalDate fechaFinal) {
        this.horaInicio = horaInicio;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }
}
