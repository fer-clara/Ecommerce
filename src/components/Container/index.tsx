import { FC } from 'react'

type variant = string;

export const Container: FC<{variant?: variant}> = ({ children, variant }) => (
    <section className={variant}>
        {children}
    </section>
)