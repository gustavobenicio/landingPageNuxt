<template>
  <section class="section">
    <div class="container max-w-5xl mx-auto m-8 pb-12">
      <div class="title">PROJECTOS</div>
      
      <h1 data-aos="fade-up" class="subtitle">
      <!-- Projetos Realizados:  -->
      Qualidade que Fala por Si Mesma!
      </h1>
      
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="line"></div>
     </div>

      <div data-aos="fade-up" class="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 text-gray-800">
          <div data-aos="fade-up" v-for="(item, index) in data">
            
            <div class="p-1 mx-0 w-full bg-slate-50 border border-slate-100" >
              <img :src="item.image.src" :alt="item.image.alt" class="w-full h-full object-cover"/>
            </div>
            
            <div class="p-1 mx-0 w-full min-h-max bg-slate-50 border border-slate-100" >
              <h1 class="pb-2 text-2xl font-medium leading-tight text-center text-gray-600 font-secondary"> 
                {{ item.title }}
              </h1>
              <h3 class="pb-2 text-xl leading-tight text-center text-gray-600 font-secondary font-normal">
                {{ item.subtitle }}
              </h3>
              
              <ul class="indent-1 px-6 list-disc capitalize">
                <li v-for="task in item.tasks"> {{ task }} </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '~/content/realized-services.json'
const products = ref(["@/assets/img/hero.png"]);
</script>
