package com.booking.booking.repositories;

import com.booking.booking.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository <Categoria, Long > {
}
