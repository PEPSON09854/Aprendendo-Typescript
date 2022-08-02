// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";


// primeira forma de rodar  esse código  sem erros
const employee  = {
    code: 10,
    name: 'Carlos'
};

// segunda forma de rodar  esse código  sem erros
const employee1 : {code: number, name: string} = {
    code: 10,
    name: 'Carlos'
}

// terceira forma de rodar  esse código  sem erros
interface Employee  {  
    code: number,
    name: string
};

const employeeThis = {} as Employee ;
employeeThis.code = 10;
employeeThis.name = 'Carlos';

// quarta forma de rodar esse código sem erros
const employeeThis2: Employee  = {
    code: 10,
    name: 'Carlos'
}