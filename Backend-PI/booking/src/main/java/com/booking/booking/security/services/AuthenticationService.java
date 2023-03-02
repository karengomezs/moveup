package com.booking.booking.security.services;

import com.booking.booking.security.entities.*;
import com.booking.booking.security.jwt.JwtService;
import com.booking.booking.security.repositories.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = Usuario.builder()
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .email(request.getEmail())
                .ciudad(request.getCiudad())
                .contraseña(passwordEncoder.encode(request.getContraseña()))
                .role(Role.ROLE_USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .id(user.getId())
                .token(jwtToken)
                .nombre(user.getNombre())
                .apellido(user.getApellido())
                .email(user.getEmail())
                .ciudad(user.getCiudad())
                .role(user.getRole())
                .build();
    }

    public AuthenticationResponse registerAdmin(RegisterRequest request) {
        var user = Usuario.builder()
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .email(request.getEmail())
                .ciudad(request.getCiudad())
                .contraseña(passwordEncoder.encode(request.getContraseña()))
                .role(Role.ROLE_ADMIN)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .id(user.getId())
                .token(jwtToken)
                .nombre(user.getNombre())
                .apellido(user.getApellido())
                .email(user.getEmail())
                .ciudad(user.getCiudad())
                .role(user.getRole())
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getContraseña()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .id(user.getId())
                .token(jwtToken)
                .nombre(user.getNombre())
                .apellido(user.getApellido())
                .email(user.getEmail())
                .ciudad(user.getCiudad())
                .role(user.getRole())
                .build();
    }

    public boolean updateCity (Long id, String city) {
        Optional<Usuario> user = repository.findById(id);

        if(user.isPresent()){
            user.get().setCiudad(city);
            return true;
        }

        return false;
    }
}
