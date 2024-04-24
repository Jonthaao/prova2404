import axios from "axios";

const url = "https://rvh98qbf-44321.brs.devtunnels.ms";
const ApiBolsaClient = axios.create({
    baseURL: url,
    headers:{
        "Content-Type":"application/json"
    }
})

export const BolsaCli =(abrev: string)=>{
    return ApiBolsaClient.get<any>(`${url}/Share/${abrev}`)
}