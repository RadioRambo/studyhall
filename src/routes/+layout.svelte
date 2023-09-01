<script>
  import "../app.css";
  import Footer from "./(components)/Footer.svelte";
  import MiddleNavBar from "./(components)/MiddleNavBar.svelte";
  import TopNavBar from "./(components)/TopNavBar.svelte";
</script>

<TopNavBar />
<MiddleNavBar />
<slot />
<Footer />
