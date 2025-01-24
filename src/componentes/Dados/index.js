import JavaScript from '../../assets/img/js.svg';
import Bootstrap from '../../assets/img/bootstrap.svg';
import Css from '../../assets/img/css.svg';
import Html from '../../assets/img/html.svg';
import MySql from '../../assets/img/mysql.svg';
import Node from '../../assets/img/node.svg';
import Php from '../../assets/img/php.svg';
import Python from '../../assets/img/py.svg';
import ReactJS from '../../assets/img/react.svg';
import Linkedin from '../../assets/img/linkedin.svg';
import Github from '../../assets/img/github.svg';
import Link from '../../assets/img/link.svg';
import Email from '../../assets/img/email.svg';
import Whatsapp from '../../assets/img/whatsapp.svg';

export const Tags = [
    { nome: "JavaScript", image: JavaScript, descricao: "Linguagem de programação usada para criar interatividade em páginas web.", nivel: 3 },
    { nome: "Bootstrap", image: Bootstrap, descricao: "Framework front-end para desenvolvimento de sites responsivos e móveis.", nivel: 1 },
    { nome: "Css", image: Css, descricao: "Linguagem de estilo usada para definir a aparência e o layout de páginas web.", nivel: 3 },
    { nome: "Html", image: Html, descricao: "Linguagem de marcação padrão para criar páginas web.", nivel: 3 },
    { nome: "MySql", image: MySql, descricao: "Sistema de gerenciamento de banco de dados relacional popular e open-source.", nivel: 2 },
    { nome: "Node", image: Node, descricao: "Ambiente de execução JavaScript no lado do servidor.", nivel: 2 },
    { nome: "Php", image: Php, descricao: "Linguagem de programação amplamente usada para desenvolvimento web.", nivel: 1 },
    { nome: "Python", image: Python, descricao: "Linguagem de programação versátil e popular para diversas áreas, como web, data science e automação.", nivel: 2 },
    { nome: "React", image: ReactJS, descricao: "Biblioteca JavaScript para construir interfaces de usuário dinâmicas.", nivel: 2 },
    { nome: "Linkedin", image: Linkedin },
    { nome: "Github", image: Github },
    { nome: "Link", image: Link },
    { nome: "Whatsapp", image: Whatsapp },
    { nome: "Email", image: Email },
];


import financasImg from "../../assets/img/finance.png";
import portifolioImg from "../../assets/img/Portifolio.png";


export const Projetos = [
    {
        nome: "Site de Finanças",
        descricao: "eafoknsadfnsaokfnlksdnflknsdlkfn fdsafjnpsdanfkvnaskld dfvkjasnvnsdo",
        site: "http://financemylife.byethost13.com/",
        image: financasImg,
        git: "https://github.com/MatheusCostaM/FinanceMyLife",
        tecnologias: ["JavaScript", "Css", "Html", "Php", "MySql"],
    },

    {
        nome: "Portifólio",
        descricao: "dfafasfsdafafdadsfasdfasdfsad",
        site: "http://localhost:5173/",
        image: portifolioImg,
        git: "https://github.com/MatheusCostaM/MeuCV",
        tecnologias: ["React", "Node", "Bootstrap", "JavaScript", "Css", "Html"],
    },
];

import fatec from "../../assets/img/fatec.svg";
import alura from "../../assets/img/alura.svg";
import senai from "../../assets/img/senai.svg";
import senac from "../../assets/img/senac.svg";

export const Formacoes = [
    {
        curso: "Informática para Negócios",
        tipo: "Tecnólogo",
        imagem: fatec,
        unidade: "FATEC SBC",
        dataIni: "07/2022",
        dataFim: "06/2025",
    },
    {
        curso: "Python - Formação completa",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "PHP",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "JavaScript",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "Web Designer - Frontend",
        tipo: "Curso",
        imagem: senai,
        unidade: "SENAI - Almirante Tamandaré",
        dataIni: "2022",
        dataFim: "2022",
    },
    {
        curso: "Lógica de Programação",
        tipo: "Curso",
        imagem: senac,
        unidade: "SENAC SBC",
        dataIni: "2020",
        dataFim: "2020",
    }
];

