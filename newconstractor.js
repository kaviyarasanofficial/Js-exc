
//New Constrator method return value store one variable then print

class friend{
    constructor(a,b){
    this.name1=a;
    this.name2=b;
}

    hi(){

            return `Best Couples\n ${this.name1} ${this.name2}`
    }


}

let s=new friend("Kavi\n" , "Siva\n");
best=s.hi();

document.write(best)