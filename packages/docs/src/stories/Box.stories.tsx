import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Box, BoxProps, Text } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
