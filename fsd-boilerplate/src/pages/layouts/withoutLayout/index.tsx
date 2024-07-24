import { FC, ReactNode } from 'react'
import { Container } from '../../../shared/ui'
import styles from './styles.module.css'

interface Props {
  title: string
  children: ReactNode
}

export const NoLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
      </Container>

      <div className={styles.content}>{children}</div>
    </div>
  )
}