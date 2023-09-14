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

        <div class="flex flex-row w-full  ">
          <button
            class="mx-auto ml-0 hover:bg-amber-500 bg-amber-600 text-zinc-50 rounded-sm my-6 py-3 px-6 landing-btn w-48 mr-2"   
          >
          <a href="#OurProjects">Nossos Serviços</a>

          </button>
          <button
            class="mx-auto md:mx-0 hover:bg-zinc-300 bg-zinc-50 text-gray-900 rounded-sm my-6 py-3 px-6 landing-btn w-48"
          href="#ContactUs"
            >
            <a href="#ContactUs">Contacte-nos</a>
          
          </button>
        </div>
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
