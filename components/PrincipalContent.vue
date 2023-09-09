<template>
  <!-- <img class="absolute w-full object-cover opacity-40 z-10" src="~/assets/img/construction-workers-sunset.png" /> -->
  <div class="pt-24">
    <!-- <div class="absolute top-20 w-full z-20  border-cyan-600"> -->
      <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
      
      <!--Left Col-->
      <div
      class="flex flex-col w-full md:w-1/2 lg:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="tracking-tighter w-full">Pronto para transformar seu projeto em realidade?</p>
        <h1 class="my-8 text-5xl font-bold leading-tight">
          Excelência em Construção Civil
        </h1>
        <div class="text-2xl mb-8">
          Transformamos Ideias em Estruturas Duradouras 
        </div>
        <div class="w-full text-lg mb-8">Sua Visão, Nossa Expertise!</div>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-6 shadow-lg"
        >
        Contacte-nos
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-1/2 lg:w-3/5 py-6 text-center">
        <img class="w-14 md:w-3/5 z-50 float-right" src="~/assets/img/constructor.png" alt />
      </div>
    </div>
  </div>
</template>

<script setup >
 const name = 'HeroContent';
</script>
