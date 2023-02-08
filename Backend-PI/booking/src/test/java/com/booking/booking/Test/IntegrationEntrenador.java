package com.booking.booking.Test;

import com.booking.booking.entities.Ciudad;
import com.booking.booking.entities.Entrenador;
import com.booking.booking.services.EntrenadorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
public class IntegrationEntrenador {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private EntrenadorService entrenadorService;

    private void cargarDatos(){
        Entrenador EntrenadorAgregado=entrenadorService
                .post(new Entrenador("Carlos","Entrenador funcional","djhjsdkfjkdsfk"));
    }

    @Test
    public void getAllTest()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                (MockMvcRequestBuilders.get("/api/entrenador").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }

    @Test
    public void getOneTest()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                (MockMvcRequestBuilders.get("/api/entrenador/1").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }

    @Test
    public void deleteID()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                (MockMvcRequestBuilders.delete("/api/entrenador/1").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }

}
