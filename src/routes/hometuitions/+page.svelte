<script>
  import Heading from "../(components)/Heading.svelte";
  import HeroSection from "../(components)/HeroSection.svelte";
  import HomeTuitionsFeaturesSection from "./HomeTuitionsFeaturesSection.svelte";
  import ParentsForm from "./ParentsForm.svelte";
  import TutorsForm from "./TutorsForm.svelte";
</script>

<HeroSection
  line="Experienced tutors with great teaching skills without leaving your comfort of time and convenience of home."
/>
<Heading heading="FILL THE FORM" />
<div class="flex flex-col xl:flex-row gap-16 xl:gap-0 xl:justify-between">
  <ParentsForm />
  <div class="hidden xl:block mt-12">
    <svg
      width="1"
      height="600"
      viewBox="0 0 1 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.5" y1="600" x2="0.5" stroke="black" />
    </svg>
  </div>
  <TutorsForm />
</div>
<HomeTuitionsFeaturesSection />
