<script>
  async function onSubmit(e) {
    console.log("clicked");
    // Prevent the default form submission behavior
    e.preventDefault();

    // Gather the form data
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
    // Send a POST request to the specified URL with the form data
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbypHd1ys7JUhyy0WhdZoJu_5ndtTBrJ9iYjQYJ35uADzSPD2ncLScuVmcRU0Q_vC4dfpg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<div class="mx-6">
  <h1 class="font-semibold text-3xl mt-10">For Parents</h1>
  <h2 class="mb-10">If you are looking for a tutor for your kid</h2>
  <form on:submit|preventDefault={onSubmit} class="mx-0 md:ml-6">
    <input
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-4 w-[55vw] max-w-[300px] lg:max-w-none lg:w-80"
      placeholder="Name"
      type="text"
      id="name"
      name="name"
      required
    /><br />

    <input
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 w-[65vw] max-w-[350px] lg:max-w-none lg:w-[380px] mb-4"
      placeholder="Phone Number"
      type="tel"
      id="phone"
      name="phone"
      required
    /><br />

    <textarea
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-2 w-[75vw] max-w-[380px] lg:max-w-none lg:w-[450px]"
      placeholder="Address / Area"
      type="text"
      id="address"
      name="address"
      rows="3"
      required
    /><br />

    <textarea
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-6 w-[85vw] max-w-[400px] lg:max-w-none lg:w-[500px]"
      placeholder="Your requirement details"
      id="message"
      name="message"
      rows="5"
      required
    /><br />

    <input
      class="bg-primarylight w-36 rounded-3xl outline outline-2 outline-outlinelight dark:outline-outlinedark px-4 py-2 font-semibold"
      type="submit"
      value="Submit"
    /><br />
  </form>
</div>
