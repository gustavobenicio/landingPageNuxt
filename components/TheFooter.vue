<template>
  <footer class="bg-zinc-200 dark:bg-gray-800 ">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo :isSticky="true"/>
        </div>
<!-- 
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >FAQ</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Help</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Support</a
              >
            </li>
          </ul>
        </div> -->
        <!-- <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Terms</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Privacy</a
              >
            </li>
          </ul>
        </div> -->
        <div class="flex-1 ">
          <p class="uppercase text-gray-500 md:mb-6 dark:!text-gray-200 ">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-400  hover:text-sky-500"
                >Facebook</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-400  hover:text-sky-500"
                >Linkedin</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-400 hover:text-sky-500"
                >X (Twitter)</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 dark:!text-gray-200  md:mb-6">Companhia</p>
          <ul class="list-reset mb-6">
            <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-200  hover:text-sky-500"
                >Official Blog</a
              >
            </li> -->
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#AboutUs"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-400  hover:text-sky-500"
                >Sobre nós</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#ContactUs"
                class="no-underline hover:underline text-gray-800 dark:!text-gray-400  hover:text-sky-500"
                >Contactos</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script config>
const  name = 'TheFooter';
</script>
