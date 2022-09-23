import { Box, Text, VStack } from "@react-native-material/core";
import { Image, View } from "react-native";

export default function TikiPage() {
    return (
        <VStack m={5} spacing={4} divider={true}>
            <Box h={40}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Image source={require('../assets/book.png')} />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nguyen ham tich phan va ung dung</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nguyen ham tich phan va ung dung</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10, color: "red" }}>148.000D</Text>
                    <Text style={{textDecorationLine:"line-through", fontSize:14,color:"gray"}}>150.000D</Text>
                </View>
            </Box>
        </VStack>
    );
}