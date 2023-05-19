class friend{
    constructor(a,b){
    this.name1=a;
    this.name2=b;
}
    get(){
            return `Best Couples\n ${this.name1} ${this.name2}`;
    }

    set(name2){

        this.name2=name2;
    }
}
let s=new friend("Kavi\n" , "Siva\n");

s.set("Ammu");

best=s.get();

document.write(best);