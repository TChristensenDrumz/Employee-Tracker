const actions = [
    {
        type: "list",
        message: "What would you like to do?",
        choices: [
                    'ADD DEPARTMENT', 
                    'ADD ROLE', 
                    'ADD EMPLOYEE', 
                    'VIEW DEPARTMENTS', 
                    'VIEW ROLES', 
                    'VIEW EMPLOYEES', 
                    'UPDATE EMPLOYEE ROLE',
                    'EXIT'
                 ],
        name: "action"
    }
];

module.exports =  { actions }