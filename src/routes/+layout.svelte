<script>
  import "../app.css";
  import BottomNavBar from "./BottomNavBar.svelte";
  import Footer from "./Footer.svelte";
  import MiddleNavBar from "./MiddleNavBar.svelte";
  import TopNavBar from "./TopNavBar.svelte";
</script>

<TopNavBar />
<MiddleNavBar />
<BottomNavBar />
<slot />
<Footer />
