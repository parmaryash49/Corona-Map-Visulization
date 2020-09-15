function updateMap() {
    console.log("updating data....");
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                recovered=element.recovered;
                if (cases > 255) {
                    color= "rgb(255,0,0)";
                }
                else if (recovered>10){
                    color="green";
                }
                else {
                    color= `rgb(${cases},0,0)`;
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);

            });

        })
}
let interval=10000;
setInterval(updateMap,interval);
