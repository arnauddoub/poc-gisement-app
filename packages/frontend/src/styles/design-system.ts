import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'

export const designSystem = usePassThrough(
  Tailwind,
  {
    tabmenu: {
      menu: {
        class: ['flex m-0 p-0 list-none flex-nowrap', 'border-solid border-white dark:border-gray-900 border-b-2', 'text-base list-none']
      },
      action: ({ context, state }: any) => ({
        class: [
          'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
          'border-b-2 p-5 font-medium rounded-t-lg ',
          {
            'border-white bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-gray-900 dark:text-white/80 dark:hover:bg-gray-800/80':
              state.d_activeIndex !== context.index,
            'border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': state.d_activeIndex === context.index
          }
        ],
        style: 'top:2px'
      })
    },
    button: {
      label: ({ props }: any) => ({
        class: [
          'flex-1',
          'duration-200',
          'font-semibold',
          {
            'hover:underline': props.link
          },
          { 'invisible w-0': props.label == null }
        ]
      })
    },
    datatable: {
      column: {
        headercell: ({ context, props }: any) => ({
          class: [
            'text-left border-0 border-b border-solid dark:border-blue-900/40 font-medium',
            'transition duration-200',
            context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
            context.sorted ? 'text-blue-700' : 'text-gray-400', // Sort
            context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
            {
              'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
              'border-x border-y': context?.showGridlines,
              'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
            }
          ]
        }),
        bodycell: ({ props, context }: any) => ({
          class: [
            'text-left border-0 border-b border-solid border-gray-100',
            context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
            'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
            {
              'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
              'border-x border-y': context?.showGridlines
            }
          ]
        }),
        footercell: ({ context }: any) => ({
          class: [
            'text-left border-0 border-b border-solid border-gray-300 font-semibold',
            'bg-slate-50 text-slate-700',
            'transition duration-200',
            context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
            'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
            {
              'border-x border-y': context?.showGridlines
            }
          ]
        })
      }
    }
  },
  {
    mergeSections: true,
    mergeProps: false
  }
)
