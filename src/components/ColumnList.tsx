import React from "react";
import { View, Text, FlatList, Dimensions, ListRenderItem } from "react-native";

interface Props<T> {
  componentKey: string;
  data: T[];
  title: string;
  renderItem: ({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => React.ReactNode | React.ReactNode;
}

const { width, height } = Dimensions.get("window");

export default function ColumnList<T>({
  componentKey,
  data,
  renderItem,
  title,
}: Props<T>) {
  return (
    <FlatList
      key={componentKey}
      className="rounded-t-3xl bg-alabaster mt-4"
      data={data}
      numColumns={2}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginLeft: width / 35,
          }}
        >
          {renderItem({ item, index })}
        </View>
      )}
      keyExtractor={(item) => String(item["id"])}
      contentContainerStyle={{
        flexDirection: "column",
        paddingHorizontal: 8,
        paddingBottom: height / 6,
      }}
      initialNumToRender={6}
      ItemSeparatorComponent={() => (
        <View
          style={{
            marginVertical: 8,
          }}
        />
      )}
      ListHeaderComponent={() => (
        <View className="mx-4 my-6">
          <Text className="font-soraSemibold text-2xl">{title}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
