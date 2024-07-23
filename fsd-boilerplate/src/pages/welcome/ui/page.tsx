import { FC } from 'react'

import styles from './styles.module.css'
import { Container } from '../../../shared/ui'
import { MyPage } from '../../../entities/user'
import { Counter } from './counter'
import { Layout } from '../../layouts'

export const WelcomePage: FC = () => {
  return (
    <Layout title="Greetings in Main Layout! =)">
      <Container>
        <MyPage className={styles.usersWrapper} />
        <Counter />
      </Container>
    </Layout>
  )
}