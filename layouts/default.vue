<template>

<!-- <div class="leading-normal tracking-normal text-white gradient landing-4"> -->
  <!-- <div class="leading-normal tracking-normal text-white bg-[url('~/assets/img/construction-workers-sunset.png')] bg-opacity-50 landing-4"> -->

    <!-- <div class="leading-normal tracking-normal text-white bg-gradient-to-br from-gray-800 via-gray-500 to-orange-400 bg-opacity-50 "> -->

  <!-- <div class="leading-normal tracking-normal text-white bg-[url('~/assets/img/construction-workers-sunset.png')] bg-opacity-25"> -->
    <!-- <div class="absolute ui-bg-overlay bg-dark opacity-50"> </div>
    <img  src="~/assets/img/construction-workers-sunset.png" /> -->
     <!-- <div class="relative inline-block  h-11 bg-indigo-300 ">
        <img class="absolute object-fill h-max opacity-40 z-10" src="~/assets/img/construction-workers-sunset.png" /> -->
        <!-- <TheHeader/>
        <slot/>
        <TheFooter/> -->
    <!-- </div> -->
  <!-- </div> -->
  <div class="relative leading-normal tracking-normal text-white  landing-4">
    <div class="absolute inset-0  h-max bg-black bg-opacity-50 ">
      <TheHeader/>
        <slot/>
        <TheFooter/>
    </div>
    <img class=" min-h-screen w-screen object-cover object-left" src="~/assets/img/construction-workers-sunset.png" alt="kitty" />
    
  </div>


</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

.font-secondary {
    font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
.landing-btn {
  text-transform: uppercase;
  letter-spacing: .06991em;
  font-weight: 600;
  font-size: 85%;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html {
  font-family: "Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  /* background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%); */
  background: linear-gradient(90deg, #525252 0%, #404040 100%);   
  /*/# //#393536*/
}

.section {
  @apply bg-gray-50 dark:bg-gray-900  border-b dark:border-gray-700 py-8
}

.line-color {
  @apply text-sky-800;
}

.title {
  @apply w-full text-gray-300 dark:text-gray-300 text-center font-bold  mb-2 drop-shadow-sm uppercase;
}

.subtitle {
  @apply w-full my-6 text-4xl/5 font-medium leading-tight text-center text-gray-600 dark:text-white font-secondary drop-shadow ;
}

.line {
  @apply  text-gray-300 dark:text-white h-1 mx-auto gradient w-16 opacity-25 my-12 py-0 rounded-t ;
}

.text-content {
  @apply text-gray-800 dark:text-white mb-8 text-justify font-light text-lg drop-shadow-sm;
}

.bubble {
  @apply mx-auto bg-white dark:bg-gray-800 border-2
         dark:border-gray-900 border-zinc-400 
         shadow-zinc-200 dark:shadow-gray-900 
         shadow-lg p-4 rounded-full grid content-center h-56 w-56 sm:h-56 sm:w-56;
}

.bubble-content {
  @apply text-2xl text-gray-800 dark:text-gray-100 font-normal leading-none m-3;
}  

.lnr {
  color: #a1a1aa !important;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.1;
}

</style>
