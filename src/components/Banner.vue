<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>

    export default{
        name:"Banner", 

    }

</script>

<style scoped>
    #main-banner{
        background-image: url('../../public/img/burger-background.jpg');
        filter: brightness(85%);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner h1{
        color: #fff;
        font-size: 60px;
        text-align: center;
        background-color: rgba(43, 41, 41, 0.8);
        padding: 20px 40px;
    }
    @media (max-width: 768px){
        #main-banner h1{
            font-size: 50px;
            padding: 10px 20px;
        }
    }
    @media (max-width: 480px){
        #main-banner h1{
            font-size: 30px;
            padding: 5px 10px;
        }
    }
</style>