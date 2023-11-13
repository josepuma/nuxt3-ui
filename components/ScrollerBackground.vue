<script setup lang="ts">
    const { $gsap } = useNuxtApp();
    const containerRef = ref<HTMLElement>();
    const childRef = ref<HTMLElement>();
    onMounted(() => {
        if(containerRef.value && childRef.value){
            const tl = $gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.value,
                    start: '50% 50%',
                    //scrub: 1,
                    pin: true
                }
            })
            tl.to(childRef.value, {
                backgroundColor: '#6366f1',
                rotateZ: 50,
                scale: .4,
                borderRadius: 100
            })
            tl.to(childRef.value, {
                rotateZ: 180,
            })
            tl.to(childRef.value, {
                scale: 2.5
            })
        }
    })
</script>

<template lang="pug">
div(ref="containerRef")
    .h-screen.bg-white(ref="childRef")    
</template>