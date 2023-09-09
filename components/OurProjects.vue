<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 data-aos="fade-up"
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Projectos
      </h1>
      <div data-aos="fade-up" class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div data-aos="fade-up" class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-6 text-gray-800">
        <!-- <div class="p-1 bg-slate-50 border border-slate-100" > -->
          <!-- <img v-for="product in products" :src="product" alt="image" width="250" height="100" > -->
          <div class="p-1 mx-0 w-full bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/brevidade-eng-remodelacao-gourmet-13.jpeg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/colocacao-piso-05a.jpg" alt="image" class="w-full h-full object-cover" />
          </div>
          <div class="p-1 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/condominio-mansoes-4.jpg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 mx-0 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/pavimentacao-drenagem-03.jpeg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/remodelacao-escritorio-04a.jpg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 w-full bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/remodelacao-loja-estetica-18.jpeg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/remodelacao-vivenda-t4-20.jpg" alt="image" class="w-full h-full object-cover"/>
          </div>
          <div class="p-1 bg-slate-50 border border-slate-100" >
            <img src="~assets/img/projectos/luxuoso/telhado-cobertura-03.jpg" alt="image" class="w-full h-full object-cover"/>
          </div>
        <!-- </div> -->

        

      </div>


    </div>
  </section>
</template>

<script setup>

// const { data: products } = await useFetch('https://fakestoreapi.com/products')

const products = ref(["@/assets/img/hero.png"]);


</script>
