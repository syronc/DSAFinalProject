// Take in Steam ID, then place it into the URL of the call
// Then, do work with the array and return it
import axios from "axios";

// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=9137093EC76DAAFA5DA74984E0E94C39&steamids=76561198068921858
async function retrieveNodes(id) {
  const urlBeginning = "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=";
  const steamKey = "9137093EC76DAAFA5DA74984E0E94C39";
  const urlSecond = "&steamid="
  const urlEnd = "&relationship=friend";
  const URL = urlBeginning + steamKey + urlSecond + id + urlEnd;

  return axios.get(URL).then(res => res.data.friendslist.friends)
          .catch(error => [])

}
export default retrieveNodes