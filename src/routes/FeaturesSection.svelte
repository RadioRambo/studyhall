<script>
	import FeatureSectionCard from './(components)/FeatureSectionCard.svelte';
	import Heading from './(components)/Heading.svelte';
</script>

<Heading heading="Facilities Available" />
<div
	class="grid grid-cols-1 gap-4 xl:gap-8 mx-6 justify-items-center md:grid-cols-2 lg:grid-cols-3"
>
	<FeatureSectionCard
		heading="Unlimited high speed internet"
		description="With alternate backup connection for unseen situations"
	/>
	<FeatureSectionCard
		heading="CCTV Surveillance"
		description="Continuous monitoring for the safety of aspirants"
	/>
	<FeatureSectionCard
		heading="Silent Ambiance"
		description="Sound proof doors to reduce the outside noises"
	/>
	<FeatureSectionCard
		heading="Mineral Water"
		description="Always  purified mineral water available"
	/>
	<FeatureSectionCard
		heading="Hygiene & Clean"
		description="Regular cleaning of floor, cabins and washrooms"
	/>
	<FeatureSectionCard
		heading="Separate Girls Study Room"
		description="Separate study room for girls with attached separate washroom"
	/>
	<FeatureSectionCard
		heading="Lighting & Ventilation"
		description="Well lit rooms with enough light and proper ventilation"
	/>
	<FeatureSectionCard
		heading="AC & Non AC"
		description="Cool environment as per your convenience & comfort"
	/>
	<FeatureSectionCard
		heading="24 x 7 x 365"
		description="Open every day and every night for uninterrupted preparation"
	/>
	<FeatureSectionCard
		heading="Affordable Prices"
		description="Prices that fit every ones budget constraints"
	/>
	<FeatureSectionCard
		heading="Dining Area"
		description="Separate well maintained dining area with tables for eating food"
	/>
	<FeatureSectionCard
		heading="Daily Newspapers"
		description="Read daily newspapers in english and telugu"
	/>
</div>
