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
<div class="flex flex-col xl:flex-row gap-16">
  <ParentsForm />

  <TutorsForm />
</div>
<HomeTuitionsFeaturesSection />
