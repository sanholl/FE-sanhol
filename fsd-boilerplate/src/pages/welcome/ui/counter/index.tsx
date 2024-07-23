import { ChangeEvent } from 'react'

import { useCounter } from '../../lib/use-count'
import { Button } from '../../../../shared/ui'
import { Input, Wrapper } from './counter.styles'

export const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(0)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    if (value) setCount(parseInt(value))
    else setCount(0)
  }

  return (
    <Wrapper>
      <Button onClick={increment}>increment</Button>

      <Input
        type="number"
        name="amount"
        value={count}
        onChange={handleInputChange}
      />

      <Button onClick={decrement}>decrement</Button>
    </Wrapper>
  )
}