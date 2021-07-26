import React, {useCallback, useState} from "react";

interface ILista {
    nome:string,
    email:string
}

const Amigo: React.FC = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [lista, setLista] = useState<ILista[]>([])

    const handleNomeDigitado = useCallback((nome) => {
        setNome(nome)
    }, [])

    const handleEmailDigitado = useCallback((email) => {
        setEmail(email)
    }, [])

    const handleLista = useCallback(( nome,email ) => {

        if (nome && email){
            setLista([...lista, { nome, email }])
            setNome('')
            setEmail('')
        }else{
            alert('Preencha os campos corretamete')
        }
    }, [lista])

    return (
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
                <table className="table mt-2">
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
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{lista.nome}</td>
                            <td>{lista.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button type={"submit"} className="btn btn-primary mt-3">
                    Novo
                </button>
            </form>

            <div className="row">
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Como fazer um Amigo Secreto</h3>
                        <p>1. Informe o nome e o email de cada participante do sorteio.</p>
                        <p>2. Clique em sortear amigo secreto. Pronto!</p>
                        <p>3. O site irá realizar um sorteio aleatório, gerar o resultado e enviar o amigo sorteado para
                            cada email informado.</p>

                        <h3>Sorteio de Amigo Secreto</h3>
                        <p>
                            O sorteio de amigo secreto é uma brincadeira popular de troca de presentes entre pessoas. A
                            pessoa na qual um participante irá presentear é definida por um sorteio aleatório, o
                            resultado do sorteio deve ser mantido em segredo até o dia da troca de presentes.
                        </p>
                        <p>
                            O encontro marcado para a troca de presentes do amigo secreto é marcado por surpresas e
                            jogos de advinhação. O participante a revelar o seu amigo secreto irá dar pistas para que
                            outros participantes tentem adivinhar quem é o seu amigo secreto, tornando assim o evento
                            descontraido e misterioso.
                        </p>
                        <p>
                            O Amigo Secreto é uma brincadeira muito comum em finais de ano, principalmente na época do
                            Natal realizado com amigos e familiares, também muito utilizado em empresas e escolas pelos
                            próprios funcionários ou alunos. Realizar um amigo secreto é muito divertido, crie o seu
                            agora.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Amigo