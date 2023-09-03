<script>
  let onSuccess = false;
  let onError = false;
  let isSubmitting = false;
  async function onSubmit(e) {
    e.preventDefault();
    isSubmitting = true;

    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxid_ovCXcajpr_mc36m_7I1OzTwGDx_oCYjcK6aTa_M3bMeTZbSeEJaRFn7_EoEfqwMg/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      await fetch("https://ntfy.sh/dKpVPfKAhpfHFWw3", {
        method: "POST",
        body: "New PARENT posted. Check it",
      });
      const result = await response.json();
      if (result.result === "success") {
        onSuccess = true;
      }
    } catch (error) {
      fetch("https://ntfy.sh/dKpVPfKAhpfHFWw3", {
        method: "POST",
        body: JSON.stringify(data),
      });
      onError = true;
      console.error("Error:", error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<!-- Display this block after successfull form submission -->
<div class="mx-6 ml-6 lg:w-[525px] {onSuccess ? 'block' : 'hidden'}">
  <h1 class="text-3xl font-medium mt-64 mb-10">
    Details submitted successfully.
  </h1>
  <h2 class="text-4xl font-semibold mb-24 animate-pulse">
    We will contact you as soon as possible.
  </h2>
</div>
<!-- Display this block on error -->
<div class="mx-6 ml-6 lg:w-[525px] {onError ? 'block' : 'hidden'}">
  <h1 class="text-4xl font-medium animate-pulse xl:mt-64">Sorry,</h1>
  <h1 class="text-3xl font-medium animate-pulse mb-10">
    Details submission failed.
  </h1>
  <h2 class="text-2xl font-semibold">
    Please contact us on <br />Phone: +91 72078 23854 <br />Email:
    enlightstudyhall@gmail.com <br /> Address: First floor, Rhythu Bazar Road, Above
    Caramel Bakers, Phase I, Vanasthalipuram, Telangana, 500070. .
  </h2>
</div>
<div class="mx-6 {onSuccess || onError ? 'hidden' : 'block'}">
  <h1 class="font-semibold text-3xl mt-10">For Parents</h1>
  <h2 class="mb-10">If you are looking for a tutor for your kid</h2>
  <form on:submit|preventDefault={onSubmit} class="mx-0 md:ml-6">
    <input
      class="hidden"
      value="Parent"
      type="text"
      id="Type"
      name="Type"
      required
    /><br /><input
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-4 w-[55vw] max-w-[300px] lg:max-w-none lg:w-80"
      placeholder="Name"
      type="text"
      id="Name"
      name="Name"
      required
    /><br />

    <input
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 w-[65vw] max-w-[350px] lg:max-w-none lg:w-[380px] mb-4"
      placeholder="Phone Number"
      type="tel"
      id="Phone"
      name="Phone"
      required
    /><br />

    <textarea
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-2 w-[75vw] max-w-[380px] lg:max-w-none lg:w-[450px]"
      placeholder="Address / Area"
      type="text"
      id="Address"
      name="Address"
      rows="3"
      required
    /><br />

    <textarea
      class="bg-secondarylight outline outline-2 outline-outlinelight dark:outline-outlinedark rounded-3xl placeholder:text-black placeholder:font-medium placeholder:text-xl px-6 py-2 mb-6 w-[85vw] max-w-[400px] lg:max-w-none lg:w-[500px]"
      placeholder="Your requirement details"
      id="Details"
      name="Details"
      rows="5"
      required
    /><br />

    <button
      class="bg-primarylight w-fit rounded-3xl outline outline-2 outline-outlinelight dark:outline-outlinedark px-6 py-2 font-semibold hover:bg-lime-400 active:bg-lime-600"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button><br />
  </form>
</div>
