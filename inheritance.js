class friend{

    constructor(a){
        this.name=a;
    }

    hi(){
        document.write(this.name);
    }
}

class best extends friend{  // Inheritence

    hi(){

        return "Kavilini"
    }
}
let s = new best("Kavi");

user=s.hi();

document.write(user)