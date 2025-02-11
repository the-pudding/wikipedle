<script>
	import { range } from "d3";
	import { onMount, getContext } from "svelte";
	import { overlay, stats, currentGame } from "$stores/misc.js";
	import Overlay from "$components/Overlay.svelte";
	const copy = getContext("copy");

	export let skip;

	let hideThings;
	let second;

	$: if (hideThings && $overlay === undefined) hideThings = false;
	$: closeText = hideThings ? "Start" : "Close";
	$: index = ($currentGame?.game || 0) + 1;
	$: postDay = `Next up is <strong>day ${index}.</strong>`;
	$: if (skip) $overlay = undefined;

	onMount(() => {
		$overlay = "about";
		hideThings = true;
	});
</script>

<Overlay section="about" {closeText}>
	{#if hideThings}
		<p class="post">
			{@html copy.post}.<br />{@html postDay}
		</p>
	{/if}

	<h3>How to Play</h3>
	<p>{@html copy.about}</p>

	<ul>
		{#each copy.score as value, i}
			<li class="threshold-{i}">{value}<br />miles</li>
		{/each}
	</ul>

	{#if !hideThings}
		<h3>Data</h3>
		<p>{@html copy.data}</p>
	{/if}
</Overlay>

<style>
	h3 {
		margin-bottom: 0;
	}

	p {
		margin-top: 8px;
	}

	ul {
		margin-bottom: 24px;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
	}

	li {
		list-style-type: none;
		width: 25%;
		padding: 4px 12px;
		font-weight: 800;
		margin-bottom: 2px;
		text-align: center;
		line-height: 1.2;
	}

	.post {
		margin-top: 16px;
	}
</style>
