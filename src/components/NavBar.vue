<template>
    <div id="nav">
        <router-link id="logo-url" to="/" >
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/pedidos">Pedidos</router-link>
    </div>
</template>

<script>
    
    export default{
        name:'NavBar', 
        props:['logo', 'alt']
    }

</script>

<style>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }
    #logo{
        width: 40px;
        height: 40px;
    }
    #nav a{
        color: #FCBA03;
        text-decoration: none;
        margin: 15px;
        transition: .5s;
    }
    #nav a:hover{
        color: #fff;
    }
    /*Responividade*/
    @media (max-width: 768px){
        
    }
    @media (max-width: 480px){
        #nav{
            padding: 15px;
            display: flex;
            justify-content: flex-start;
        }
    }

</style>