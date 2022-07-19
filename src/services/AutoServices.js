import axios from 'axios';

const baseUrl = "http://localhost:9080/api"

const getAll = async()=>{
    const res = await axios.get(baseUrl + "/obtener/autos");
    //await axios.get(localhost:9080/api/obtener/autos)
    console.log(res.data)
    return res.data;
}

export {getAll}