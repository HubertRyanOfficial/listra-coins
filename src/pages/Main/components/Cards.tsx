import React, { useRef } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width - 40 - 20;

function Cards() {
  const scrollViewRef = useRef<ScrollView>(null);

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
