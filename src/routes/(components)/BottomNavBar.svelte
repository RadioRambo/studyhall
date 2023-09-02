<script>
  export let pageName = "";
  export let otherPageLink = "";
  export let otherPageLinkURL = "";
</script>

<div
  class="flex bg-secondarylight dark:bg-secondarydark gap-6 py-2 px-6 sm:px-10 mt-[2px] rounded-b-3xl outline outline-2 outline-outlinelight dark:outline-outlinedark"
>
  <div class="font-bold md:basis-3/5">{pageName}</div>
  <div class="md:flex justify-end basis-2/5 text-base hidden">
    <a href={otherPageLinkURL} class="mt-1"
      >{otherPageLink}<svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2 -mt-0.5 sm:inline"
      >
        <path
          d="M3.5 0.5V2H12.9425L0.5 14.4425L1.5575 15.5L14 3.0575V12.5H15.5V0.5H3.5Z"
          class="fill-black dark:fill-white"
        />
      </svg></a
    >
  </div>
</div>
