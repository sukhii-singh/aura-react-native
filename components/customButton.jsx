import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className="font-psemibold text-lg text-primary ">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
