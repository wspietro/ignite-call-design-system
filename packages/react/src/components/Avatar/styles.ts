import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

// faremos o uso do radix.ui para termos uma imagem de fallback;

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
}) // Contains all the parts of an avatar.

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$full',
}) // An element that renders when the image hasn't loaded. See options.

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
}) // The image to render. By default it will only render when it has loaded. You can use the onLoadingStatusChange handler if you need more control.
