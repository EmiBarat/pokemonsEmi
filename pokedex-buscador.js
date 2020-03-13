window.onload = function(){

    let btnBuscar = document.getElementById("btnBuscar");
    let tablaPokemons = document.getElementById("tablaPokemons");

    //metodo que manda a la tabla todos los pokemons previo filtros, al agregarle un parametro
    //me sirve para filtrar segun inputs.
    
   

    function getNombrePokemon(){
        let elemenetNombrePokemon =  document.querySelector('input[type="text"]'); 
        let nombrePokemon = elemenetNombrePokemon.value; 
        return nombrePokemon.toUpperCase();
    }

    function getTipoPokemon(){
        let chkTipoPokemon = document.querySelectorAll('input[type="checkbox"][name="tipo"]');
        let tiposPokemon=[];
        for (let i = 0; i < chkTipoPokemon.length; i++) {
            if(chkTipoPokemon.checked){
                tiposPokemon.push(chkTipoPokemon[i].value);
            }
            
        }
        return tiposPokemon;
    }

    function getMovimientosPokemon(){
        let chkMovPokemon = document.querySelectorAll('input[type="checkbox"][name="movimiento"]');
        let movimientosPokemon=[];
        for(let i = 0; i < chkMovPokemon.length; i++){
            if(chkMovPokemon[i].checked){
                movimientosPokemon.push(chkMovPokemon[i].value);
            }
        };
        return movimientosPokemon;
        
    }

    
    
    
    // datosPokemon();
   // console.log(datosPokemon());
   function buscar (pPokemons, pNombre, pTipoPokemon, pMovimientoPokemon){
        let resultado = [];
        pPokemons.forEach(function(element, index){ //por cada elemento
            if(element.nombre.startsWith(pNombre)){
                resultado.push(element);
            }
        })

        listaTiposPokemons = [];
        tiposPokemon.forEach(function(element){
            listaTiposPokemons.push(element);
        })

        pPokemons.forEach(function(element){
            if(pTipoPokemon[listaTiposPokemons]){
                resultado.push(element);
            }
        })

        // let listaTiposPokemon = [];
        // for(let i = 0; i < tiposPokemon.length; i++){
        //     listaTiposPokemon.push(tiposPokemon[i]);
        //     if(pTipoPokemon[listaTiposPokemon]){
        //         resultado.push(tiposPokemon[i]);         //esto esta para la mierda... 
                                                            //estoy metiendo en resultado el tipo de pokemon, 
                                                            //no el objeto pokemon
        //     }
        // }

        listaMov = [];
        movimientos.forEach(function(element){
            listaMov.push(element);
        })

        pPokemons.forEach(function(element){
            if(pMovimientoPokemon[listaMov]){
                resultado.push(element);
            }
        })
        

        return resultado;
      
   
    }

    btnBuscar.onclick = function(){
        //primero obtengo los filtros.
        let nombrePokemonABuscar = getNombrePokemon() ; 
        let tipoPokemonABuscar = getTipoPokemon();
        let movimientoPokemonABuscar = getMovimientosPokemon();
        
        //busco los pokemons basado en los filtros nombre, tipo y movimiento
        let resultado = buscar(pokemons, nombrePokemonABuscar, tipoPokemonABuscar, movimientoPokemonABuscar );
        
        //muestro el resultado de la busqueda definida en basa a los filtros nombre, tipo, movimiento
        mostrarPokemons(resultado);
        

    };

    function mostrarPokemons(pPokemons){
        
        let avatar;
        let nombrePokemon = "";
        let tipoPokemon = [];
        
        //let movimientos = ['asustar', 'envenenar','rayo solar', 'tackle', 'llamarada', 'ataque aereo', 'bomba agua', 'picar', 'electrocutar']; 
        
        
        for (let i = 0; i < pPokemons.length; i++) {
            avatar = pPokemons[i].avatar;
            nombrePokemon = pPokemons[i].nombre;
            tipoPokemon = pPokemons[i].tipo;
            let movPokemon = [];
            //PRIMERA OPCION: USAR EL METODO OBJECT.KEYS, QUE TRANSFORMA LAS PROPIEDADES DE UN OBJETO EN CLAVES DE TIPO STRING
            //PARA PODER METERLAS DENTRO DE UN ARREGLO Y MOSTRARLAS.
            // movPokemon = Object.keys(pokemons[i].movimientos)

            //SEGUNDA FORMA, USANDO UN FOR COMUN Y ACCEDIENDO A LAS PROPIEDADES DEL OBJETO DESDE SUS CLAVES, OBTENIDAS Y GUARDADAS COMO 
            //ARREGLO DE ESAS CLAVES Y LUEGO VERIFICANDO QUE EL POKEMON ACTUAL POSEA ESE MOVIMIENTO.
            
            // for(let h = 0; h < movimientos.length; h++){
                
            //     let movimientoKey = movimientos[h];     //MOVIMIENTO EN LA POSICION "H" DE ARRAY MOVIMIENTOS (POKEDEX-ARRAY.JS)
            //     let movimientoObjetoDelPokemonActual = pokemons[i].movimientos    //GUARDO EN UNA VARIABLE EL !!OBJETO!! DEL MOVIMIENTO QUE TIENE EL POKEMON ACTUAL
                
            //     if(movimientoObjetoDelPokemonActual[movimientoKey]){     // PREGUNTO: TIENE EL OBJETO DE POKEMON ACTUAL [EL MOVIMIENTO H DEL ARRAY MOVIMIENTO]???
                    
            //         movPokemon.push(movimientos[h])
                    
            //     } ;
            // }
                let movimientoDelPokemonActual = pPokemons[i].movimientos
                //OTRA FORMA CON FOR...IN POR CADA CLAVE ENCONTRADA EN EL OBJETO HACE {...}.
                for (const movimientoKey in pPokemons[i].movimientos) {  //EL MISMO FOR IN TRANSFORMA LA CLAVE DEL OBJETO EVALUADO EN STRING
                   
                    movPokemon.push(movimientoKey);
                    
                }

                // for (const key in movimientoDelPokemonActual) {
                //     movPokemon.push(key);
                // }
                
            let nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = "<td><img src ="+avatar+ "></img></td>"+
                                    "<td>"+nombrePokemon+"</td>"+
                                    "<td>"+tipoPokemon+"</td>"+
                                    "<td>"+movPokemon+"</td>";
            tablaPokemons.appendChild(nuevaFila);
            console.log(movPokemon);
            
        }

        
    }
    
    
};
