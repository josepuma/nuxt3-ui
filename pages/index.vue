<script setup lang="ts">
import Card from '@/components/Card/index.vue'
const { $gsap } = useNuxtApp();
const cardList = ref<Array<InstanceType<typeof Card>>>()
const isAnimationPlayed = ref(false);

interface ICard {
    banner: string;
    avatarUrl: string;
    name: string;
}

const cards = new Array<ICard>();
cards.push({
    banner: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1467',
    avatarUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1480',
    name: 'Anrmin Delphy'
},{
   banner: 'https://images.unsplash.com/photo-1627215477528-f011b373257e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MjQ3NDk5Mnx8ZW58MHx8fHx8&w=500',
   avatarUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500',
   name: 'Richard Comez' 
},{
   banner: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDc0OTkyfHxlbnwwfHx8fHw%3D&w=500',
   avatarUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww&w=500',
   name: 'Laurance Tray' 
},{
   banner: 'https://images.unsplash.com/photo-1612152661182-8d6c5e568c94?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE2fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500',
   avatarUrl: 'https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500',
   name: 'Selena Champagnet' 
},{
   banner: 'https://images.unsplash.com/photo-1597072100548-829878230270?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTcwfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500',
   avatarUrl: 'https://plus.unsplash.com/premium_photo-1669882305249-5af7f5ed5c10?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500',
   name: 'Rosy Times' 
},{
   banner: 'https://images.unsplash.com/photo-1510917087081-51e33cdcc51b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTk5fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500',
   avatarUrl: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&w=500',
   name: 'John Carph' 
},{
   banner: 'https://images.unsplash.com/photo-1598555330178-c3d6ee641667?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjE0fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500',
   avatarUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8ODQ3MDk2Mnx8ZW58MHx8fHx8&w=500',
   name: 'Volweph Mapow' 
},{
   banner: 'https://images.unsplash.com/photo-1587463272361-565200f82b33?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjIzfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500',
   avatarUrl: 'https://images.unsplash.com/photo-1524158572048-994dc70d2b58?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4NDcwOTYyfHxlbnwwfHx8fHw%3D&w=500',
   name: 'Indira Indigo' 
});

onMounted(() => {
    play()
})

const play = () => { 
        if(cardList.value){

            $gsap.registerEffect({
                name: 'showCard',
                effect: (targets : Array<HTMLElement>, config : any) => {
                    let animation = $gsap.timeline();
                    let delay = $gsap.utils.distribute(config.stagger);
                    targets.forEach((t, i) => {
                        let tl = $gsap.timeline()
                        .fromTo(t, {
                            y: 90,
                            scale: .9,
                            opacity: 0
                        }, {
                            duration: 1,
                            y: 0,
                            scale: 1,
                            autoAlpha: 1,
                            ease: 'Power5.easeIn',       
                        })
                        .fromTo(t.children, {
                            y: -20,
                            opacity: 0,
                            scale: .9
                        }, {
                            duration: 1,
                            y: 0,
                            scale: 1,
                            autoAlpha: 1,
                            stagger: .2,
                            ease: 'Power5.easeIn'             
                        }, .2);
                        animation.add(tl, delay(i, t, targets));
                    })
                    return animation
                },
                defaults: { duration: .1 },
                extendTimeline: true
            });

            const tl = $gsap.timeline({
                onComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                },
                onReverseComplete: function(){
                    isAnimationPlayed.value = !isAnimationPlayed.value;
                }
            })
            
            const cardListArray = Array<HTMLElement>();
            cardList.value.forEach(sp => {
                const val = sp?.$el as HTMLElement;
                cardListArray.push(val);
            })
            tl.showCard(cardListArray, {
                stagger: {
                    each: .1,
                }
            });
            if(isAnimationPlayed.value){
                tl.reverse(0);
            }else{
                tl.play();
            }
        }
}
</script>

<template lang="pug">
section.bg-slate-200.min-h-screen
    Navbar
    .container.mx-auto.px-2.py-8
        //-
        .grid.gap-4.grid-cols-12
            .col-span-2    
                Select
            .col-span-2 
                Button
                //-Post
            .col-span-10
            .col-span-4(v-for="i in 3") 
                Card
                    .grid.gap-2
                        .flex.gap-4.items-center 
                            .grow 
                                .flex.items-center.gap-2 
                                    .flex-none 
                                        img.w-12.h-12.object-cover.rounded-full(src="https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500")
                                    .flex-1 
                                        h5.font-medium.text-slate-600.text-sm Erlangga Fernando
                                        p.text-sm.text-slate-400.font-medium @arminhmhd - 27 min ago
                            .flex-none 
                                button 
                                    vsx-icon.text-slate-500(iconName="MoreCircle", size="20")
                        img.w-full.h-64.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1597072100548-829878230270?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTcwfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
                        p.text-slate-700.text-sm While trying to make something fun in our side there's something we should be trying over there instead of making people to make it live.
                        .flex.gap-4.items-center
                            .flex.gap-4.grow
                                button.flex.gap-2.items-center
                                    CardPostLikeButton
                                    p.text-slate-500.text-sm 2
                                button.flex.gap-2.items-center
                                    vsx-icon.text-slate-500(iconName="Message", size="20")
                                    p.text-slate-500.text-sm 25
                                button
                                    vsx-icon.text-slate-500(iconName="Send2", size="20")
                            .flex-none 
                                Button
                        .bg-gray-100.my-2(class="h-[1px]")
                        .rounded-3xl
                            .flex.gap-4
                                .flex-none 
                                    img.w-8.h-8.object-cover.rounded-full(src="https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500")
                                .grow 
                                    textarea.resize-none.rounded-2xl.bg-gray-100.w-full.text-sm.border-none.text-slate-600(placeholder="Post a comment", rows="1", class="py-2.5")
            //-button(@click="play") play
            .grid.gap-4.grid-cols-2.col-span-12
                Card(v-for="i in 2")
                    .flex.gap-4 
                        .flex-none 
                            img.w-12.h-12.object-cover.rounded-full(src="https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=500")
                        .flex-1.w-64
                            h5.font-medium.text-slate-800 Sam Rolfeswit
                            .flex.items-center.gap-2 
                                p.text-sm.text-slate-400.font-medium @arminhmhd
                                button.text-indigo-500.text-sm.font-medium + Follow
                        .flex-1.w-32
                            .overflow-hidden
                                .flex.flex-nowrap.gap-2
                                    img.flex-none.h-12.w-16.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1597947216176-73eeb189ea51?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjIyfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
                                    img.flex-none.h-12.w-16.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1573763665563-6e377217d29b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjI3fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
                                    img.flex-none.h-12.w-16.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1597787427778-5bcd7be5bd37?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjQ1fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
                                    img.flex-none.h-12.w-16.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1592485878905-f2407fec5125?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjY1fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
            .grid.gap-4.grid-cols-2.col-span-5
                Card.opacity-0(v-for="card in cards", ref="cardList")
                    img.w-full.h-24.object-cover.rounded-xl(:src="card.banner")
                    img.relative.object-cover.w-20.h-20.rounded-full.mx-auto.border-white.border-8.border-solid(class="-mt-10", :src="card.avatarUrl")
                    .flex.gap-2.items-center.py-4
                        .flex-1
                            h5.font-medium.text-slate-800 {{  card.name  }}
                            p.text-sm.text-slate-400.font-medium @arminhmhd
                        .flex-none
                            Button
                    p.text-sm.text-slate-500 Artist that archives Black Trans experience in motion graphics and CGI.
            .col-span-7
                Table
            //-.col-span-12 
                Kanban
</template>