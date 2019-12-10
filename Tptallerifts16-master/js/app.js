const mostrarJson = ()=>{


    let mostrarInformacion = document.getElementById("mostrar")



    let inputCiudad = document.getElementById("ciudad-value").value

    let apikey = "1efa38b062892a00892c21739f29452d";


    const urlJson = `https://api.openweathermap.org/data/2.5/weather?q=${inputCiudad}&appId=${apikey}`;


    fetch(urlJson)
        .then(res => res.json())
        .then(data =>{

            console.log(data)

            let html = ""

            let temperaturaActual = data.main.temp

            let humedad = data.main.humidity


            if(data.cod == 200){
                html += ` 
                

                <div class="col-6">

                <h2 class="mt-4" style ="color:red">Temperatura actual de ${inputCiudad}: 
                ${temperaturaActual - 273.15.toFixed(2)} grados centigrados y una humedad de
                 ${humedad} %   
                 </h2>   



                </div>
                
                
                
                
                
                `;
    
            }      
            mostrarInformacion.innerHTML = html

        })
}



let boton = document.getElementById("btn-submit")
boton.addEventListener("click", mostrarJson)