import React from 'react'
import { Contact } from '@/components/Sections'
import { SSRConfig } from 'next-i18next'
import { Metadata } from '@/components/Metadata'

interface HomeProps extends SSRConfig {
  layout: LayoutProps
}

function HomeScreen({ layout, ...rest }: HomeProps) {
  return (
    <React.Fragment>
      <Metadata />
      <Contact {...layout.contact} {...rest} />
    </React.Fragment>
  )
}

export { HomeScreen }
