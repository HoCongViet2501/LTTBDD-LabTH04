import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function TikiPage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerFirst}>
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Image style={{ height: 166, width: 117 }} source={require("../assets/book.png")}></Image>
                    </View>
                    <View style={styles.headerFirstRight}>
                        <Text style={styles.textHead}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.textHead}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.textPrice}>141.800 đ</Text>
                        <Text
                            style={[{ textDecorationLine: "line-through", marginTop: 2 }]}
                        >
                            141.800 đ
                        </Text>
                        <View style={[{ flexDirection: "row", marginTop: 2 }]}>
                            <TouchableOpacity>
                                <View style={styles.icon}>
                                    <Text style={[{ color: "#000000", fontSize: 13 }]}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={[{ marginHorizontal: 15 }]}>1</Text>
                            <TouchableOpacity>
                                <View style={styles.icon}>
                                    <Text style={[{ color: "#000000", fontSize: 13 }]}>+</Text>
                                </View>

                            </TouchableOpacity>
                            <Text style={[{ marginLeft: 90, color: '#134FEC', fontWeight: 'bold' }]}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.headerSecond}>
                    <View style={styles.textSecond}>
                        <Text style={[styles.textHead, { marginLeft: 20, marginRight: 30 }]}>Mã giảm giá đã lưu</Text>
                        <Text style={[styles.textHead, { color: "blue" }]}>Xem tại đây</Text>
                    </View>
                    <View style={styles.buttonHeaderSecond}>
                        <View style={styles.InputSecond}>
                            <TextInput style={{
                                borderRadius: 5,
                                borderWidth: 1,
                            }} placeholder="Mã giảm giá">

                            </TextInput>
                        </View>
                        <View style={styles.buttonSecond}>
                            <Button style={{
                                borderRadius: 5,
                                borderWidth: 1,
                                backgroundColor: "blue",
                                height: 55,
                            }}>
                                <Text style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }}>Áp dụng</Text>
                            </Button>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.containerCenter}>
                <View style={styles.center1}>
                    <Text
                        style={[
                            {
                                marginLeft: 20,
                                fontFamily: "Roboto",
                                fontSize: 12,
                                fontWeight: "bold",
                                marginVertical: 25,
                            },
                        ]}
                    >
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <Text
                        style={[
                            {
                                marginLeft: 5,
                                fontFamily: "Roboto",
                                fontSize: 13,
                                fontWeight: "bold",
                                marginVertical: 25,
                                color: "#134FEC",
                            },
                        ]}
                    >
                        Nhập tại đây?
                    </Text>
                </View>
                <View style={styles.center2}>
                    <Text
                        style={[
                            {
                                marginLeft: 20,
                                fontSize: 19,
                                fontWeight: "bold",
                                marginTop: 20,
                            },
                        ]}
                    >
                        Tạm tính
                    </Text>
                    <Text
                        style={[
                            {
                                marginLeft: 20,
                                fontSize: 17,
                                fontWeight: "bold",
                                marginTop: 20,
                                color: "#EE0D0D",
                                marginRight: 30,
                            },
                        ]}
                    >
                        141.800 đ
                    </Text>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.bottom1}>
                    <Text
                        style={[
                            {
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "#808080",
                            },
                        ]}
                    >
                        Thành tiền
                    </Text>
                    <Text
                        style={[
                            {
                                fontFamily: "Roboto",
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "#EE0D0D",
                                marginRight: 20,
                            },
                        ]}
                    >
                        141.800 đ
                    </Text>
                </View>
                <View style={styles.bottom2}>
                    <TouchableOpacity
                        style={[
                            {
                                backgroundColor: "#E53935",
                                height: 50,
                                borderRadius: 5,
                                marginHorizontal: 20,
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    color: "#FFFFFF",
                                    fontFamily: "Roboto",
                                    fontSize: 19,
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                },
                            ]}
                        >
                            Tiến hành đặt hàng
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C4C4C4"
    },
    header: {
        flex: 1,
        marginTop: 50,
        backgroundColor:"#FFFFFF"
    },
    headerFirst: {
        flex: 1,
        flexDirection: "row",
    },
    headerFirstRight: {
        flex: 2
    },
    textHead: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 9,
    },
    textPrice: {
        color: "red",
        fontSize: 19,
        fontWeight: "bold"
    },
    icon: {
        marginTop: 2,
        backgroundColor: "#808080",
        width: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textSecond: {
        flexDirection: "row",
        flex: 1,
        marginTop: 10
    },
    headerSecond: {
        flex: 1,
        top:94,
        backgroundColor:"#FFFFFF"
    },
    buttonHeaderSecond: {
        flex: 2,
        flexDirection: "row",
    },
    InputSecond: {
        flex: 2,
        marginLeft: 20
    },
    buttonSecond: {
        flex: 1,
        paddingLeft: 20,
        alignItems: "center",
    },
    containerCenter: {
        flex: 2,
        top:100,
    },
    center1: {
        marginVertical: 15,
        height: 70,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
    },
    center2: {
        height: 70,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottom1: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 20,
    },
    containerBottom: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    },

})
