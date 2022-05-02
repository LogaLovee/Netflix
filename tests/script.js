window.addEventListener('load', ()=>{

    let lon
    let lat

    let temperaturaValor = document.getElementById('temperaturaValor')
    let temperaturaDescripcion = document.getElementById('temperaturaDescripcion')

    let Ubicacion = document.getElementById('ubicacion')
    let icon = document.getElementById('icon')

    let vientoVelocidad = document.getElementById('vientoVelocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
         
            let ubiPromt = "xalapa"

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

             let placeSearch = document.getElementById('placeSearch') 
             placeSearch.addEventListener(`click`, ()=>{
                ubiPromt=prompt('¿Que estado te gustaria conocer su temperatura?')
                obtenerDatos(ubiPromt)
            }) 

            // Ubicacion actual 
            
            // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e66ab71c0a79570082ab5b7070c9859
            function obtenerDatos(ubicacion){
                 //Ubicacion por ciudad  
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&units=metric&appid=7e66ab71c0a79570082ab5b7070c9859`     

                fetch(url)
                    .then( response => { return  response.json() })
                    .then( data => {
                        console.log(data)
                        let temp = Math.round(data.main.temp)
                        temperaturaValor.textContent = `${temp} ° C`


                        let desc = data.weather[0].description
                        temperaturaDescripcion.textContent = desc

                        let ubi = data.name
                        Ubicacion.textContent = (ubi)

                        let vel =  data.wind.speed
                        vientoVelocidad.textContent = `${data.wind.speed} m/s`
            
                        switch(data.weather[0].main){
                            case 'Cloud':
                                icon.src = `animated/cloudy-day-1.svg`
                                console.log('limpio')
                                break;
                            case 'Clear':
                                icon.src = `animated/day.svg`
                                console.log('limpio')
                                break;
                            case 'Thunderstorm':
                                icon.src = `animated/thunder.svg`
                                console.log('tormenta')
                            break;
                            case 'Drizzle':
                                icon.src = `animated/rainy-1.svg`
                                console.log('llovizna') 
                            break;
                            case 'Rain':
                                icon.src = `animated/rainy-7.svg`
                                console.log('lluvia') 
                            break;
                            case 'Snow':
                                icon.src = `animated/snowy-6.svg`
                                console.log('Nieve') 
                            break;
                            case 'Atmosphere':
                                icon.src = `animated/weather.svg`
                                console.log('Admosfera') 
                            break;
                            default:
                                icon.src = `animated/day.svg`
                                console.log('por defecto')
                        }
                    })
                    .catch( error => {
                        console.log(error)
                    })
            }
            
            obtenerDatos(ubiPromt)
        })    
    }
})
