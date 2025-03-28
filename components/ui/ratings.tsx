import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface RatingsProps {
  rating: number;       // rating from 0 to 5 (e.g., 4.2)
  starSize?: number;    // size for each star, defaults to 24
  maxStars?: number;    // total number of stars, defaults to 5
}

const Ratings: React.FC<RatingsProps> = ({
  rating,
  starSize = 24,
  maxStars = 5,
}) => {
  // Create an array with fill percentages for each star.
  // If a star is completely filled (rating >= star index + 1), fill = 1.
  // If partially filled (rating is between i and i+1), fill = (rating - i).
  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    let fill = 0;
    if (rating >= i + 1) {
      fill = 1;
    } else if (rating > i) {
      fill = rating - i;
    }
    stars.push(fill);
  }

  return (
    <View className={twMerge(cn("flex-row"))}>
      {stars.map((fill, index) => (
        <View key={index} style={{ width: starSize, height: starSize }}>
          {/* Background star (unfilled / outline) */}
          <FontAwesome
            name="star-o"
            size={starSize}
            color="#ccc"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
          {/* Filled portion of the star, clipped to the fill percentage */}
          <View
            style={{
              width: starSize * fill,
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <FontAwesome name="star" size={starSize} color="#FFD700" />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Ratings;
