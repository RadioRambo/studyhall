<script>
  import FeatureSectionCard from "../(components)/FeatureSectionCard.svelte";
  import Heading from "../(components)/Heading.svelte";
</script>

<Heading heading="Salient Features" />
<div
  class="grid grid-cols-1 gap-4 xl:gap-8 mx-6 justify-items-center md:grid-cols-2 lg:grid-cols-3"
>
  <FeatureSectionCard
    heading="Highly Qualified Tutors"
    description="Each tutor is skilled, with passion towards teaching"
  />
  <FeatureSectionCard
    heading="First class free"
    description="Try the first class for free to asses tutor "
  />
  <FeatureSectionCard
    heading="Female / Male tutors "
    description="Female and male tutors as per your request"
  />
  <FeatureSectionCard
    heading="Morning / Evening time"
    description="Schedule classes to the comfort of kids"
  /><FeatureSectionCard
    heading="Change tutors"
    description="Problems with tutor? We will replace with another"
  />
  <FeatureSectionCard
    heading="On time classes"
    description="Each class starts on time without any delay"
  />
</div>
