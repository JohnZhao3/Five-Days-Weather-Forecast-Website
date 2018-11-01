import axios from 'axios';

const API_KEY = '9c29aff86a3f37c89c1aa7c6ff3f6281';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},nz`;
  const request = axios.get(url);

  console.log("Haha,Request:  ", request);

  return {
    type: FETCH_WEATHER,
    //Take data which promose resolved by redux promise.
    //request is a promise. It will be return by this action and be imported
    //to reducer_weather,  Redux promise will see this action , it looks at specifically
    //the payload property, if the payload is a promise, Redux promise stops the action entirely,
    //then once the request finishes it dispatches a new action of the same type but with a payload
    //of the resolved request. In other words, it unwraps the promise for us, then send to the reducer
    // as tne payload.

    //Does the action have a promise as a payload? => Yes => Stop this action =>
    //After promise resolves( After the ajax request is finished) create a new action
    //and send it to reducers.  Reduce will say: Great, just normal data, I can handle this.
    payload: request
  }
}
