import { useEffect, useState } from "react";
import { BolsaRequestProps } from "../../Interfaces/BolsaProps/BolsaRequestProps";
import { BolsaCli } from "../../Services/BolsaClient";

const BolsaClient: React.FC<BolsaRequestProps> = ({abrev}) =>{

    const[bolsa, setBolsaData] = useState<any | null>(null);
    const[loading, setLoading] = useState<boolean | null>(true);
    const[error, setError] = useState<string | null>(null);

    useEffect(() =>{

       BolsaCli(abrev)
       .then((response)=>{
        setBolsaData(response.data);
        setLoading(false);
       })
       .catch((err) =>{
        setError(err.message);
        setLoading(false);
       });
    }, [abrev]);
    if(loading) return <div> Loading . . .</div>;
    if(error) return <div>Error: {error}</div>



    return (
        <>
       
        <div className="conteudo">
            <img className="logo" src={bolsa?.logourl} alt={`${abrev}'s avatar`} width={400} />
            <h1>{bolsa?.symbol}</h1>
            <h1>{bolsa?.shortName}</h1>
            <h2>Preço de Mercado: {bolsa?.regularMarketPrice}</h2>
            <h3>Moeda: {bolsa?.currency}</h3>
            <h3>Nome: {bolsa?.longName}</h3>
            <h4>Média 200 dias: {bolsa?.twoHundredDayAverage}</h4>
        </div>
        </>
    );

};

export default BolsaClient;