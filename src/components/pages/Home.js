import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
	return (
		<section className={styles.container}>
			<h1 className={styles.titulo_home}>
				Bem vindo ao <span className={styles.destaque_home}>Costs</span>
			</h1>
			<p className={styles.subtitulo_home}>
				Comece a gerenciar os seus projetos agora mesmo!
			</p>
			<LinkButton to="/newproject" text="Criar Projeto" />
			<img src={savings} alt="Costs" />
		</section>
	);
}
export default Home;
