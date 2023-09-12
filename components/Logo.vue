<template>

<img class="w-16" v-if="!props.isSticky" src="~/assets/img/brevidade-reverse.png" alt="" srcset="">
<img class="w-16" v-if="props.isSticky" src="~/assets/img/brevidade.png" alt="" srcset="">

  <a
    :class="classList"
    class=" pl-2 no-underline hover:no-underline font-bold text-center"
    href="#"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <p class="text-xl lg:text-l drop-shadow leading-5">BREVIDADE</p>
      <p class="text-xs lg:text-xs drop-shadow tracking-widest">ENGENHARIA</p>
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
