import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

// reutilizar componentes já criados, como uma extensão
export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  }, // variável do css
})

// recebendo uma variável do jsx para controlar o tamanho do steps
export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
