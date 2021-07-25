import React, {useCallback, useEffect, useState} from "react";

import api from "../../services/api";

interface IResultado {
    id: string,
    resultado: any,
    total_nomes: number,
    data: string,
    tipo: string,
    nomes_no_resultado: number
}

interface IRouteParams {
    match: {
        params: {
            id: string
        }
    }
}

const ResultadoNome: React.FC<IRouteParams> = ({ match }) => {
    const {id} = match.params;
    const [resultado, setResultado] = useState<IResultado>()

    useEffect(() => {
        api.get('/nome/'+id)
            .then((response) => {
                setResultado(response.data)
                console.log(resultado?.resultado)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div className="row">
            <div className="row">
                <div className="card mt-4">
                    <h1>{resultado?.tipo}</h1>

                    <div className="card-body">
                        <p>Data e hora do sorteio: {resultado?.data}</p>
                        <p>Quantidade de nomes no resultado: {resultado?.nomes_no_resultado}</p>
                        <p>Resultado: {resultado?.resultado}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <a href="/" className={"btn btn-info"}>Inicio</a>
            </div>

        </div>

    )
}

export default ResultadoNome