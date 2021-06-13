const inquirer = require('inquirer');
const cTable = require('console.table');

// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);

// Inital Prompt - Main Menu
const promptUser = () => {
    inquirer

        // Prompt the user
        .prompt({
            type: 'list',
            name: 'begin choices',
            message: 'What would you like to do? (Select on of the following)',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Update Employee Role', 'View Departments', 'Add Department', 'View Roles', 'Add Role', 'View totalized budget', 'I am finished']
        })
        // Take the data and use switch statements to decide what to do per option
        .then((data) => {
            switch (data['begin choices']) {
                case 'View All Employees':
                    viewAllEmp();
                    break;

                case 'View All Employees By Department':
                    viewEmpByDep();
                    break;

                case 'View All Employees By Manager':
                    viewEmpByMngt();
                    break;

                case 'Add Employee':
                    addEmp();
                    break;

                case 'Update Employee Role':
                    upEmp();
                    break;

                case 'View Departments':
                    viewDep();
                    break;

                case 'Add Department':
                    addDep();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'View totalized budget':
                    addTotalByDep();
                    break;
                    
                case 'I am finished':
                    break;
            }
        })
};


module.exports = { promptUser }

const { viewAllEmp, viewEmpByDep, viewEmpByMngt, addEmp, upEmp } = require('./lib/employee');
const { viewDep, addDep } = require('./lib/department');
const { viewRoles, addRole } = require('./lib/roles');
const { addTotalByDep } = require('./lib/calculations');

promptUser();