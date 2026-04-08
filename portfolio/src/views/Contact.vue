<script setup></script>

<template>
<section id="CallMe" class="relative py-14 mt-[100px] bg-slate-900">
  <div class="z-10 absolute opacity-90 rounded-full blur-[200px] w-[40%] h-[40%] bg-blue-600 top-[200px] ml-[20%]"></div>

  <div
    class="flex mx-auto items-center justify-center gap-3 sm:pb-1 w-[260px] sm:w-[500px] border-b-4 sm:border-b-8 border-cyan-500 font-black">
    
    <h2 class="text-white text-2xl sm:text-[48px]">CONTACTS</h2>
  </div>

  <p class="text-center text-slate-400 mt-4">
    Disponible pour collaborations, missions freelance ou opportunités
  </p>

  <div class="z-20 relative px-5 mt-20 flex flex-wrap gap-7 justify-center lg:max-w-[800px] mx-auto">

    <!-- WhatsApp -->
    <div class="card">
      <h3 class="title">WhatsApp</h3>
      <p><a target="_blank" href="https://wa.me/22950208893">+229 50 20 88 93</a></p>
    </div>

    <!-- LinkedIn -->
    <!-- <div class="card">
      <h3 class="title">LinkedIn</h3>
      <p>
        <a target="_blank" href="https://www.linkedin.com/in/tonprofil">
          Ton Nom
        </a>
      </p>
    </div> -->

    <!-- GitHub -->
    <div class="card">
      <h3 class="title">GitHub</h3>
      <p>
        <a target="_blank" href="https://github.com/Brechou">
          @Brechou
        </a>
      </p>
    </div>

    <!-- Email -->
    <div class="card">
      <h3 class="title">Email</h3>
      <p>
        <a href="mailto:lazarelokonon2@gmail.com">
          Envoyer un message
        </a>
      </p>
    </div>

  </div>
</section>
</template>

<style scoped>
.card {
  width: 150px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(51, 65, 85, 0.5);
  border-radius: 20px;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.1);
}

.title {
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.card a {
  color: #06B6D4;
  font-size: 14px;
}
</style>