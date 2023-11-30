import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'

export const designSystem = usePassThrough(
  Tailwind,
  {
    tabmenu: {
      action: ({ context, state }: any) => ({
        class: [
          'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
          'border-b-2 p-5 font-medium rounded-t-lg ',
          'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
          {
            'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
              state.d_activeIndex !== context.index,
            'border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': state.d_activeIndex === context.index
          }
        ],
        style: 'top:2px'
      })
    }
  },
  {
    mergeSections: true,
    mergeProps: false
  }
)
