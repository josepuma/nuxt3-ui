<template lang="pug">
.bg-white.rounded-3xl
    .px-6.py-4
        .flex.gap-2.items-center
            .flex-1
                h5.font-medium.text-slate-800 All Projects
            .flex-1.w-32
                input.w-full.border-none.rounded-3xl.bg-gray-100.text-sm(type="search", placeholder="Search here...", class="py-2.5")
            .flex-none
                Button
    table.w-full
        thead
            tr.bg-gray-100.text-sm.text-left.text-gray-500
                th.font-medium.py-2.px-6 Name
                th.font-medium.px-2 Status
                th.font-medium.px-2 About
                th.font-medium.px-2 Members
                th.font-medium.px-2 Progress
                th 
        tbody
            tr.border-t.border-gray-200(v-for="i in 20")
                td.px-4.py-2
                    .flex.gap-2.items-center
                        img.flex-none.w-10.h-10.object-cover.rounded-full(src="https://images.unsplash.com/photo-1570451488142-71d08e1511e3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1pbmltYWwlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=500")
                        .flex-1
                            p.font-medium.text-slate-800.text-sm //UIconly Pro
                            p.font-medium.text-slate-500.text-sm iconly.pro
                td.px-2 
                    span.text-green-600.font-medium.text-sm.bg-green-100.rounded-3xl.px-5(class="py-1.5") Done
                td.px-2 
                    p.font-medium.text-slate-800.text-sm //UIcon Design
                    p.font-medium.text-slate-500.text-sm Design icons in various styles
                td.px-2
                    .flex.-space-x-1.overflow-hidden
                        img.inline-block.h-6.w-6.rounded-full.ring-2.ring-white.object-cover(src="https://images.unsplash.com/photo-1551628723-952088378fd3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxSUUVJRkEyenBsb3x8ZW58MHx8fHx8&w=500")
                        img.inline-block.h-6.w-6.rounded-full.ring-2.ring-white.object-cover(src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8UlFFSUZBMnpwbG98fGVufDB8fHx8fA%3D%3D&w=500")
                        img.inline-block.h-6.w-6.rounded-full.ring-2.ring-white.object-cover(src="https://images.unsplash.com/photo-1549738712-da3cb334e1d2?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0Mzg5MjYxfHxlbnwwfHx8fHw%3D&w=500")
                        img.inline-block.h-6.w-6.rounded-full.ring-2.ring-white.object-cover(src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxpeDltdVRCZUtuZ3x8ZW58MHx8fHx8&w=500")
                        img.inline-block.h-6.w-6.rounded-full.ring-2.ring-white.object-cover(src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8NXA5X21MeWNtYWN8fGVufDB8fHx8fA%3D%3D&w=500")
                td.px-2
                    .flex.items-center.gap-2
                        .flex-1.h-2.w-full.bg-slate-100.rounded-full.overflow-hidden.relative
                            .h-2.absolute.w-16.bg-green-500
                        .flex-none
                            p.text-sm.text-slate-800.font-medium 70%
                td.px-2
                    p 

</template>