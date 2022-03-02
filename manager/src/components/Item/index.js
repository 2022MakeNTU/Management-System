import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { color } from '@mui/system'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={props.value}
        sx={{ color: props.color }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default function ItemBox() {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress <= 0 ? 100 : prevProgress - 0,
      )
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const _color = progress > 30 ? 'green' : 'red'
  return (
    <Item>
      <CircularProgressWithLabel value={progress} color={_color} />
      <Button size="small">refill</Button>
    </Item>
  )
}
