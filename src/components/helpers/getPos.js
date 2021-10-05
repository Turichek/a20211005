export default function GetPos(city,setPos) {
    async function getCity(str) {
        await fetch(str)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data, "fetch");
                setPos(data);
            });
    }

    function success(position) {
        const pos = position.coords;
        const req_str = "https://api.openweathermap.org/data/2.5/weather?lat=" +
            pos.latitude +
            "&lon=" +
            pos.longitude +
            "&lang=ru&appid=a08bc186abca0975ed29460a754a1252"

        if(city === -1){
            getCity(req_str)
        }
        
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
}