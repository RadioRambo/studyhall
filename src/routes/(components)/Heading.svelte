<script>
	export let heading = '';
	export let subheading = '';
	export let url = '';
</script>

<div class="text-4xl font-semibold mx-6 mb-10 mt-48">
	{heading}
	<span class="text-xs"><a href={url}>{subheading}</a></span>
</div>
