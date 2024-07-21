let input = document.getElementById("in");




async function weather() {
    let  apiUrl = `https://ensemble-api.open-meteo.com/v1/ensemble?latitude=${input.value}&longitude=13.41&hourly=temperature_2m&models=icon_seamless`;

  try{
      const link = await fetch(apiUrl)

      const data = await link.json()
      console.log(typeof data); 
         
  }
  catch{
    console.error("error");
  }

};