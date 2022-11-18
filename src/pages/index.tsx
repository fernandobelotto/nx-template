import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { DarkMode } from '../components/DarkMode'

import Counter from '../features/counter/Counter'

const IndexPage: NextPage = () => {
  return (
      <Container maxW="container.xl">
        <DarkMode />
        <Counter />
      </Container>
  )
}

export default IndexPage
