import S from './doados.module.scss'
import livro from '../../assets/livro.png'

export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={livro} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={livro} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}