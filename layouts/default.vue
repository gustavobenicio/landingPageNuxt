<template>

  <div class="leading-normal tracking-normal text-white gradient">

    <!-- <div class="leading-normal tracking-normal text-white bg-gradient-to-br from-gray-800 via-gray-500 to-orange-400 bg-opacity-50 "> -->

  <!-- <div class="leading-normal tracking-normal text-white bg-[url('~/assets/img/construction-workers-sunset.png')] bg-opacity-25"> -->
    <!-- <div class="absolute ui-bg-overlay bg-dark opacity-50"> </div>
    <img  src="~/assets/img/construction-workers-sunset.png" /> -->
      <TheHeader />
      <slot />
      <TheFooter/>
  </div>
</template>

<script>
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
  background: linear-gradient(90deg, #393536 0%, #F68712 100%);   
  /*/#F68712 //#393536*/
}
/* 
.bg-dark { background-color: rgba(0, 0, 0, .9) !important; }
.opacity-50            { opacity: .5 !important; }
.opacity-100            { opacity: .9 !important; }
.ui-bg-overlay-container .ui-bg-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
} */

</style>
