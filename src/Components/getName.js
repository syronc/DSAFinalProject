// Take in Steam ID, then place it into the URL of the call
// Then, do work with the array and return it
import axios from "axios";

async function getName(id) {
    const urlBeginning = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=";
    const steamKey = "9137093EC76DAAFA5DA74984E0E94C39";
    const urlSecond = "&steamids="
    const URL = urlBeginning + steamKey + urlSecond + id;

    return axios.get(URL).then(res => res.data.response.players[0].personaname)
        .catch(error => "error")

}
export default getName