<script setup lang="ts">
    const { $gsap } = useNuxtApp();
    const isLiked = ref(false);
    const heartRef = ref<HTMLElement>();
    const heartLikedRef = ref<HTMLElement>();
    const isAnimationPlayed = ref(false);
    function like(){
        if(heartRef.value && heartLikedRef.value){
            const tl = $gsap.timeline({
                onComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                },
                onReverseComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                }
            });
            tl.fromTo(heartRef.value, {
                scale: 1,
                autoAlpha: 1,
                display: 'block'
            },{
                scale: .5,
                autoAlpha: 0,
                duration: .2,
                display: 'none'
            })
            tl.fromTo(heartLikedRef.value, {
                scale: .5,
                autoAlpha: 0,
                display: 'none',
            },{
                scale: 1.5,
                autoAlpha: 1,
                display: 'block',
                ease: 'Power2.easeOut',
                duration: .5
            })
            tl.fromTo(heartLikedRef.value, {
                scale: 1.5,
            },{
                scale: 1,
                ease: 'Power2.easeIn',
                duration: .5
            })
            if(isAnimationPlayed.value){
                tl.reverse(0);
            }else{
                tl.play();
            }
        }
    }
</script>

<template lang="pug">
span(@click="like")
    div.hidden(ref="heartLikedRef")
        Icon.stroke-red-500(name="heart")
    div(ref="heartRef")
        Icon.stroke-slate-500(name="heart")
</template>