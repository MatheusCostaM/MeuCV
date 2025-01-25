import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import Text from '../Text';
import Tag from '../Tag';
import foto from '../../assets/img/foto.svg';
import Neon from '../Neon';
import Projeto from '../Projeto';
import MoveSimple from '../MoveSimple';
import Vidro from '../Vidro';
import { Projetos, Formacoes } from '../Dados';

const Dashboard = styled.div`

width:82vw;
height: auto;
z-index: 1;

@keyframes appear {
    from{
        opacity: 0;
        transform: translateY(300px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }



`


const Foto = styled.img`

margin-left: 2vw;
margin-right: 2vw;
box-shadow: 0px 0px 5px 3px #00cad1;
border-radius: 25%;

`

const Separador = styled.div`

height: 0.3vh;
width: 30vw;
background-color: white;
margin: 1vh;

`;

const Formacao = styled.div`


width: 60%;
margin: 2vw;

img{
    max-width: 200px;
    margin: 2vw;
}

div{
    justify-content: space-around !important;
}


`;

const CaixaText = styled.div`

margin: 2vw;
width:70%;

`

const Animador = styled.div`

width: 100%;

animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

`

export default ({ abrir }) => {

    return (
        <Dashboard>
            <Animador>
                <Container id="apresentacao">
                    <div>
                        <section>
                            <Neon><Separador /></Neon>
                            <Text tipoText="titulo1">MATHEUS COSTA</Text>
                            <Text tipoText="titulo2">Desenvolvedor Full-Stack</Text>
                            <Text tipoText="titulo3">Transforme seu projeto em realidade com soluções <br /> Full Stack de qualidade.</Text>
                            <Neon><Separador /></Neon>
                            <Text>Tecnologias que domino.</Text>
                            <div>
                                <Tag abrir={abrir} tipo="JavaScript" />
                                <Tag abrir={abrir} tipo="Node" />
                                <Tag abrir={abrir} tipo="React" />
                                <Tag abrir={abrir} tipo="Python" />
                                <Tag abrir={abrir} tipo="Php" />
                                <Tag abrir={abrir} tipo="MySql" />
                                <Tag abrir={abrir} tipo="Bootstrap" />
                                <Tag abrir={abrir} tipo="Css" />
                                <Tag abrir={abrir} tipo="Html" />
                            </div>
                        </section>
                        <section>
                            <Foto src={foto} />
                            <Text tipoText="titulo3">Clique nos Links</Text>
                            <div>
                                <MoveSimple><a target="_blank" href="https://linkedin.com/in/matheus-costa-magalhães-de-almeida-40714921a"><Tag tipo="Linkedin" /></a></MoveSimple>
                                <MoveSimple><a target="_blank" href="https://github.com/MatheusCostaM"><Tag tipo="Github" /></a></MoveSimple>
                            </div>
                        </section>

                    </div>
                </Container>
            </Animador>

            <Container id="projetos">
                {Projetos.map((projeto, index) => (
                    <Animador>
                        <Projeto nome={projeto.nome} key={index} abrir={abrir}></Projeto>
                    </Animador>
                ))}
            </Container>
            <Animador>
                <Container id="contato">
                    <Text>Entre em Contato e Vamos Trabalhar Juntos</Text>
                    <div>
                        <MoveSimple>
                            <Tag tipo="Whatsapp" />
                            <Tag tipo="Email" />
                        </MoveSimple>
                    </div>

                </Container>
            </Animador>
            <Container >
                <Animador>
                    <section>
                        <Text tipoText="titulo2">SOBRE MIM</Text>
                        <div id="sobre"></div>
                        <CaixaText>
                            <Text tipoText="titulo3">
                                Atualmente atuo na área administrativa de uma escola da Prefeitura de São
                                Bernardo do Campo. Estou em transição de carreira para a área de
                                tecnologia, um campo pelo qual tenho grande interesse. Além do
                                conhecimento adquirido na faculdade e em cursos especializados, estudo de
                                forma autodidata.
                            </Text>
                        </CaixaText>
                        <Text>Formação Acadêmica</Text>
                    </section>
                </Animador>

                {Formacoes.map((formacoes, index) => (
                    <Animador>
                        <Formacao key={index}>
                            <Vidro $bordaCurva={"20px"}>
                                <img src={formacoes.imagem} />
                                <section>
                                    <Text tipoText="titulo3">{formacoes.unidade}</Text>
                                    <Text tipoText="titulo3">{formacoes.tipo} - {formacoes.curso}</Text>
                                    <Text tipoText="titulo3">Data de início: {formacoes.dataIni}</Text>
                                    <Text tipoText="titulo3">Data de conclusão: {formacoes.dataFim}</Text>
                                </section>
                            </Vidro>

                        </Formacao >
                    </Animador>
                ))}

            </Container>
        </Dashboard>
    )

}