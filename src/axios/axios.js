import axios from "axios";

const api = axios.create({
    baseURL: "https://io.adafruit.com/api/v2/.../feeds/",
    headers:{
        accept: "application/json",
        "Content-Type" : "application/json",
        "X-AIO-Key":"..."
    },
});

const sheets = {
    toggleLED: (stateLED) => api.post("botaoled2/data", stateLED),
};

export default sheets;