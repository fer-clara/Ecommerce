import React, { Fragment } from 'react'
import type { FC } from 'react'

import { Header } from './../Header/index'

export const Layout: FC = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)
