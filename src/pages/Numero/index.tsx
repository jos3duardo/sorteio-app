import React, {useCallback, useState} from "react";

import api from "../../services/api";

const Numero: React.FC = () => {

    const [numero, setNumero] = useState(1)
    const [inicio, setInicio] = useState(1)
    const [fim, setFim] = useState(100)

    const [link, setLink] = useState('')
    const [resultado, setResultado] = useState('')

    const handleNumeroDigitado = useCallback((numero) => {
        setNumero(numero)
    }, [])

    const handleInicioDigitado = useCallback((inicio) => {
        setInicio(inicio)
    }, [])

    const handleFimDigitado = useCallback((fim) => {
        setFim(fim)
    }, [])


    const handleCadastro = useCallback((
        quantidade_numeros,
        inicio,
        fim,
    ) => {
        api.post(`numero`,
            {
                quantidade_numeros,
                inicio,
                fim,
            },
            {
                headers: {Accept: `application/json`}
            }
        ).then((response) => {
            const dados = response.data
            setResultado(dados.resultado)
            setLink('https://sorteio.jos3duardo.com.br/resultado/numero/' + dados.id)
        })
            .catch((err) => {
                alert('Confira os daoos do sorteio')
                console.error("ops! ocorreu um erro" + err.response.data);
            });
    }, [])

    return (
        <div className="row">
            <h1>Sorteio de números</h1>
            <p>Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o
                link com outras pessoas.</p>
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <div className="mb-3">
                    <label className="form-label">O resultado terá quantos números?</label>
                    <input
                        className={"form-control"}
                        type="number"
                        onChange={(e) => handleNumeroDigitado(e.target.value)}
                        required
                        value={numero}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Entre</label>
                    <input
                        className={"form-control"}
                        type="number"
                        onChange={(e) => handleInicioDigitado(e.target.value)}
                        required
                        value={inicio}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">E</label>
                    <input
                        className={"form-control"}
                        type="number"
                        onChange={(e) => handleFimDigitado(e.target.value)}
                        required
                        value={fim}
                    />
                </div>

                <button type={"submit"} className={"btn btn-primary"}
                        onClick={() => handleCadastro(numero, inicio, fim)}>
                    Novo
                </button>
            </form>

            {link &&
            <div className="alert alert-primary mt-3" role="alert">
                {link &&
                <p>Resultado: {resultado}</p>
                }

                {link &&
                <span>Link do resultado:<a href={link}> {link}</a></span>
                }
            </div>
            }

            <div className="row">
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Como fazer um sorteio de números</h3>
                        <p>1. Informe quantos números você quer no resultado do sorteio. Exemplo: 3 </p>
                        <p>2. Preencha qual o intervalo deve ser sorteado. Exemplo: entre 1 e 100</p>
                        <p>3. Clique em sortear números. Pronto!</p>

                        <h3>Sorteio de Números</h3>
                        <p>
                            O sorteio de números é muito útil quando você precisa de um resultado de sorteio imparcial,
                            realizado por um site que oferece um sistema completo e que possibilite você exibir o
                            resultado do sorteio para terceiros.
                        </p>
                        <p>
                            Um sorteio entre amigos, uma gincana na escola ou na faculdade, rifa, são exemplos ótimas
                            opções para o uso do sorteio de números, qualificando assim um resultado idôneo, livre de
                            vícios e interesses pessoais.
                        </p>
                        <p>
                            Qualquer pessoa ou instituição pode utilizar o nosso serviço de sorteio de números
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
export default Numero