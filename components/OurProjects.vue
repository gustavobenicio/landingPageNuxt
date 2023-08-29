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

      <div data-aos="zoom-out-down" class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-6 text-gray-800">
        <div class="p-1 bg-slate-50 border border-slate-100" v-for="product in products">
          <img :src=" product.image " alt="image" width="250" height="100" >
        </div>

      </div>


    </div>
  </section>
</template>

<script setup>

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>
