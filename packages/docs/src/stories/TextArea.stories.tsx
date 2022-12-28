import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations:</Text>
          {Story()}
        </Box>
      )
    },
  ], // customizar view que mostra nosso componente, colocar outros elementos
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
