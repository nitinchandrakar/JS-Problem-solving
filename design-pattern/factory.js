function Factory(){
    let emp;

    this.createEmp = function(type){
        if(type=='fulltime'){
            emp = new FullTimeEmp()
        }else if(type=='parttime'){
            emp = new PartTimeEmp()
        }
        emp.type = type

        emp.say = function(){
            console.log("employee type",this.type, this.hour);
        }

        return emp;
    }
}

function FullTimeEmp(){
    this.hour = '20$';
}

function PartTimeEmp(){
    this.hour = '10$';
}

function main(){
    const empFactory = new Factory();
    const emp1 = empFactory.createEmp('fulltime');
    const emp2 = empFactory.createEmp('parttime');

    emp1.say()
    emp2.say()
}

main();