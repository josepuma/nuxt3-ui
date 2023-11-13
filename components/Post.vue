<template lang="pug">
section.grid.gap-4
    .flex.gap-4
        .grow 
            .grid.gap-2
                h4.text-3xl.font-bold.text-slate-800(class="w-1/2") Spectacular views of Queenstown while having something
                .flex.gap-4.items-center 
                    img.h-6.w-6.rounded-full.object-cover(src="https://images.unsplash.com/photo-1551628723-952088378fd3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxSUUVJRkEyenBsb3x8ZW58MHx8fHx8&w=500")
                    .flex.gap-2.items-center 
                        Icon.stroke-yellow-500(name="star-1", size="15", type="bold")
                        p.text-xs.text-slate-700.font-medium 4.8
                        p.text-xs.text-slate-400.font-medium (256 reviews)
                    .flex.gap-2.items-center 
                        Icon.stroke-slate-400(name="home", size="15")
                        p.text-xs.text-slate-400.font-medium Superhost
                    .flex.gap-2.items-center 
                        Icon.stroke-slate-400(name="flag", size="15")
                        p.text-xs.text-slate-400.font-medium Queenstown, Otago, New Zealand
        .flex-none 
            .flex.gap-2 
                button 
                    Icon.stroke-slate-500(name="send-2", size="20")
                button 
                    Icon.stroke-slate-500(name="more-circle", size="20")
                button
                    CardPostLikeButton
                button 
                    Icon.stroke-slate-500(name="close-circle", size="20")
    .grid.grid-rows-3.grid-cols-3.gap-4
        img.h-96.col-span-2.row-span-3.w-full.object-cover.rounded-2xl(class="h-[620px]", src="https://images.unsplash.com/photo-1627215477528-f011b373257e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MjQ3NDk5Mnx8ZW58MHx8fHx8&w=500")
        img.h-48.col-span-1.row-span-1.w-full.object-cover.rounded-2xl(src="https://images.unsplash.com/photo-1612152661182-8d6c5e568c94?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE2fDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
        img.h-48.col-span-1.w-full.object-cover.row-span-1.rounded-2xl(src="https://images.unsplash.com/photo-1597072100548-829878230270?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTcwfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
        img.h-48.col-span-1.w-full.object-cover.row-span-1.rounded-2xl(src="https://images.unsplash.com/photo-1587463272361-565200f82b33?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjIzfDI0NzQ5OTJ8fGVufDB8fHx8fA%3D%3D&w=500")
</template>