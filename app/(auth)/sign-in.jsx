import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/customButton";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [isSbumitting, setisSbumitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[85vh] w-full justify-center my-6 px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Login to Aura
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setform({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setform({ ...form, password: e });
            }}
            otherStyles="mt-7"
            keyboardType="password-address"
          />
          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSbumitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Dont have an accunt
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-semibold text-secondary-100"
            >
              Sign UP
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
