<script lang="ts" setup>
import SplitType from 'split-type'
const { $gsap } = useNuxtApp();
const isAnimationPlayed = ref(false);
function play(){
    const tl = $gsap.timeline({
                onComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                },
                onReverseComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                }
            });
    tl.fromTo('.text-loader span', {
        opacity: 0,
        y: 20,
    }, {
        opacity: 1,
        y: 0,
        stagger: {
            each: .1,
            from: 'center'
        }
    })
    tl.fromTo('.image', {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
    }, 1.5)
    /*tl.fromTo('.text', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: .6,
        ease: 'Power2.easeInOut',
        stagger: .1
    }, 2.5)

    tl.to('.text-content', {
        y: '-300%',
        opacity: 0,
        ease: 'Power2.easeInOut',
    })*/
    /*tl.fromTo('.image', {
        opacity: 1
    }, {
        opacity: 0,
        duration: 3,
        scale: 1.5,
        rotateZ: 10,
        ease: 'Power2.easeInOut',
    })*/
    if(isAnimationPlayed.value){
        tl.reverse(0);
    }else{
        tl.play();
    }
}

</script>

<template lang="pug">
button(@click="play") Reproducir
.relative.h-screen.bg-black
    img.image.absolute.w-full.h-screen.object-cover.opacity-0(src="https://plus.unsplash.com/premium_photo-1677474827233-f469e008f779?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2340")
    .mx-auto.relative.text-center(class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
        h5.text-7xl.font-serif.text-white.text-loader 
            span.opacity-0 C
            span.opacity-0 o
            span.opacity-0 o
            span.opacity-0 m
            span.opacity-0 b
            span.opacity-0 s
            span.opacity-0 v
            span.opacity-0 i
            span.opacity-0 l
            span.opacity-0 l
            span.opacity-0 e
    .mx-auto.relative.text-center.text-content(class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
        h5.text-7xl.font-serif.text-white.text.opacity-0 Coombsville AVA Napa 
        h5.text-7xl.font-serif.text-white.text.opacity-0 Valley California
        p.text-white.mt-4.text.opacity-0 With just a skip, you will feel the same as the nature in a new way.
</template>