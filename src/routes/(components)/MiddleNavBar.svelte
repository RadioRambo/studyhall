<script>
  import { page } from "$app/stores";
</script>

<div
  class="bg-primarylight dark:bg-primarydark pt-3 pb-3 px-6 sm:px-10 outline outline-2 mt-[2px] {$page
    .url.pathname === '/'
    ? 'rounded-b-3xl'
    : ''} outline-outlinelight dark:outline-outlinedark md:flex md:gap-6"
>
  <div class="text-3xl lg:text-4xl font-bold">
    <a href="/">ENLIGHT GROUP OF SERVICES</a>
  </div>
  <div class="text-2xl lg:text-3xl mt-1 font-normal font-['caveat']">
    A Light To Future...
  </div>
</div>
