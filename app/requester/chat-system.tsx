import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavHeader from '@/components/Common/NavHeader'

const ChatSystem = () => {
  return (
    <SafeAreaView className='px-5'>
      <NavHeader title='Chat with Runner' />
    </SafeAreaView>
  )
}

export default ChatSystem