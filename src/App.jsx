import './App.css'
import React from 'react'

import Primeiro from './componets/basicos/Primeiro'
import ComParamentro from './componets/basicos/ComParametros'
import Fragmento from './componets/basicos/Fragmento'
import Aleatorio from './componets/basicos/Aleatorio'
import Card from './componets/Layout/Card'
import FamiliaMembro from './componets/basicos/FamiliaMembro'
import Familia from './componets/basicos/Familia'
import ListaAluno from './componets/Repetição/ListaAlunos'
import TabelasProdutos from './componets/Repetição/TabelasProdutos'
import ParOuImpar from './componets/Condicional/ParOuImpar'
import UsuarioInfo from './componets/Condicional/UsuarioInfo'
import DiretaPai from './componets/Comunicação/DiretaPai'
import IndiretaPai from './componets/Comunicação/IndiretaPai'
import Input from './componets/Formulario/Input'
import Contador from './componets/Contador/Contador'
import Mega from './componets/Mega/Mega'


export default (props) =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card title="#13 - Mega" color="#FF69B4">
                <Mega></Mega>
            </Card>
            <Card title="#12 - Contador (Input)" color="#E6E6FA">
                <Contador numeroinicial={0}></Contador>
            </Card>
            <Card title="#11 - Componente Controlado (Input)" color="#581845">
               <Input></Input>
            </Card>
            <Card title="#10 - Comunicação Indireta" color="#8F149C">
               <IndiretaPai></IndiretaPai>
            </Card>
            <Card title="#09 - Comunicação Direta" color="#05FF5C">
               <DiretaPai></DiretaPai>
            </Card>
            <Card title="#08 - Renderização Condicional" color="#2BFF05">
                <ParOuImpar numero={10}/>
                <UsuarioInfo usuario={{nome: 'Douglas'}}/>
            </Card>
            <Card title="#07 - Lista de Alunos" color="#581845">
                <TabelasProdutos></TabelasProdutos>
            </Card>
            <Card title="#06 - Lista de Alunos" color="#BBBBBB">
                <ListaAluno></ListaAluno>
            </Card>
            <Card title="#05 - Componentes com filhos" color="#D44507">
                <Familia sobrenome="Santos">
                    <FamiliaMembro nome="Celia " />
                    <FamiliaMembro nome="Alessandro " />
                    <FamiliaMembro nome="Douglas " />
                </Familia>
            </Card>
            <Card title="#04 - Desafio Aleatório" color="#33FFDD">
                <Aleatorio min={1} max={10} />
            </Card>
            <Card title="#03 - Fragmento" color="#FF33D1">
                <Fragmento />
            </Card>
            <Card title="#02 - Com Parametros" color="#FFF333">
                <ComParamentro
                    Title="Situação do Aluno!"
                    aluno="Douglas" nota="8.1" />
            </Card>
            <Card title="#01 - Primeiro Componente"color="#FF0000">
                <Primeiro></Primeiro>
            </Card>
            
        </div>

    </div>