import React from 'react'

import { Box } from '@material-ui/core'

import { AvatarProps } from './interface'
import useStyles from './styles'

const Avatar: React.FunctionComponent<AvatarProps> = 
({ isAnimated, isBordered, source, variant }) => {
  const classes = useStyles()

  return (
    <Box className={[
      classes.imageContainer,
      isBordered && classes.bordered,
      isAnimated && classes.animatedAvatar
    ].join(' ')}
    >
      <img
        src={source}
        className={classes[variant]}
      />
    </Box>
  )
}

export default Avatar
