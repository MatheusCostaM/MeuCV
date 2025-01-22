import { useState } from 'react';
import styled, { ThemeConsumer } from "styled-components";
import Text from '../Text';

const Menu = styled.div`

display: flex;
flex-direction: ${({ $posicao }) => (($posicao == "horizontal") ? "row" : "column")};
justify-content: space-around;
align-items: center;
width: auto;
height: auto;

`
const Item = styled.a`
  h2 {
    color: ${({ $isAtual, theme }) => ($isAtual ? theme.corPrincipal : theme.text)};
    transition: color 0.3s ease;
  }
`;

const ItemMenu = ({ children, onClick, isAtual }) => {
    return (
        <Item onClick={onClick} $isAtual={isAtual}><Text tipoText="titulo3">{children}</Text></Item>
    );
}

export default ({ children, $posicao }) => {

    const [atualItem, setAtualItem] = useState(null);

    const trocaAtual = (index) => {
        setAtualItem(index);
    };

    return (
        <Menu $posicao={$posicao}>
            {children.map((item, index) => (
                <ItemMenu
                    id={index}
                    isAtual={atualItem === index}
                    onClick={() => trocaAtual(index)}
                >
                    {item}
                </ItemMenu>
            ))
            }
        </Menu >
    );
}
