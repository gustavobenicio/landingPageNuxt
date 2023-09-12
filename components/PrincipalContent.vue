<template>
  <!-- <img class="absolute w-full object-cover opacity-40 z-10" src="~/assets/img/construction-workers-sunset.png" /> -->
  <div class="pt-24">
    <!-- <div class="absolute top-20 w-full z-20  border-cyan-600"> -->
      <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
      
      <!--Left Col-->
      <div
      class="flex flex-col w-full md:w-1/2 lg:w-1/2 justify-center items-start text-center md:text-left"
      >
        <!-- <p class="tracking-tighter w-full">Pronto para transformar seu projeto em realidade?</p> -->
        <h1 class="my-6 text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight font-bold font-secondary">
          Excelência em Construção Civil
        </h1>
        <div class="text-xl font-light mb-8">
          Transformamos Ideias em Estruturas Duradouras com a Sua Visão, Nossa Expertise!
        </div>
        <!-- <div class="w-full text-lg font-extralight mb-8">Sua Visão, Nossa Expertise!</div> -->

        <button
          class="mx-auto md:mx-0 hover:bg-orange-50 bg-white text-gray-900 rounded-full my-6 py-3 px-6 landing-btn"
        >
        Contacte-nos
        </button>
      </div>
      <!--Right Col-->
      <div class=" md:w-1/2 lg:w-1/2 py-6 text-center">
        <img class="w-40 md:w-3/5 z-50 float-right" src="~/assets/img/constructor.png" alt />
      </div>
    </div>
  </div>
</template>

<script setup >
 const name = 'HeroContent';
</script>
