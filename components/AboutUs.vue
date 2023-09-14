<template>
  <section id="AboutUs" class="section">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="title">QUEM SOMOS</div>
           
      <h3 data-aos="fade-up" class="subtitle">
        {{ headline }}
      </h3>
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="line "></div>
      </div>
      <!-- data-aos="fade-up-right" -->
      <p data-aos="fade-up-right" class="text-content p-1">
        {{ content }}
        <br />
      </p>
    </div>
  </section>
</template>

<script setup>
// Construindo Histórias, Erguendo Futuros: 
const headline = ref("Conheça a Alma da Brevidade Engenharia ...");
const content = ref("Somos uma empresa apaixonada pela arte de construir e criar espaços que refletem sonhos e funcionalidade. Com anos de experiência na indústria da construção civil, na Brevidade Engenharia, estamos comprometidos em oferecer soluções inovadoras e de alta qualidade para cada projeto. Nossa equipe dedicada de especialistas em arquitetura, engenharia e construção trabalha em harmonia para transformar ideias em estruturas sólidas e inspiradoras. Do conceito à conclusão, colocamos a excelência no centro de cada empreendimento, garantindo que a sua visão se torne uma realidade impressionante. Seja um projeto residencial, comercial ou industrial, estamos prontos para superar desafios e construir o extraordinário, sempre com comprometimento, integridade e paixão.");

</script>


