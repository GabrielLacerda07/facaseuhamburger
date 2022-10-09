<template>
    <div>
        <footer id="footer">
            <p>Make Your Burger &copy; 2022</p>
        </footer>
    </div>
</template>

<script>

    export default{
        name: 'Footer', 
        data(){}
    }

</script>


<style scoped>
    #footer{
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #FCBA03;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>