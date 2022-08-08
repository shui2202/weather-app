var button = document.querySelector(".sumbit")
var inputvalue = document.querySelector(".inputvalue")
var temp = document.querySelector(".temp")
var ftemp = document.querySelector(".ftemp")
var desc = document.querySelector(".desc")
var icon = document.querySelector(".icon")
var city = document.querySelector(".city")
var feel = document.querySelector(".feel")

button.addEventListener("click", function(){
    fetch("https://api.weatherapi.com/v1/current.json?key=0acee323e9154b00ab5165811221807&q="+inputvalue.value+"&aqi=no")
        .then(response => response.json())
        .then(data => {

            try{
                var cityvalue = data["location"]["name"]
                var cityin = "Weather in "
                var comma = ", "
                var region = data["location"]["region"]
                var country = data["location"]["country"]
                city.innerHTML = cityin + cityvalue + comma + region + comma + country
    
                var tempvalue = data["current"]["temp_c"]
                var ftempvalue = data["current"]["temp_f"]
    
    
                let fftempvalue = ftempvalue + "°F"
                let ttempvalue = tempvalue + "°C"
                let degree = "Temperature: "
                let p1 = "("
                let p2 = ")"
                temp.innerHTML = degree + fftempvalue + p1 + ttempvalue + p2
        
    
                var descvalue = data["current"]["condition"]["text"]
                var con = "Condition: "
    
                desc.innerHTML = con + descvalue
    
                var iconimage = data["current"]["condition"]["icon"]
    
                icon.src = iconimage
            }
            catch(err){
                city.innerText = "No matching location found."
                temp.innerText = ""
                desc.innerText = ""
                icon.src = ""
                alert("No matching location found.")
            }
        })
    
    

        inputvalue.focus()

    
})