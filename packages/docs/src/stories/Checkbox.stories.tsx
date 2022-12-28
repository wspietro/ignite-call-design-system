import type { StoryObj, Meta } from '@storybook/react' // tipagens ts
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

// Configuracao global do componente, será herdado em todas as variações
export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$3' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ], // customizar view que mostra nosso componente, colocar outros elementos
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
