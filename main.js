// racer example
let season = '2019'
let round = '2'

const racer_data = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data)

    console.log(`This is the given name from f1 racer ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}`)
}
