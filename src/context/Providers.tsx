'use client'

// import { CacheProvider } from '@chakra-ui/next-js'
// import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContextProvider } from '@/context/store'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (<GlobalContextProvider>{children}</GlobalContextProvider>
  )
}
