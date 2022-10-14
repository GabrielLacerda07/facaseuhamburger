<template>
    <div>
        <div>
            <form id="burger-form" @submit="validaNome">
                <div class="input-container">
                    <label for="nome">Nome do cliente</label>
                    <input  type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                    <small id="erro-message">Este campo é obrigatório!</small>
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="" disabled>Escolha o pão:</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha a carne:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="" disabled>Escolha o tipo de carne</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="opcionais">Escolha os opcionais:</label>

                    <div v-for="opcional in opcionaisdata" :key="opcional.id" class="checkbox-container">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{opcional.tipo}}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu burguer">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default{
    name: "BurgerForm",
    data() {
        return {
            paes: null,
            carnes: null,
            opcionaisdata: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            staus: "Solicitado",
            msg: null
        };
    },
    methods: {
        async getIngredientes() {
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json();
            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisdata = data.opcionais;
        },
        async createBurger(e) {
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado"
            };
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: dataJson
            });
            const res = await req.json();
            //Colocar uma msg de sistema

            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Pedido adicionado com sucesso',
              showConfirmButton: true
            });
            //this.msg = `Pedido Nº ${res.id} realizado com sucesso!`
            //Limpar msg 
            setTimeout(()=> this.msg = '', 3000)
            //Limpar os campos
            this.nome = "";
            this.pao = "";
            this.carne = "";
            this.opcionais = [];
            
        }, 
        async validaNome(e){
            e.preventDefault()
            const inputNome = document.querySelector('#nome')
            const msgErro = document.querySelector('#erro-message')
            if(inputNome.value === ''){
                inputNome.classList.add('input-nome-erro')
                msgErro.classList.add('msg-erro')
            }else{
                inputNome.classList.remove('input-nome-erro')
                msgErro.classList.remove('msg-erro')
                this.createBurger()
            }
        }
    },
    mounted() {
        this.getIngredientes();
    }
}

</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{

        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }
    input, select{
        font-size: 17px;
        padding: 5px 10px;
        width: 100%;
        border: 2px solid rgb(145, 145, 145);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-end-end-radius: 5px;
        border-end-start-radius: 5px;

    }
    small{
        visibility: hidden;
    }
    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #opcionais-title{
        width: 100%;
    }
    .checkbox-container{
        display: flex;
        align-items: center;
        width: 50%;
        margin-bottom: 20px;
    }
    .checkbox-container span, 
    .checkbox-container input{
        width: auto;

    }
    .checkbox-container span{
        margin-left: 6px ;
        font-weight: bold;
    }
    .submit-btn{
        width: 85%;
        color: #fcba03;
        background-color: #222;
        font-weight: bold;
        border: 2px solid #222;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }
    /*Validação do nome*/
    .input-nome-erro{
        border: 2px solid rgb(231, 0, 0);
    }
    .msg-erro{
        padding: 6px 0 0 5px;
        visibility: visible;
        color: red;
    }
</style>