import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants"
import CustomButton from "../components/customButton";


export default function App() {

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full  items-center min-h-[90vh] justify-center px-4">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="h-[84px] w-[130px]"
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                    <View className="mt-3 relative">
                        <Text className="text-center text-3xl font-bold text-white"> Discover Endless  Possibilities With <Text className="text-secondary-200">Auro</Text></Text>
                        <Image
                            source={images.path}
                            className="absolute w-[120px] h-[15px] -bottom-2 -right-5"
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 text-center mt-7"> Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora</Text>
                    <CustomButton title="Continue with Email" handlePress={() => router.push("sign-in")} containerStyles="w-full mt-7" />
                </View>

            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}

