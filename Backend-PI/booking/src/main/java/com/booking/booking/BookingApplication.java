package com.booking.booking;

import com.booking.booking.entities.Categoria;
import com.booking.booking.entities.Ciudad;
import com.booking.booking.entities.Imagen;
import com.booking.booking.entities.Producto;
import com.booking.booking.repositories.CategoriaRepository;
import com.booking.booking.repositories.CiudadRepository;
import com.booking.booking.repositories.ImagenRepository;
import com.booking.booking.repositories.ProductosRepository;
import com.booking.booking.security.entities.RegisterRequest;
import com.booking.booking.security.services.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookingApplication.class, args);
	}

	@Bean
	public CommandLineRunner addTestData(CiudadRepository ciudadRepository, CategoriaRepository categoriaRepository, ProductosRepository productosRepository, ImagenRepository imagenRepository, AuthenticationService authenticationService) {
		return (args) -> {
			List<Ciudad> ciudadesData = Arrays.asList(
					new Ciudad("Medellin CO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BEAuxoN9A2SHN5gHkJwhD_uw1KP7EPsJ6g&usqp=CAU"),
					new Ciudad("Cali CO", "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg"),
					new Ciudad("Santa Marta CO", "https://thecuriouspixie.com/wp-content/uploads/2022/05/2E9A2040_1_11zon-1440x1080.jpg"),
					new Ciudad("Armenia CO", "https://lp-cms-production.imgix.net/features/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg"),
					new Ciudad("Cartagena CO", "https://lp-cms-production.imgix.net/features/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg"),
					new Ciudad("Amazonas CO", "https://encolombia.com/wp-content/uploads/2013/08/Departamento-del-Amazonas.jpg"),
					new Ciudad("Jardin CO", "https://www.patisjourneywithin.com/wp-content/uploads/2022/06/cover.jpg"),
					new Ciudad("Bogota CO", "https://www.travellens.co/content/images/size/w2000/format/webp/2022/05/bogota.jpg")
			);

			ciudadRepository.saveAll(ciudadesData);

			List<Categoria> categoriasData = Arrays.asList(
					new Categoria("Acuáticas", "Deportes en el agua", "https://images.pexels.com/photos/1655822/pexels-photo-1655822.jpeg?auto=compress&cs=tinysrgb&w=600"),
					new Categoria("Artes marciales", "Deportes de contacto", "https://images.pexels.com/photos/7045379/pexels-photo-7045379.jpeg?auto=compress&cs=tinysrgb&w=600"),
					new Categoria("Aeróbicos", "Movimiento constante", "https://media.istockphoto.com/id/1170865144/es/foto/clase-de-bailarina-profesional-bailando-en-estudio-de-baile.jpg?s=612x612&w=0&k=20&c=y1obwuTwupm211RqqsxE1sqsD2btKJSGr047PruBSXE="),
					new Categoria("Trekking", "Caminatas campestres", "https://images.pexels.com/photos/2539363/pexels-photo-2539363.jpeg?auto=compress&cs=tinysrgb&w=600")
			);

			categoriaRepository.saveAll(categoriasData);


			SimpleDateFormat formatter = new SimpleDateFormat("HH:mm");

			List<Producto> productosData = Arrays.asList(
					new Producto(4.0, LocalDate.of(2023,02,8),formatter.parse("04:12"), "Tekondo", "Deporte de defensa personal", "Damian"),
					new Producto(5.0, LocalDate.of(2023,02,8),formatter.parse("04:15"), "Rumba", "Rumba aeróbica y entrenamiento de cardio", "Karen"),
					new Producto(5.0, LocalDate.of(2023,02,8),formatter.parse("03:15"), "Surf", "Ve al ritmo de las olas del mar", "Jean"),
					new Producto(3.0, LocalDate.of(2023,02,18),formatter.parse("02:00"), "Rumbo a la montaña", "Camina por los valles del cocora con nuestra guía", "Camila"),
					new Producto(3.0, LocalDate.of(2023,02,12),formatter.parse("02:00"), "Buceo", "Ven y bucea con especies diferentes bajo el mar", "Juan"),
					new Producto(4.0, LocalDate.of(2023,02,15),formatter.parse("08:00"), "Remo", "Rema con tus compañeros mientras estás rodeado de naturaleza", "Jose"),
					new Producto(5.0, LocalDate.of(2023,02,11),formatter.parse("10:00"), "Explorando jardin", "Camina por las montañas y nacimientos hídricos en Jardin", "Catalina"),
					new Producto(3.0, LocalDate.of(2023,02,12),formatter.parse("06:00"), "GAP", "Entrenamiento funcional y clases aeróbicas", "Diana")
			);

			productosData.get(0).setCiudad(ciudadesData.get(0));
			productosData.get(0).setCategorias(categoriasData.get(1));

			productosData.get(1).setCiudad(ciudadesData.get(1));
			productosData.get(1).setCategorias(categoriasData.get(2));

			productosData.get(2).setCiudad(ciudadesData.get(2));
			productosData.get(2).setCategorias(categoriasData.get(0));

			productosData.get(3).setCiudad(ciudadesData.get(3));
			productosData.get(3).setCategorias(categoriasData.get(3));

			productosData.get(4).setCiudad(ciudadesData.get(4));
			productosData.get(4).setCategorias(categoriasData.get(0));

			productosData.get(5).setCiudad(ciudadesData.get(5));
			productosData.get(5).setCategorias(categoriasData.get(0));

			productosData.get(6).setCiudad(ciudadesData.get(6));
			productosData.get(6).setCategorias(categoriasData.get(3));

			productosData.get(7).setCiudad(ciudadesData.get(7));
			productosData.get(7).setCategorias(categoriasData.get(2));

			List<Producto> productosResponse = productosRepository.saveAll(productosData);

			List<Imagen> imagenesData = Arrays.asList(
					new Imagen("https://images.pexels.com/photos/7045387/pexels-photo-7045387.jpeg?auto=compress&cs=tinysrgb&w=600","tekondo", "tekondo img"),
					new Imagen("https://images.pexels.com/photos/7045572/pexels-photo-7045572.jpeg?auto=compress&cs=tinysrgb&w=600","tekondo", "tekondo img"),
					new Imagen("https://images.pexels.com/photos/8612485/pexels-photo-8612485.jpeg?auto=compress&cs=tinysrgb&w=600","tekondo", "tekondo img"),
					new Imagen("https://images.pexels.com/photos/6253346/pexels-photo-6253346.jpeg?auto=compress&cs=tinysrgb&w=600","tekondo", "tekondo img"),
					new Imagen("https://images.pexels.com/photos/8611291/pexels-photo-8611291.jpeg?auto=compress&cs=tinysrgb&w=600","tekondo", "tekondo img"),

					new Imagen("https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600","rumba", "rumba img"),
					new Imagen("https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=600","rumba", "rumba img"),
					new Imagen("https://media.istockphoto.com/id/856388890/es/foto/mujeres-del-fitness-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=DGNSYEas2p9FJyzP3CykMf8tydCdFpC47CDVsys0o2Q=","rumba", "rumba img"),
					new Imagen("https://images.pexels.com/photos/7942412/pexels-photo-7942412.jpeg?auto=compress&cs=tinysrgb&w=600","rumba", "rumba img"),
					new Imagen("https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=600","rumba", "rumba img"),

					new Imagen("https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=600","surf", "surf img"),
					new Imagen("https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600","surf", "surf img"),
					new Imagen("https://images.pexels.com/photos/111085/pexels-photo-111085.jpeg?auto=compress&cs=tinysrgb&w=600","surf", "surf img"),
					new Imagen("https://images.pexels.com/photos/1654490/pexels-photo-1654490.jpeg?auto=compress&cs=tinysrgb&w=600","surf", "surf img"),
					new Imagen("https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=600","surf", "surf img"),

					new Imagen("https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=600","montaña", "montaña img"),
					new Imagen("https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg?auto=compress&cs=tinysrgb&w=600","montaña", "montaña img"),
					new Imagen("https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&w=600","montaña", "montaña img"),
					new Imagen("https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=600","montaña", "montaña img"),
					new Imagen("https://images.pexels.com/photos/1980877/pexels-photo-1980877.jpeg?auto=compress&cs=tinysrgb&w=600","montaña", "montaña img"),

					new Imagen("https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg?auto=compress&cs=tinysrgb&w=600","buceo", "buceo img"),
					new Imagen("https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=600","buceo", "buceo img"),
					new Imagen("https://images.pexels.com/photos/37542/divers-scuba-reef-underwater-37542.jpeg?auto=compress&cs=tinysrgb&w=600","buceo", "buceo img"),
					new Imagen("https://media.istockphoto.com/id/1283001679/es/foto/buceador-de-buceo-hombre-cerca-de-hermoso-arrecife-de-coral-con-peces-tropicales.jpg?s=612x612&w=0&k=20&c=bZTQLha5kUA-0wEpMDLCtac7nEYFZv2y0pB6apBYsy0=","buceo", "buceo img"),
					new Imagen("https://media.istockphoto.com/id/1130867214/es/foto/mujer-joven-buceador-explorando-arrecife-de-coral.jpg?s=612x612&w=0&k=20&c=LOkiZZsLwX8_aGgE0nB82ShKcySAG8rJimnMGbNh5J4=","buceo", "buceo img"),

					new Imagen("https://images.pexels.com/photos/2230444/pexels-photo-2230444.jpeg?auto=compress&cs=tinysrgb&w=600","remo", "remo img"),
					new Imagen("https://images.pexels.com/photos/2916819/pexels-photo-2916819.jpeg?auto=compress&cs=tinysrgb&w=600","remo", "remo img"),
					new Imagen("https://images.pexels.com/photos/1655037/pexels-photo-1655037.jpeg?auto=compress&cs=tinysrgb&w=600","remo", "remo img"),
					new Imagen("https://images.pexels.com/photos/14021572/pexels-photo-14021572.jpeg?auto=compress&cs=tinysrgb&w=600","remo", "remo img"),
					new Imagen("https://images.pexels.com/photos/3682409/pexels-photo-3682409.jpeg?auto=compress&cs=tinysrgb&w=600","remo", "remo img"),

					new Imagen("https://images.pexels.com/photos/1460658/pexels-photo-1460658.jpeg?auto=compress&cs=tinysrgb&w=600","jardin", "jardin img"),
					new Imagen("https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=600","jardin", "jardin img"),
					new Imagen("https://images.pexels.com/photos/8968080/pexels-photo-8968080.jpeg?auto=compress&cs=tinysrgb&w=600","jardin", "jardin img"),
					new Imagen("https://images.pexels.com/photos/6469984/pexels-photo-6469984.jpeg?auto=compress&cs=tinysrgb&w=600","jardin", "jardin img"),
					new Imagen("https://images.pexels.com/photos/8968493/pexels-photo-8968493.jpeg?auto=compress&cs=tinysrgb&w=600","jardin", "jardin img"),

					new Imagen("https://images.pexels.com/photos/6740296/pexels-photo-6740296.jpeg?auto=compress&cs=tinysrgb&w=600","gap", "gap img"),
					new Imagen("https://media.istockphoto.com/id/693186784/es/foto/mujer-bonita-y-fuerte.jpg?s=612x612&w=0&k=20&c=Kaz81TMR8JZW2lHXqsEiAASRHUeyLWXDysPAe36_cVI=","gap", "gap img"),
					new Imagen("https://media.istockphoto.com/id/1002050912/es/foto/tres-sonriente-a-multiculturales-deportistas-ejercicio-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=iyWol4rvCj3GL816__v78p4wzNbtVc0H4a0-PBKXoM4=","gap", "gap img"),
					new Imagen("https://media.istockphoto.com/id/1002046456/es/foto/deportista-afroamericana-haciendo-ejercicio-en-la-plataforma-de-paso-atleta-femenino-cauc%C3%A1sico.jpg?s=612x612&w=0&k=20&c=Zvy2TNxdKMX9ji0ZjNMcWhKohwwsgowhG865A2B70r4=","gap", "gap img"),
					new Imagen("https://media.istockphoto.com/id/1298327669/es/foto/hermosa-mujer-en-forma-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=ifHPTWSXDwNiwKe9Sjdr8DusIT09gWmPMKUS_8ADLs0=","gap", "gap img")
			);

			imagenesData.get(0).setProducto(productosResponse.get(0));
			imagenesData.get(1).setProducto(productosResponse.get(0));
			imagenesData.get(2).setProducto(productosResponse.get(0));
			imagenesData.get(3).setProducto(productosResponse.get(0));
			imagenesData.get(4).setProducto(productosResponse.get(0));

			imagenesData.get(5).setProducto(productosResponse.get(1));
			imagenesData.get(6).setProducto(productosResponse.get(1));
			imagenesData.get(7).setProducto(productosResponse.get(1));
			imagenesData.get(8).setProducto(productosResponse.get(1));
			imagenesData.get(9).setProducto(productosResponse.get(1));

			imagenesData.get(10).setProducto(productosResponse.get(2));
			imagenesData.get(11).setProducto(productosResponse.get(2));
			imagenesData.get(12).setProducto(productosResponse.get(2));
			imagenesData.get(13).setProducto(productosResponse.get(2));
			imagenesData.get(14).setProducto(productosResponse.get(2));

			imagenesData.get(15).setProducto(productosResponse.get(3));
			imagenesData.get(16).setProducto(productosResponse.get(3));
			imagenesData.get(17).setProducto(productosResponse.get(3));
			imagenesData.get(18).setProducto(productosResponse.get(3));
			imagenesData.get(19).setProducto(productosResponse.get(3));

			imagenesData.get(20).setProducto(productosResponse.get(4));
			imagenesData.get(21).setProducto(productosResponse.get(4));
			imagenesData.get(22).setProducto(productosResponse.get(4));
			imagenesData.get(23).setProducto(productosResponse.get(4));
			imagenesData.get(24).setProducto(productosResponse.get(4));

			imagenesData.get(25).setProducto(productosResponse.get(5));
			imagenesData.get(26).setProducto(productosResponse.get(5));
			imagenesData.get(27).setProducto(productosResponse.get(5));
			imagenesData.get(28).setProducto(productosResponse.get(5));
			imagenesData.get(29).setProducto(productosResponse.get(5));

			imagenesData.get(30).setProducto(productosResponse.get(6));
			imagenesData.get(31).setProducto(productosResponse.get(6));
			imagenesData.get(32).setProducto(productosResponse.get(6));
			imagenesData.get(33).setProducto(productosResponse.get(6));
			imagenesData.get(34).setProducto(productosResponse.get(6));

			imagenesData.get(35).setProducto(productosResponse.get(7));
			imagenesData.get(36).setProducto(productosResponse.get(7));
			imagenesData.get(37).setProducto(productosResponse.get(7));
			imagenesData.get(38).setProducto(productosResponse.get(7));
			imagenesData.get(39).setProducto(productosResponse.get(7));

			imagenRepository.saveAll(imagenesData);


			RegisterRequest request = new RegisterRequest();
			request.setNombre("Admin");
			request.setApellido("General");
			request.setEmail("admin@gmail.com");
			request.setCiudad("Medellín");
			request.setContraseña("123456");

			authenticationService.register(request);
		};
	}
}
