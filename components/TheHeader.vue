<template>  
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 line-color hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              :class="classList"
              class="inline-block py-2 px-4 text-black hover:text-orange-200  font-bold no-underline text-sm"
              href="#AboutUs"
              >Quem Somos</a
            >
          </li>
          <li class="mr-3 ">
            <a 
              :class="classList"
              class="inline-block text-black no-underline hover:text-orange-200 hover:text-underline py-2 px-4 text-sm"
              href="#OurProjects"
              >Projectos</a
            >
          </li>
          <li class="mr-3">
            <a 
              :class="classList"
              class="inline-block text-black no-underline hover:text-orange-200 hover:text-underline py-2 px-4 text-sm"
              href="#"
              >Serviços</a
            >
          </li>
          <li class="mr-3">
            <a
              :class="classList"
              class="inline-block text-black no-underline hover:text-orange-200 hover:text-underline py-2 px-4 text-sm"
              href="#ContactUs"
              >Orçamento/Contacto</a
            >
          </li>
        </ul>
        <!-- <button
          :class="navActionClassList"
          class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-2 px-6 shadow opacity-75"
        >
          Contacte-nos
        </button> -->
      </div>
    </div>
    <!-- <hr class="border-b border-gray-100 opacity-25 my-0 py-0" /> -->
  </nav>
</template>

<script setup>

  const name = 'TheHeader';
  const scrollY = ref(0);
  const isOpen = ref(false);

  const isSticky = computed(() => { return scrollY.value > 10 });

  const headerClassList = computed(() => { return isSticky.value ? 'bg-white shadow' : ''});
  
  const navActionClassList = computed(() => { return isSticky.value ? 'gradient text-white' : 'bg-white text-gray-800'});
  
  const navContentClassList = computed(() => {  
      let classList = isSticky.value ? 'bg-white' : 'bg-gray-100'
      if (!isOpen.value) {
        classList += ` hidden`
      }
      return classList
    });

  const classList = computed(() => {
    let classList = ''
      classList = (isSticky.value || isOpen.value) ? 'text-gray-800' : 'text-white'
    return classList
  } );
  
  const onClick = () => { isOpen.value = false  }
  
  const onScroll = () => { scrollY.value = window.scrollY } 
  
  const onToggleClick = () => { isOpen.value = !isOpen.value }

  onMounted(() => {
    scrollY.value = window.scrollY
    document.addEventListener('click', onClick)
    document.addEventListener('scroll', onScroll)
  });
  
  onUnmounted (() => {
    document.removeEventListener('click', onClick, true)
    document.removeEventListener('scroll', onScroll, true)
  });
</script>
