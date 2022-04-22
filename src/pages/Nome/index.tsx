import React, {useCallback, useState} from "react";

import api from "../../services/api";

const Nome: React.FC = () => {
    const [quantidade, setQuantidade] = useState(1)
    const [nomes, setNomes] = useState('')
    const [link, setLink] = useState('')
    const [resultado, setResultado] = useState('')


    const handleQuantidadeDigitado = useCallback((quantidade) => {
        setQuantidade(quantidade)
    }, [])

    const handleNomeDigitado = useCallback((nomes) => {
        setNomes(nomes)
    }, [])


    const handleCadastro = useCallback((
        quantidade,
        nomes,
    ) => {
        setLink('')
        setResultado('')

        if (!(nomes)) {
            alert('Informes os nomes')
        } else {
            let listaNomes = nomes.split("\n");

            api.post(`nome`,
                {
                    quantidade_nomes: quantidade,
                    nomes: listaNomes,
                },
                {
                    headers: {Accept: `application/json`}
                }
            ).then((response) => {

                const dados = response.data

                setResultado(dados.resultado)
                setLink('https://sorteio.space/resultado/nome/' + dados.id)
            })
                .catch((err) => {
                    console.log(err.response)
                    alert('Informe valores corretos nos campos')
                });
        }

    }, [])

    return (
        <div className="row">
            <div className="row">
                <h1>Sortear Nomes</h1>
                <form onSubmit={e => {
                    e.preventDefault();
                }}>
                    <div className="mb-3">
                        <label className="form-label">O resultado terá quantos números?</label>
                        <input
                            className={"form-control"}
                            type="number"
                            onChange={(e) => handleQuantidadeDigitado(e.target.value)}
                            required
                            value={quantidade}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Nomes</label>
                        <textarea className="form-control"
                                  onChange={(e) => handleNomeDigitado(e.target.value)}
                                  required
                                  value={nomes}
                        >{nomes}</textarea>
                    </div>

                    <button
                        type={"submit"}
                        className={"btn btn-primary"}
                        onClick={() => handleCadastro(quantidade, nomes)}
                    >
                        Sortear
                    </button>
                </form>
            </div>

            {link &&
                <div className="alert alert-primary mt-3" role="alert">
                    {link &&
                        <p>Resultado: {resultado}</p>
                    }

                    {link &&
                        <a href={link}>Link do resultado: {link}</a>
                    }
                </div>
            }

            <div className="row">
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Como fazer um sorteio de nomes</h3>
                        <p>1. Informe quantos nomes você quer no resultado do sorteio. </p>
                        <p>2. Insira os nomes que você quer sortear, um nome por linha.</p>
                        <p>3. Clique em sortear nomes. Pronto!</p>

                        <h3>Sorteio de Nomes</h3>
                        <p>
                            O sorteio de nomes é muito útil quando você precisa de um resultado de sorteio imparcial,
                            realizado por um site que oferece um sistema completo e que possibilite você exibir o
                            resultado do sorteio para terceiros.

                            Um sorteio entre amigos, uma gincana na escola ou na faculdade, rifa, são exemplos ótimas
                            opções para o uso do sorteio de nomes, qualificando assim um resultado idôneo, livre de
                            vícios e interesses pessoais.

                            Qualquer pessoa ou instituição pode utilizar o nosso serviço de sorteio de nomes
                            gratuitamente. Após o sorteio, um link será gerado com o resultado para repassar para outras
                            pessoas caso assim deseje. O resultado do sorteio ficará disponível no site por tempo
                            indeterminado podendo ser consultado a partir de qualquer equipamento ligado a Internet.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Nome