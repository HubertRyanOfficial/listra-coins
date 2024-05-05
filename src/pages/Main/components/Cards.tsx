import React, { useRef } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width - 40 - 20;

function Cards() {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const centerOffset = (width - ITEM_WIDTH) / 2;
    const centerIndex = Math.floor((scrollX + centerOffset) / ITEM_WIDTH);
    const newScrollX = centerIndex * ITEM_WIDTH - centerOffset;

    // Scroll para o item central
    scrollViewRef.current?.scrollTo({
      x: newScrollX,
      animated: false,
    });
  };
  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      contentContainerStyle={{
        marginLeft: 20,
        paddingRight: 20,
        marginTop: 40,
      }}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={{ flexGrow: 1 }}
    >
      {Array.from({ length: 3 }).map((item, index) => (
        <View
          key={index}
          className="bg-purple-heart h-[110px] rounded-2xl mr-5"
          style={{ width: ITEM_WIDTH }}
        >
          <Image
            resizeMode="contain"
            source={require("../../../assets/card.png")}
          />
        </View>
      ))}
    </ScrollView>
  );
}

export default Cards;
