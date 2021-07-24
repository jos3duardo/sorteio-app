import React, {useCallback, useState} from "react";

import api from "../../services/api";

const Numero: React.FC = () => {

    const [numero, setNumero] = useState(1)
    const [inicio, setInicio] = useState(1)
    const [fim, setFim] = useState(100)

    const handleNumeroDigitado = useCallback((numero) => {
        console.log(numero)
        setNumero(numero)
    }, [])

    const handleInicioDigitado = useCallback((inicio) => {
        console.log(inicio)
        setInicio(inicio)
    }, [])

    const handleFimDigitado = useCallback((fim) => {
        console.log(fim)
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
                { headers: { Accept: `application/json`}
                  }
            ).then((response) => {
                alert('cadastro realizado com sucesso!')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <div className="row">
            <h1>Sorteio de números</h1>
            <p>Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
            <form onSubmit={e => { e.preventDefault(); }}>
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

                <button type={"submit"} className={"btn btn-primary"} onClick={ () => handleCadastro(numero,inicio,fim)}>
                    Salvar
                </button>
            </form>
        </div>
    )
}
export default Numero