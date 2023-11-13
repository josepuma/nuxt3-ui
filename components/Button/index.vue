<script setup lang="ts">

    const { $gsap } = useNuxtApp();
    const animatedButton = ref<HTMLElement>();
    const isAnimationPlayed = ref(false);

    function play(){
        if(animatedButton.value){
            const animation = $gsap.timeline({
                onComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                },
                onReverseComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                }
            });
            const outText = animatedButton.value.getElementsByClassName('out-text');
            const inText = animatedButton.value.getElementsByClassName('in-text');
            
            animation.fromTo(animatedButton.value, {
                backgroundColor: '#8b5cf6',
            }, {
                backgroundColor: '#0f172a',
                duration: 1
            }, 0)
            animation.fromTo(animatedButton.value, {
                scale: 1,
            }, {
                scale: .8,
                duration: .2
            }, 0)
            animation.fromTo(animatedButton.value, {
                scale: .8
            }, {
                scale: 1,
                duration: .8
            }, .2)
            animation.fromTo(outText, {
                display: 'block',
                opacity: 1,
                y: 0
            }, {
                display: 'none',
                y: 10,
                opacity: 0,
                ease: 'Power4.easeOut',
                duration: .3
            }, 0)
            animation.fromTo(inText, {
                display: 'none',
                    y: -10,
                    opacity: 0
            }, {
                y: 0,
                display: 'block',
                opacity: 1,
                ease: 'Power4.easeIn',
                duration: .3
            }, .3)
            if(isAnimationPlayed.value){
                animation.reverse(0);
            }else{
                animation.play();
            }
        }
    }
</script>

<template lang="pug">
button.bg-violet-500.text-white.text-sm.px-5.rounded-3xl.font-medium.relative.overflow-auto(ref="animatedButton", @click="play", class="py-2.5")
    p.out-text.relative + Follow
    p.in-text.relative.hidden Following
</template>