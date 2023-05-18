class say{
    constructor(){
        document.write("hi");
    }
    constructor(name){
        this.name = name;
    }
        in() {
        document.write("hi" + this.name);
        }
    
}

var s=new say("Kavi");

s.in()