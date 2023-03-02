package com.booking.booking.security.controllers;

import com.booking.booking.security.entities.AuthenticationRequest;
import com.booking.booking.security.entities.AuthenticationResponse;
import com.booking.booking.security.entities.RegisterRequest;
import com.booking.booking.security.entities.Usuario;
import com.booking.booking.security.repositories.UsuarioRepository;
import com.booking.booking.security.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
// @CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UsuarioRepository repository;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        Optional<Usuario> user=repository.findByEmail(request.getEmail());

        if (user.isPresent()){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok(service.register(request));
        }

    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(
            @RequestBody RegisterRequest request
    ){
        Optional<Usuario> user=repository.findByEmail(request.getEmail());

        if (user.isPresent()){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok(service.registerAdmin(request));
        }

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
