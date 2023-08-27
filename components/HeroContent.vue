<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">Pronto para ver seus projetos ganharem vida ?</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Excelência em Construção Civil
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Transformamos Ideias em Estruturas Duradouras - Sua Visão, Nossa Expertise!
        </p>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
        Vamos Construir!
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <img class="w-14 md:w-3/5 z-50 float-right" src="~/assets/img/constructor.png" alt />
      </div>
    </div>
  </div>
</template>

<script setup >
 const name = 'HeroContent';
</script>
