import axios from 'axios';

const URL = 'https://tile.openweathermap.org/map/temp_new/10/20/20.png';
const API_KEY = 'ad996ab6f5b29b063a5c9bc702f7aac5';

export const fetchMap = async () => {
    const { data } = await axios.get(URL, {
        params: {
            appid: API_KEY,
        }
    });

    return data;
}