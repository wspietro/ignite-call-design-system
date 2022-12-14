import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Text, TextProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa natus commodi animi, nobis ullam possimus velit laudantium autem laboriosam, debitis nemo enim atque odit. Quo nihil mollitia excepturi vel.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
