<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href="#"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <svg
      class="h-8 fill-current inline"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.005 512.005"
    >
      <rect
        x="16.539"
        y="425.626"
        width="479.767"
        height="50.502"
        transform="matrix(1,0,0,1,0,0)"
      />
      <path
        class="plane-take-off"
        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
      /></svg>&nbsp;SkyBuild 

            <!-- <svg class="h-8 fill-current inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect
        x="86.539"
        y="575.626"
        width="679.767"
        height="220.502"
        transform="matrix(1,0,0,1,0,0)"
      />
          <path 
          stroke="#0A0A30" d="M5.262 15.329l.486.842a1.49 1.49 0 002.035.55 1.486 1.486 0 012.036.529c.128.216.197.463.2.714a1.493 1.493 0 001.493 1.536h.979a1.486 1.486 0 001.485-1.493 1.493 1.493 0 011.493-1.471c.252.002.498.071.714.2a1.493 1.493 0 002.036-.55l.521-.857a1.493 1.493 0 00-.542-2.036 1.493 1.493 0 010-2.586c.71-.41.952-1.318.543-2.028l-.493-.85a1.493 1.493 0 00-2.036-.579 1.479 1.479 0 01-2.029-.543 1.428 1.428 0 01-.2-.714c0-.825-.668-1.493-1.492-1.493h-.98c-.82 0-1.488.664-1.492 1.486a1.485 1.485 0 01-1.493 1.493 1.521 1.521 0 01-.714-.2 1.493 1.493 0 00-2.036.542l-.514.858a1.486 1.486 0 00.543 2.035 1.486 1.486 0 01.543 2.036c-.13.226-.317.413-.543.543a1.493 1.493 0 00-.543 2.028v.008z" clip-rule="evenodd"/><path stroke="#265BFF" d="M12.044 10.147a1.853 1.853 0 100 3.706 1.853 1.853 0 000-3.706z"/>
      
      </svg> -->
  </a>
</template>

<script setup>
const name = 'Logo';

const props = defineProps({
      isStickable: {
        type: Boolean,
        default: false
      },
      isSticky: {
        type: Boolean,
        default: false
      }
  });

 const classList = computed(() => {
    let classList = ''
    if (props.isStickable) {
      classList = props.isSticky ? 'text-gray-800' : 'text-white'
    } else {
      classList = 'text-orange-600'
    }
    return classList
  } );

</script>
