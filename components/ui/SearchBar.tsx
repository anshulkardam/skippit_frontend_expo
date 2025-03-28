import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import icons from '@/lib/icons';

const SearchBar = () => {
   const [query, setQuery] = useState(''); //use debounce
   return (
      <View className="flex-row flex-1 items-center rounded-2xl bg-white px-4 py-2 gap-2">
         <Image source={icons.search} className="size-6" />
         <TextInput
            className="flex-1 text-base text-gray-600"
            placeholder="Search..."
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
         />
      </View>
   );
};

export default SearchBar;
