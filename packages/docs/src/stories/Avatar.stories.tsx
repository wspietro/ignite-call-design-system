import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Avatar, AvatarProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/wspietro.png',
    alt: 'PWS',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    src: undefined,
  },
}
