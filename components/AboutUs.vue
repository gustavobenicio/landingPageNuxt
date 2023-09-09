<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 data-aos="fade-up"
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
      Quem Somos 
      </h1>
      <div  class="w-full mb-4">
        <div data-aos="fade-up"
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <h3 data-aos="fade-up-right" 
          class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
        
      </h3>
        <p data-aos="fade-up-right" class="text-gray-600 mb-8">
          {{ content }}
          <br />
        </p>
    </div>
  </section>
</template>

<script setup>

const headline = ref("Construindo Histórias, Erguendo Futuros: Conheça a Alma da Brevidade Engenharia ...");
const content = ref("Somos uma empresa apaixonada pela arte de construir e criar espaços que refletem sonhos e funcionalidade. Com anos de experiência na indústria da construção civil, na Brevidade Engenharia, estamos comprometidos em oferecer soluções inovadoras e de alta qualidade para cada projeto. Nossa equipe dedicada de especialistas em arquitetura, engenharia e construção trabalha em harmonia para transformar ideias em estruturas sólidas e inspiradoras. Do conceito à conclusão, colocamos a excelência no centro de cada empreendimento, garantindo que a sua visão se torne uma realidade impressionante. Seja um projeto residencial, comercial ou industrial, estamos prontos para superar desafios e construir o extraordinário, sempre com comprometimento, integridade e paixão.");

</script>
