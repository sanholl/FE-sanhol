import { FC, ReactNode } from 'react'

import styles from './styles.module.css'
import { Container } from '../../../shared/ui'

interface Props {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
      </Container>

      <div className={styles.content}>{children}</div>
    </div>
  )
}