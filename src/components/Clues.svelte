<script>
	import { getContext } from "svelte";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Slider from "$components/helpers/Slider.svelte";
	import Slide from "$components/helpers/Slider.Slide.svelte";
	import Tap from "$components/helpers/Tap.svelte";
	import Image from "$components/Clues.Image.svelte";
	import mq from "$stores/mq.js";
	import {
		NUM_GUESSES,
		LAST_GAME_INDEX,
		clueIndex,
		gameOver,
		currentGame,
		stats
	} from "$stores/misc.js";
	import generateId from "$utils/generateId.js";

	export let images;

	const copy = getContext("copy");

	let sliderEl;
	let current = 0;
	let count;

	const onTap = ({ detail }) => {
		detail === "right" ? sliderEl.next() : sliderEl.prev();
	};

	$: if (!$gameOver) sliderEl?.jump($clueIndex);
	$: left = current === 0 ? "left" : null;
	$: right =
		current >= $clueIndex || current === NUM_GUESSES - 1 ? "right" : null;
	$: disable = [left, right].filter((d) => d);
	$: prev = $currentGame.game - 1;
	$: next = $currentGame.game + 1;
	$: prevLink = `<a target="_self" href="${base}/?skip=true&game=${prev}">prev</a>`;
	$: nextLink = `<a target="_self" href="${base}/?skip=true&game=${next}">next</a>`;
	$: check = $stats.find((s) => s.game === $currentGame.game);
</script>

<div class="wrapper">
	<div class="info">
		<p class="links">
			{#if $currentGame?.game > 0}{@html prevLink}{/if}
			{#if $currentGame?.game < LAST_GAME_INDEX}{@html nextLink}{/if}
		</p>
		<p class="current">
			<strong>
				#{$currentGame?.game + 1}
				{#if check}<span class="check">(played)</span>{/if}
			</strong>
		</p>
		<p class="counter">{current + 1} of {count}</p>
	</div>

	<div class="images">
		<Slider bind:this={sliderEl} bind:current bind:count>
			{#each images as image, index}
				<Slide {index}>
					<Image {image} {index} />
				</Slide>
			{/each}
		</Slider>
	</div>

	<Tap
		on:tap={onTap}
		full={true}
		showArrows={true}
		size={"96px"}
		{disable}
		arrowStroke={"#262626"}
	/>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 8px 0;
		z-index: calc(var(--z-overlay) + 1);
	}

	.info p {
		margin: 0;
		line-height: 1;
		text-align: center;
		font-size: var(--14px);
		width: 33.33%;
	}

	.info p:first-of-type {
		text-align: left;
	}

	.info p:last-of-type {
		text-align: right;
	}

	.images {
		flex: 1;
	}

	.current strong {
		display: inline-flex;
		align-items: center;
	}

	.check {
		margin-left: 4px;
		color: var(--sequential-0);
	}
</style>
