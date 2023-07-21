<script>
	export let heading = '';
	export let description = '';
</script>

<div
	class="max-w-md  bg-secondarylight dark:bg-secondarydark rounded-3xl p-10  outline outline-2 outline-outlinelight dark:outline-outlinedark"
>
	<div class="font-semibold text-2xl mb-12">{heading}</div>
	<div class="font-normal">{description}</div>
</div>
