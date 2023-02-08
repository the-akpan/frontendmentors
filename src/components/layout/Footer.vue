<template>
  <footer>
    <div class="bg-gray-800 py-5 border-t-2 border-t-blue-400">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <h5 class="text-xl italics hover:text-blue-400">
            <a href="https://github.com/the-akpan">the-akpan</a>
          </h5>
          <div>
            <ul>
              <li v-for="social of socials" :key="social.name">
                <a
                  class="hover:underline"
                  target="_blank"
                  :href="social.link"
                  >{{ social.name }}</a
                >
              </li>
            </ul>
          </div>
          <p>
            Copyright {{ date.getFullYear() }} by
            <a
              class="underline hover:text-blue-400"
              target="_blank"
              href="https://github.com/the-akpan"
              >the-akpan</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const date = new Date();
const socials = [{ name: "twitter", link: "https://twitter.com/the_akpan" }];
</script>
