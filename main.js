let form = document.querySelector('#FormData')

const getData = async() =>{
    let season=document.querySelector("#year").value;
    let round=document.querySelector("#round").value;
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    return response.data
}

const DOM_ELEMENTS = {
    racer_data:'#racer-data'
}

form.addEventListener('submit',(event)=>{
    let season=document.querySelector("#year").value;
    let round=document.querySelector("#round").value;
    event.preventDefault()
    return season,round
})

const create_list = (position,name,nationality,sponsor,points) => {
    const html= `<a href="#" class="list-group-item list-group-item-action list-group-item-light" style="justify-content:space-between"> ${position} ${name} ${nationality} ${sponsor} ${points} </a>`;
    document.querySelector(DOM_ELEMENTS.racer_data).insertAdjacentHTML('beforeend',html)
}

const load_data= async() => {
    const racers_data= await getData();
    let racers = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(racers)
    for (i = 0; i < 10; i++){
            // first and last names
            let full_name = first_name + " " + last_name
            let display_name = document.createElement("td")
            console.log(display_name)
            display_name.innerHTML = full_name
            document.querySelector(`#table-row-${i}`).append(display_name)

            // nationality
            let nationality = racers[i].Driver.nationality
            let display_nationailty = document.createElement("td")
            console.log(display_name)
            display_nationailty.innerHTML = nationality
            document.querySelector(`#table-row-${i}`).append(display_nationailty)

            // sponsor
            let sponsor = racers[i].Constructors[0].name
            let display_sponsor = document.createElement("td")
            console.log(display_sponsor)
            display_sponsor.innerHTML = sponsor
            document.querySelector(`#table-row-${i}`).append(display_sponsor)

            // points
            let points = racers[i].points
            let display_points = document.createElement("td")
            console.log(display_points)
            display_points.innerHTML = points
            document.querySelector(`#table-row-${i}`).append(display_points)
    }
}