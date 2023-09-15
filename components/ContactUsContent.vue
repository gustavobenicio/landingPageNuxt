<template>
  <div data-aos="zoom-in-up" class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
      <div class="mt-10 mx-2 overflow-hidden rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <div class="p-6  bg-gray-100 dark:bg-gray-800 sm:rounded-lg min-w-full">
            <h1 class="title !text-gray-700 dark:!text-gray-200 ">
              Contacte-nos
            </h1>
            <!-- <p class="font-secondary text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Ou deixe seu contacto...
                        </p> -->

            <div class="flex items-center mt-8 h-12 ml-6 text-zinc-900 	 dark:text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                viewBox="0 0 24 24" class="w-8 h-8 text-zinc-900">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div class="ml-4 text-md tracking-widest font-medium w-56">
                Av. Dr. Arlindo Vicente, <br />
                2840-423 Arrentela
              </div>
            </div>

            <div class="flex items-center mt-4 h-12 ml-6 text-zinc-900 dark:text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                viewBox="0 0 24 24" class="w-8 h-8 text-zinc-900">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="ml-4 text-md tracking-widest font-medium w-56">
                (+351) 964 291 593
              </div>
            </div>

            <div class="flex items-center mt-2 h-12 ml-6 text-zinc-900 dark:text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                viewBox="0 0 24 24" class="w-8 h-8 text-zinc-900">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div class="ml-4 text-md tracking-widest font-medium w-56">
                geral@brevidadeengenharia.pt
              </div>
            </div>
          </div>

          
          <div class="mt-6 mx-auto px-2 max-w-2xl ">
            <h2 class="title !text-gray-600  dark:!text-gray-300 ">Entre em contacto </h2>
            <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Vamos construir juntos.</p> -->
            <form action="#" method="POST" class="mx-auto mt-8 max-w-xl sm:mt-12">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">Nome</label>
                  <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Email</label>
                  <div class="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">Número de
                    telefone</label>
                  <div class="relative mt-2.5">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                      <label for="country" class="sr-only  dark:text-gray-400">País</label>
                      <select id="country" name="country" disabled="true"
                        class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-3 pr-3 text-gray-400 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                        <option>(+351)</option>
                      </select>
                    
                    </div>
                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                      class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 dark:bg-gray-800 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Mensagem</label>
                  <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4" maxlength="800" 
                      class="block w-full max-h-60 rounded-md border-0 px-3.5 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
                  <div class="flex h-6 items-center">
                    <Switch v-model="agreed"
                      :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                      <span class="sr-only">Concordar com Políticas</span>
                      <span aria-hidden="true"
                        :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                    </Switch>
                  </div>
                  <SwitchLabel class="text-sm leading-6 text-gray-600">
                    Ao selecionar esta opção, você concorda com nossa
                    {{ ' ' }}
                    <a href="#" class="font-semibold text-indigo-600">política de privacidade&nbsp;</a>.
                  </SwitchLabel>
                </SwitchGroup>
              </div>
  
              <div class="my-10">
                <button type="submit"
                  class="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 landing-btn">
                  Vamos conversar&nbsp;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

const agreed = ref(false)
</script>
