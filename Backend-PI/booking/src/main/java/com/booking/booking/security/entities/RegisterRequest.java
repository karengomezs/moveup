package com.booking.booking.security.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String nombre;
    private String apellido;
    private String email;
    private String ciudad;
    private String contraseña;

}
