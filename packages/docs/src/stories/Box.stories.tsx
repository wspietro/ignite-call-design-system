import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Box, BoxProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
