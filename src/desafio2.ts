// Como podemos melhorar esse código usando TS? 

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

// forma errada
/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz" */

//forma melhorada
let pessoa1: Humano = {         
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

//forma errada
/*let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";*/ 

//forma melhorada
let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

//forma errada
/*
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
*/ 

//forma melhorada
let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

/*forma errada
let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

//forma melhorada
let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}