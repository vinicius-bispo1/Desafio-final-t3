import S from './queroDoar.module.scss' // Importa o módulo de estilos CSS
import livro from '../../assets/Vector.png' // Importa a imagem do livro
import axios from 'axios' // Importa a biblioteca Axios para requisições HTTP
import {useState} from 'react' // Importa o hook useState do React

export default function QueroDoar(){

    // Estados para armazenar os valores dos campos do formulário
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    // Função assíncrona para enviar os dados para a API
    const enviarDados = async()=>{
        
        const urlApi = "https://teste-deploy-bkai.onrender.com/doar" // URL da API

        // Objeto contendo os dados do livro
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar) // Envia os dados para a API via POST

        alert("Livro cadastrado!!") // Exibe um alerta informando o sucesso da operação

        // Reseta os campos do formulário
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    // Funções para capturar e atualizar os estados com os valores inseridos pelo usuário
    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value) // Exibe o valor no console para debug
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }

    return(
        <section className={S.principal}> {/* Contêiner principal estilizado */}
            <section className={S.container}> {/* Contêiner interno */}
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=> e.preventDefault()}> {/* Previne o comportamento padrão do formulário */}
                    <div>
                        <img src={livro} alt="" /> {/* Exibe a imagem do livro */}
                        <h3>Informações do Livro</h3>
                    </div>
                    {/* Campos do formulário */}
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria} />
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
                    <input className={S.doar} type="submit" value="Doar" onClick={enviarDados} /> {/* Botão de submissão */}
                </form>
            </section>
        </section>
    )
}
