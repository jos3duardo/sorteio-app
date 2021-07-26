import React, {useEffect, useState} from "react";

import api from "../../services/api";

interface IResultado {
    id: string,
    resultado: any,
    total_nomes: number,
    data: string,
    tipo: string,
    nomes_no_resultado?: number
    intervalo?: string
    numeros_no_sorteio?: number
}

interface IRouteParams {
    match: {
        params: {
            tipo: string
            id: string
        }
    }
}

const ResultadoNome: React.FC<IRouteParams> = ({match}) => {
    const {tipo, id} = match.params;
    const [resultado, setResultado] = useState<IResultado>()

    useEffect(() => {
        api.get(`${tipo}/${id}`)
            .then((response) => {
                setResultado(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [id, tipo])

    return (
        <div className="row">
            <div className="card mt-4">
                {resultado &&
                <div className="card-body">
                    <h1>{resultado?.tipo}</h1>
                    <p><b>Data e hora do sorteio:</b> {resultado?.data}</p>
                    {tipo === 'numero' &&
                    <div>
                        <p><b>Números sorteados:</b> {resultado?.numeros_no_sorteio} </p>
                        <p><b>Intervalo:</b> {resultado?.intervalo}</p>
                    </div>
                    }
                    {tipo === 'nome' &&
                    <div>
                        <p><b>Quantidade de nomes no resultado: </b>{resultado?.nomes_no_resultado}</p>
                        <p><b>Quantidade de nomes no sorteio: </b> {resultado?.total_nomes} </p>
                    </div>
                    }
                    <div className="alert alert-warning" role="alert">
                        <b>Resultado: </b> {resultado?.resultado}
                    </div>
                </div>
                }

                {!resultado &&
                <div className="card-body center">
                    <h1>Nenhum resultado encontrado</h1>
                </div>
                }
            </div>

            <div className="row mt-3">
                <a href="/" className={"btn btn-primary"}>Inicio</a>
            </div>
        </div>
    )
}

export default ResultadoNome