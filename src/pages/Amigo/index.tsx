import React, {useCallback, useState} from "react";
import validator from 'validator'
import api from "../../services/api";

interface ILista {
    nome: string,
    email: string
}

const Amigo: React.FC = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [lista, setLista] = useState<ILista[]>([])
    const [showLista, setShowLista] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [resultado, setResultado] = useState(false)

    const handleNomeDigitado = useCallback((nome) => {
        setNome(nome)
    }, [])

    const handleEmailDigitado = useCallback((email) => {
        if (!validator.isEmail(email)) {
            setEmailError('Email invalido!')
        } else {
            setEmailError('')
        }
        setEmail(email)
    }, [])

    const handleLista = useCallback((nome, email) => {

        if (nome && validator.isEmail(email)) {
            setLista([...lista, {nome, email}])
            setNome('')
            setEmail('')
            setShowLista(true)
        } else {
            alert('Preencha os campos corretamete')
        }
    }, [lista])

    const handleCadastro = useCallback((
        lista,
    ) => {
        api.post(`amigo`,
            {
                amigos: lista
            },
            {
                headers: {Accept: `application/json`}
            }
        ).then((response) => {
            setResultado(true)
            setLista([]);
            setShowLista(false)
        })
            .catch((err) => {
                alert(err.response.data.errors.amigos)
            });
    }, [])


    return (
        <div className="row">
            {
                resultado &&
                <div className="row">
                    <div className="card mt-4">
                        <h3>Sortear Amigo Secreto</h3>
                        <div className="card-body">
                            <p>Obrigado por realizar o seu amigo secreto.</p>
                            <p>Os participantes receber??o um email para acessarem o resultado do sorteio.</p>
                        </div>
                        <div className="row mt-3">
                            <button className={"btn btn-primary"} onClick={() => setResultado(false)}>Novo</button>
                        </div>
                    </div>
                </div>
            }

            {
                !resultado &&
                <div className="row">
                    <h1>Sortear Amigo Secreto</h1>
                    <p>Informe os dados dos participantes.</p>
                    <form onSubmit={e => {
                        e.preventDefault();
                    }}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Nome</label>
                                <input
                                    type="text"
                                    onChange={(e) => handleNomeDigitado(e.target.value)}
                                    value={nome}
                                    className="form-control"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    onChange={(e) => handleEmailDigitado(e.target.value)}
                                    value={email}
                                    className="form-control"
                                />
                                <span style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                }}>{emailError}</span>
                            </div>

                            <div className="col mt-4">
                                <button
                                    type={"submit"}
                                    className={"btn btn-primary"}
                                    onClick={() => handleLista(nome, email)}
                                >
                                    Adicionar a lista
                                </button>
                            </div>

                        </div>
                        {
                            showLista &&
                            <table className="table mt-2 bg-white">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {lista.map((lista, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{lista.nome}</td>
                                        <td>{lista.email}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        }
                        {
                            showLista &&
                            <button
                                type={"submit"}
                                className="btn btn-warning mt-3"
                                onClick={() => handleCadastro(lista)}
                            >
                                Sortear amigo secreto
                            </button>
                        }
                    </form>
                </div>
            }

            <div className="row">
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Como fazer um Amigo Secreto</h3>
                        <p>1. Informe o nome e o email de cada participante do sorteio.</p>
                        <p>2. Clique em adicionar a lista.</p>
                        <p>3. Com a lista preenchida, clique em sortear amigo secreto. Pronto!</p>
                        <p>4. O site ir?? realizar um sorteio aleat??rio, gerar o resultado e enviar o amigo sorteado para
                            cada email informado.</p>

                        <h3>Sorteio de Amigo Secreto</h3>
                        <p>
                            O sorteio de amigo secreto ?? uma brincadeira popular de troca de presentes entre pessoas. A
                            pessoa na qual um participante ir?? presentear ?? definida por um sorteio aleat??rio, o
                            resultado do sorteio deve ser mantido em segredo at?? o dia da troca de presentes.
                        </p>
                        <p>
                            O encontro marcado para a troca de presentes do amigo secreto ?? marcado por surpresas e
                            jogos de advinha????o. O participante a revelar o seu amigo secreto ir?? dar pistas para que
                            outros participantes tentem adivinhar quem ?? o seu amigo secreto, tornando assim o evento
                            descontraido e misterioso.
                        </p>
                        <p>
                            O Amigo Secreto ?? uma brincadeira muito comum em finais de ano, principalmente na ??poca do
                            Natal realizado com amigos e familiares, tamb??m muito utilizado em empresas e escolas pelos
                            pr??prios funcion??rios ou alunos. Realizar um amigo secreto ?? muito divertido, crie o seu
                            agora.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Amigo