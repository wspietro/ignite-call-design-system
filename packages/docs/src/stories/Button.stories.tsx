import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Button, ButtonProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
