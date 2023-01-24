import React from "react";
/*importe de iconos Font Awesome */
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
//import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function Searcher(){
    
    return(
        <>
        <div class="searcher">
            <div class="container text-center">
                <div class="row">    
                <div class="col-sm-12">

                        <h1>Lorem Ipsum</h1>  
        
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-sm-4">

                        {/*<FontAwesomeIcon icon={faLocationDot} class="calendar_icon"/>*/}

                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="¿A dónde vamos?"/>

                    </div>
                    <div class="col-sm-4">
                        
                        {/*<FontAwesomeIcon icon={faCalendar} class="calendar_icon"/>*/}
                        
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder= "Check in - Check out" />

                    </div>
                    <div class="col-sm-2">

                        <button type="button" class="btn btn-primary">Buscar</button>
        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


