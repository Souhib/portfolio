import React, { Children } from 'react'

import Box from '@material-ui/core/Box'

import type ContainerProps from 'components/Containers/interfaces'

const Inline: React.FunctionComponent<ContainerProps> = ({
  children,
  horizontalAlign = 'center',
  spacing = 1,
  verticalAlign = 'center',
}) => {
  const horizontal =
    horizontalAlign === 'center'
      ? 'center'
      : horizontalAlign === 'left'
        ? 'flex-start'
        : 'flex-end'
  const vertical =
    verticalAlign === 'center'
      ? 'center'
      : verticalAlign === 'left'
        ? 'flex-start'
        : 'flex-end'

  const childrenMap = Children.map(children as React.ReactElement[], 
    (child, index) => {
      if (!child) {
        return null
      }
      const isLastItem = (children as React.ReactElement[]).length - 1 === index
      return <Box mr={isLastItem ? undefined : spacing}>{child}</Box>
    })

  return (
    <Box display="flex" justifyContent={horizontal} alignItems={vertical}>
      {childrenMap}
    </Box>
  )
}
export default Inline
