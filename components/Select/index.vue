<script setup lang="ts">
    import { onClickOutside } from '@vueuse/core'
    const select = ref<HTMLElement>();
    const selectContainer = ref<HTMLElement>(); //Used for dropdown animation
    const icon = ref<HTMLElement>();
    const isOpen = ref(false);
    const { $gsap } = useNuxtApp();
    onClickOutside(select, (event) => {
        animateSelectOpening('close')
    })

    function animateSelectOpening(type: string){
        if(selectContainer.value && icon.value){
            const tl = $gsap.timeline({});
            tl.pause(); 
            tl.fromTo(selectContainer.value, {
                autoAlpha: 0,
                display: 'none',
                y: -10
            }, {
                autoAlpha: 1,
                display: 'block',
                y: 0
            }, 0);
            tl.fromTo(icon.value, {
                rotateZ: 0
            }, {
                rotateZ: 180
            }, 0);
            if(type === 'close' && isOpen.value){
                tl.reverse(0);
                isOpen.value = false;
            }
            if(type === 'open'){
                if(isOpen.value){
                    tl.reverse(0);
                    isOpen.value = false;
                }else{
                    tl.play();
                    isOpen.value = true;
                }
            }
        }
    }
</script>

<template lang="pug">
div.relative(ref="select")
    button.rounded-3xl.bg-white.px-5.border-2.transition.w-full.text-left.border-white(class="py-2.5 focus:border-violet-500 hover:border-violet-500", @click="animateSelectOpening('open')")
        .flex.gap-2 
            p.flex-1.text-sm.text-slate-500.font-medium Activity
            .flex-none
                div(ref="icon")
                    vsx-icon.text-violet-500(iconName="ArrowCircleDown", size="20")
    .rounded-2xl.bg-white.shadow-md.py-4.absolute.w-full.hidden(ref="selectContainer", class="z-10")
        ul.font-medium.text-sm.text-slate-600.grid
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Travel
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Food/Beverage
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Automotive
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Education
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Government
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Nonproft
            li.px-4.py-2.transition(class="hover:bg-violet-500 hover:text-white") Other
</template>