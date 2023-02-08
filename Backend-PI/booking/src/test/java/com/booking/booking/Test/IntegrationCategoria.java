package com.booking.booking.Test;

import com.booking.booking.entities.Categoria;
import com.booking.booking.services.CategoriaService;
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
public class IntegrationCategoria {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CategoriaService categoriaService;

    private void cargarDatos(){
        Categoria CategoriaAgregada=categoriaService
                .post(new Categoria("Artes marciales","ijdijiwdj"));
    }

    @Test
    public void getAllTest()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                        (MockMvcRequestBuilders.get("/api/categorias").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }

    @Test
    public void getOneTest()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                        (MockMvcRequestBuilders.get("/api/categorias/1").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }

    @Test
    public void deleteID()throws Exception{
        cargarDatos();
        MvcResult result=mockMvc.perform
                        (MockMvcRequestBuilders.delete("/api/categorias/1").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        assertFalse(result.getResponse().getContentAsString().isEmpty());
    }
}
