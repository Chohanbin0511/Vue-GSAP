<template>
	<h2>Match Media GSAP</h2>
	<header class="center pad-l">
		<h1>gsap.matchMedia()</h1>
		<p class="lead">
			Use matchMedia for easy, accessibility friendly animation.
		</p>
	</header>

	<section class="gray">
		<div class="box"></div>
	</section>
	<section class="gray">
		<div class="mobile">Mobile</div>
		<div class="desktop">Desktop</div>
	</section>

	<section class="bottom">
		<p><strong>Pretty cool, right?</strong></p>
		<p>
			You can read more about reduced motion and vestibular disorders in this
			<a href="https://css-tricks.com/introduction-reduced-motion-media-query/"
				>blog post</a
			>
			on CSS tricks
		</p>
		<p>
			How do I
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences"
				>adjust my reduced motion setting?</a
			>
		</p>
		<p>Check out <a href="https://greensock.com">GSAP</a> today.</p>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	let mm = gsap.matchMedia();

	mm.add('(prefers-reduced-motion: no-preference)', context => {
		console.log('context', context);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.gray',
				scrub: 1,
				end: '200%',
				pin: true,
			},
		});
		tl.to('.box', { scale: 2 }).to('.box', { scale: 1 });

		gsap.to('.box', {
			rotation: 360,
			ease: 'none',
			duration: 4,
			repeat: -1,
		});
	});

	// a 'reduced' motion animation
	mm.add('(prefers-reduced-motion: reduce)', context => {
		console.log('context', context);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.gray',
				scrub: 1,
				end: '200%',
				pin: true,
			},
		});
		tl.to('.box', { scale: 1.1 }).to('.box', { scale: 1 });
	});
});
</script>

<style>
@import url('./../assets/css/style.css');
</style>
