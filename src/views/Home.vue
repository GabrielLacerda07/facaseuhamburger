<template>
  <Banner/>
  <div class="main-container" >
    <a href="#monteSeuBurguer" class="go-to-end"><fa icon="arrow-down"/></a>
    <h1 id="monteSeuBurguer">Monte seu burger:</h1>
    <BurgerForm/>
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import BurgerForm from '@/components/BurgerForm.vue';


  export default{
    name:'Home', 
    components:{
      Banner,
      BurgerForm
    }, 
    methods:{
      
    }, mounted(){
        const vaFinal = document.querySelector('.go-to-end');
        vaFinal.classList.add('visible');
        window.addEventListener('scroll', ()=>{
           if(window.screen.width > 768){
                if(window.scrollY < 120){
                  vaFinal.classList.add('visible');
                }else{
                  vaFinal.classList.remove('visible');
                }
            }
        })
    }
  }

</script>

<style scoped>
a{
  text-decoration: none;
}
.go-to-end{
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms;
    font-size: 1.5rem;
    color: transparent;
    background-color: transparent;
}
.visible{
    transition: 500ms;
    background-color: #333;
    color: #fcba03;
    
}
</style>
