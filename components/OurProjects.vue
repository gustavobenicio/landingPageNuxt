<template>


  <section id="OurProjects" class="section ">
    <div class="container max-w-5xl mx-auto m-8 rounded-lg"> <!-- border dark:border-neutral-600 -->
      <div class="title">PROJECTOS</div>
      
      <h1 data-aos="fade-up" class="subtitle">
      <!-- Projetos Realizados:  -->
      Qualidade que Fala por Si Mesma!
      </h1>
      
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="line"></div>
     </div>
    
     <div class="flex w-full flex-col justify-center space-y-4 rounded-t-lg overflow-hidden p-2 items-center"> <!-- md:mx-auto md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-2 -->
        <div 
        data-aos="fade-up"
          v-for="(item, index) in data" 
          class="flex 
                flex-col
                w-full
                rounded-lg 
              bg-white 
              dark:bg-gray-800
              dark:text-white
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                md:w-full 
                md:flex-row
                md:h-96
                md:overflow-hidden">
         
          <div class="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg md:w-1/2"><!-- md:w-full md:h-80 -->
           <img
             class="rounded-t-lg md:rounded-bl-lg md:rounded-tr-none w-full h-full object-cover"
             :src="item.image.src" 
             :alt="item.image.alt" />
         </div>
         
         <div class="flex flex-col justify-start md:w-1/2 p-6">
           <h5
             class="mb-2 pb-2 text-2xl font-medium leading-tight font-secondary text-gray-700 dark:text-gray-50">
             {{ item.title }}
           </h5>
           <!-- <h3 class="pb-2 text-xl leading-tight text-center text-gray-600 dark:text-gray-50 font-secondary font-normal">
             {{ item.subtitle }}
           </h3> -->
           <li class="mb-1 text-base text-neutral-600 dark:text-neutral-200" v-for="task in item.tasks">
             {{ task }}
         </li>
           <p class="text-base text-neutral-600 dark:text-neutral-200">
             <small class="text-neutral-500 dark:text-neutral-400">Saiba mais ... </small>
           </p>
         </div>
      </div>

     </div>


      <!-- <div data-aos="fade-up" class="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 text-gray-800">
          <div data-aos="fade-up" v-for="(item, index) in data">
            
            <div class="p-1 mx-0 w-full h-80 bg-slate-50 border border-slate-100" >
              <img :src="item.image.src" :alt="item.image.alt" class="w-full h-full object-cover"/>
            </div>
            
            <div class="p-1 mx-0 w-full bg-slate-50 border border-slate-100" >
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
      </div> -->
    </div>
  </section>
</template>

<script setup>
import data from '~/content/realized-services.json'
const products = ref(["@/assets/img/hero.png"]);
</script>
