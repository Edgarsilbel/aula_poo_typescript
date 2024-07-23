class Monstro {
    nome: string
    tamanho: string
    nivel: number

        constructor(nome:string, tamanho:string){
            this.nome = nome
            this.tamanho = tamanho
            this.nivel = 10;
     }
            OlharDestruidor(){
                console.log("olhar destruidor")


            }

    let monstro1 = new Monstro ("Greego", "Pequeno")

    let monstro2 = new Monstro ("brull", "Gigante")



  }