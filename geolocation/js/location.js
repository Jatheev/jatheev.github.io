let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(position){
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")

            elLat.innerHTML = "Latitude: " + position.coord.latitude;
            elLong.innerHTML = "Longitude: " + position.coord.longitude;
        })
    } else {
        alert("Geolocation is not supported!")
    }
})