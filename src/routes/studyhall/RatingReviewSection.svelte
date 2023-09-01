<script>
  import Heading from "../(components)/Heading.svelte";
  import { fly } from "svelte/transition";
  import { onMount, afterUpdate, onDestroy } from "svelte";

  let count = 0;
  let incrementInterval;
  let isVisible = false;
  let isClass = false;

  function startIncrement() {
    incrementInterval = setInterval(() => {
      count += 0.1;
      count = Number(count.toFixed(1));
    }, 40);
  }

  function stopIncrement() {
    clearInterval(incrementInterval);
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startIncrement();
          isVisible = true;
          observer.disconnect();
          setTimeout(() => {
            isClass = true;
          }, 2800);
        }
      });
    });

    observer.observe(document.getElementById("rating"));
  });

  afterUpdate(() => {
    if (count >= 5) {
      stopIncrement();
    }
  });

  onDestroy(stopIncrement);

  let currentIndex = 0;
  let reviews = [
    {
      author: "Pavan Gobburi",
      content:
        "Very good and neat maintenance. Very comfortable place with affordable prices.Very good environment for preparation. 24*7 availability is the one which is better for Aspirants who wish to stay late. Overall a good place for preparation.",
    },
    {
      author: "MadhuPriya Gattumidhi",
      content:
        "Very peaceful environment to study and hygiene standards are maintained along with friendly management.",
    },
    {
      author: "Chandana Nishankara",
      content:
        "Peaceful, no nuisance, well maintained, hygienic and Best management. They proactively try to solve any issue reported. Best Study hall in the neighborhood. Totally recommend this study hall.",
    },
    {
      author: "Karnati Sravani",
      content:
        "Maintenance is good. Environment is good for study. Spacious, lighting is good. Very well thought of ventilation and other arrangements. Owner is responsible and listens to the queries. Also solves the problems. Overall, management is good and this study hall is a good option at the same cost compared to other local study halls.",
    },
    {
      author: "Geetha Rajeshwari",
      content:
        "The most peaceful and cleanliest study hall in and around Vanasthalipuram with reasonable prices",
    },
  ];

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % reviews.length;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div
  class="flex flex-col md:flex-row md:gap-10 lg:gap-20 md:justify-end h-[1200px] sm:h-[900px] md:h-[700px] lg:h-[600px]"
>
  <div class="md:basis-1/4">
    <Heading
      heading="Ratings"
      subheading="as in Google Maps"
      url="https://www.google.com/maps/place/Enlight+Study+Hall/@17.3313833,78.5686183,17z/data=!3m1!5s0x3bcba1f979886f0f:0x86c4b35602ef8431!4m8!3m7!1s0x3bcba181c59e60bb:0x6e0c77b8eaf8e33d!8m2!3d17.3313782!4d78.5711932!9m1!1b1!16s%2Fg%2F11txt65n2f?entry=ttus"
    />
    <div class="mx-6 lg:ml-16">
      <div class="flex gap-3 {isClass ? 'animate-pulse' : ''}">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_1416)">
            <path
              d="M16 2L11.45 11.22L1.28 12.69L8.64 19.87L6.9 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z"
              class="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1416">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_1416)">
            <path
              d="M16 2L11.45 11.22L1.28 12.69L8.64 19.87L6.9 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z"
              class="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1416">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg><svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_1416)">
            <path
              d="M16 2L11.45 11.22L1.28 12.69L8.64 19.87L6.9 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z"
              class="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1416">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg><svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_1416)">
            <path
              d="M16 2L11.45 11.22L1.28 12.69L8.64 19.87L6.9 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z"
              class="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1416">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg><svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_59_1416)">
            <path
              d="M16 2L11.45 11.22L1.28 12.69L8.64 19.87L6.9 30L16 25.22L25.1 30L23.36 19.87L30.72 12.7L20.55 11.22L16 2Z"
              class="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1416">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="text-8xl" id="rating">
        <span class={isClass ? "animate-pulse" : ""}>{count.toFixed(1)}</span>
        <span class="text-3xl"> / 5</span>
      </div>
      <div class="text-lg mt-4">in 58 reviews</div>
    </div>
  </div>
  <div class=" md:basis-1">
    <div
      class=" md:h-72 lg:h-64 xl:h-60 md:w-0.5 hidden md:block md:mt-52 bg-black dark:bg-white"
    />
  </div>
  <div class=" md:basis-1/2">
    <Heading
      heading="Reviews"
      subheading="as in Google Maps"
      url="https://www.google.com/maps/place/Enlight+Study+Hall/@17.3313833,78.5686183,17z/data=!3m1!5s0x3bcba1f979886f0f:0x86c4b35602ef8431!4m8!3m7!1s0x3bcba181c59e60bb:0x6e0c77b8eaf8e33d!8m2!3d17.3313782!4d78.5711932!9m1!1b1!16s%2Fg%2F11txt65n2f?entry=ttus"
    />
    <div class="mx-6 lg:ml-16 overflow-hidden">
      {#each reviews as review, i}
        {#if i === currentIndex}
          <div
            class="mb-4 text-lg"
            in:fly={{ x: 200, duration: 1000, delay: 200 }}
          >
            By {review.author}
          </div>
          <div
            class="max-w-lg h-fit md:max-w-xl"
            in:fly={{ x: 100, duration: 1000, delay: 200 }}
          >
            "{review.content}"
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
