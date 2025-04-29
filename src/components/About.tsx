import myPhoto from "../assets/myphoto.jpg";
import cvFile from "../assets/cv.pdf";

const About = () => {
    return (
        <section
            id="aboutme"
            className="px-[10%] py-[4%] bg-zambelli-sec-black flex justify-center"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                <div className="flex justify-center md:justify-center w-full md:w-1/2">
                    <img
                        src={myPhoto}
                        alt="Uma foto minha"
                        className="max-w-[400px] w-full rounded-xl shadow-lg border-4 border-zambelli-purple transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-zambelli-purple/30"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold py-5 text-center md:text-left">Sobre mim</h2>

                    <p className="text-zambelli-grey mb-6 text-center md:text-left">
                        🚀 <strong>Olá, eu sou o Victor!</strong> Sou apaixonado por programação desde os 16 anos, desde então venho explorando cada linha de código como uma nova oportunidade de criar algo incrível.
                    </p>

                    <p className="text-zambelli-grey mb-6 text-center md:text-left">
                        💻 Já desenvolvi <strong>diversos projetos próprios e SaaS</strong>, sempre focando em entregar valor real e funcionalidade. Um dos meus principais destaques foi a criação de um <strong>servidor de FiveM</strong> que alcançou <strong>mais de 100 jogadores ativos diariamente</strong>, construindo uma comunidade engajada e sólida.
                    </p>

                    <p className="text-zambelli-grey mb-6 text-center md:text-left">
                        🛠 Além disso, administro uma <strong>loja especializada em FiveM e RedM</strong>, onde aplico tanto conhecimentos técnicos quanto visão de negócio, conectando o universo gamer à inovação.
                    </p>

                    <p className="text-zambelli-grey mb-6 text-center md:text-left">
                        🚀 Agora, estou pronto para um novo desafio: <strong>colaborar com uma empresa inovadora</strong>, onde possa crescer, contribuir com minhas habilidades e continuar aprendendo todos os dias.
                    </p>

                    <p className="text-zambelli-grey mb-6 text-center md:text-left">
                        🔍 Se você busca alguém com <strong>mentalidade prática, espírito empreendedor</strong> e verdadeira paixão por tecnologia, essa é a nossa conexão certa.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start">
                        <a
                            href={cvFile}
                            download="Currículo_VictorZambelli"
                            className="bg-zambelli-purple text-white font-semibold text-base px-6 py-3 rounded-lg mr-4 mt-4 border-3 border-zambelli-light-black transition-all duration-300 hover:scale-105 hover:bg-zambelli-purple/90 hover:shadow-md"
                        >
                            Currículo PDF
                        </a>

                        <a
                            href="mailto:zambelli.vic@gmail.com"
                            className="bg-zambelli-purple text-white font-semibold text-base px-6 py-3 rounded-lg mt-4 border-3 border-zambelli-light-black transition-all duration-300 hover:scale-105 hover:bg-zambelli-purple/90 hover:shadow-md"
                        >
                            Contato Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
