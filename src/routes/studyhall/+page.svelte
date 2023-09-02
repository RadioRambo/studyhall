<script>
  import BottomNavBar from "../(components)/BottomNavBar.svelte";
  import HeroSection from "../(components)/HeroSection.svelte";
  import LayoutSection from "./LayoutSection.svelte";
  import RatingReviewSection from "./RatingReviewSection.svelte";
  import StudyHallFeaturesSection from "./StudyHallFeaturesSection.svelte";
</script>

<BottomNavBar
  pageName="ENLIGHT STUDY HALL"
  otherPageLink="ENLIGHT HOME TUITIONS"
  otherPageLinkURL="hometuitions"
/>
<HeroSection
  line="A well maintained study hall with all necessary facilities for maximum focus and
  comfort to prepare and achieve your bright future confidently."
/>
<StudyHallFeaturesSection />
<LayoutSection />
<RatingReviewSection />
