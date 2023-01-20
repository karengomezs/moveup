import React from "react";

export default function Searcher() {
    return (
        <>
        <div class="container text-center p-3 mb-2 bg-primary-subtle text-emphasis-primary">
        {/*espacio del titulo */}
            <div class="row justify-content-md-center">
                <div class="col">
                    <h1>ESPACIO DEL TITULO</h1>
                </div>
            </div>
        {/*espacio del parágrafo */}
            <div class="row justify-content-md-center">
                <div class="col">
                    <p>Espacio para el Parágrafo</p>
                </div> 
            </div>
        {/*comienzo del formulario */}
            <form onClick={'Submit'}>
            <div class="row">
                <div class="col">
                    <div class="input-group mb-3">
                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>Choose...</option>
                            <option value="1">Bogotá</option>
                            <option value="2">Medellín</option>
                            <option value="3">Barranquilla</option>
                        </select>
                    <label class="input-group-text" for="inputGroupSelect02">Ciudad</label>
                </div>
            </div>
                <div class="col-md-2">
                <div class="input-group">
                    <span class="input-group-text">Calendario</span>
                    <input type="date" aria-label="going" class="form-control"/>
                    <input type="date" aria-label="return" class="form-control"/>
                </div>
                </div>
                <div class="col col-lg-2">
                <input class="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </div>
            </form>
        {/*fin del formulario */}
        </div>
        </>
    )
}