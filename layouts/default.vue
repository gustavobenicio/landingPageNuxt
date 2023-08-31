<template>

  <div class="leading-normal tracking-normal text-white gradient landing-4">

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
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

.landing-4 .font-secondary {
    font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
.landing-4 .landing-btn {
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
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
  background: linear-gradient(90deg, #393536 0%, #393536 100%);   
  /*/#F68712 //#393536*/
}

</style>
