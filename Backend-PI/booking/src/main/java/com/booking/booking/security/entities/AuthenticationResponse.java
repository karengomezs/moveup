package com.booking.booking.security.entities;

import com.booking.booking.entities.Ciudad;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private String nombre;
    private String apellido;
    private String email;
    private String ciudad;
}
