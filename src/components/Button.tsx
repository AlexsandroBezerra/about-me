import Link from 'next/link'
import { IconBaseProps } from 'react-icons'

import { Container } from '../styles/components/Button'

interface ButtonProps {
  href: string
  title: string
  description: string
  externalLink?: boolean
  icon: React.ComponentType<IconBaseProps>
}

export default function Button({
  href,
  title,
  description,
  icon: Icon
}: ButtonProps): JSX.Element {
  return (
    <Link href={href} passHref scroll={false}>
      <Container>
        <div>
          <Icon size={20} />
          {title}
        </div>

        <span>{description}</span>
        <span></span>
      </Container>
    </Link>
  )
}
