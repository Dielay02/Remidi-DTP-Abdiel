import { Link } from "expo-router";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import { useState } from "react";

const categories = [
  { 
    id: "A", 
    name: "All" 
  },
  { 
    id: "1", 
    name: "Jawa Tengah" 
  },
  { 
    id: "2", 
    name: "Jawa Barat" 
  },
  { 
    id: "3", 
    name: "Jawa Timur" 
  },
  { 
    id: "4", 
    name: "Papua" 
  },
];

const Kain = [

    {
      id: "1",
      category_id: "2",
      title: "Batik Mega Mendung",
      poster:
        "https://cdn.idntimes.com/content-images/community/2021/06/megamendung-batik-pattern-4518352-1280-feaf7d2462bf2a1f995dc958b71e0295-61cde43ce1961a9b23ef92f494b7dd5c.jpg",
    },
    {
      id: "2",
      category_id: "1",
      title: "Batik Ceplok",
      poster:
        "https://cdn.idntimes.com/content-images/post/20220907/batik-ceplok-kesatrian-cd05fce426218983e150556b23ad7f49.jpg",
    },
    {
      id: "3",
      category_id: "1",
      title: "Batik Kawung",
      poster:
        "https://cdn.idntimes.com/content-images/community/2022/10/148649853-439715323953567-8040594929136017311-n-05b992a0ef71382bfd91851a2ae52382-cbdf1bab34ad9610bac164083133de9c.jpg",
    },
    {
      id: "4",
      category_id: "1",
      title: "Batik Parang",
      poster:
        "https://cdn.idntimes.com/content-images/community/2021/06/contoh-gambar-motif-batik-parang-solo-1280x720-feaf7d2462bf2a1f995dc958b71e0295-3656e38d735bc11a0364f25140a7e89d.jpg",
    },
    {
      id: "5",
      category_id: "1",
      title: "Batik Tujuh Rupa",
      poster:
        "https://cdn.idntimes.com/content-images/post/20231012/motif-batik-tujuh-rupa-6ad4545263a35de78b69a6f974586f4e.jpeg",
    },
    {
      id: "6",
      category_id: "2",
      title: "Batik Gentongan",
      poster:
        "https://awsimages.detik.net.id/community/media/visual/2023/10/02/batik-gentongan-madura_169.jpeg?w=1200",
    },
    {
      id: "7",
      category_id: "3",
      title: "Batik Lasem",
      poster:
        "https://akcdn.detik.net.id/visual/2022/01/24/batik-lasem-adalah-bentuk-akulturasi-budaya-indonesia-dan-tiongkok_169.jpeg?w=650",
    },
    {
      id: "8",
      category_id: "2",
      title: "Batik Priyangan",
      poster:
        "https://pdbifiles.nos.jkt-1.neo.id/files/2018/05/26/fennec_fox_BatikPriyangan.PNG",
    },
    {
      id: "9",
      category_id: "1",
      title: "Batik Sekar Jagad",
      poster:
        "https://javanologi.uns.ac.id/wp-content/uploads/sites/26/2022/10/sekarjagad-1.jpg",
    },
    {
      id: "10",
      category_id: "1",
      title: "Batik Truntum",
      poster:
        "https://cdn0-production-images-kly.akamaized.net/ZFKj4hz9jMs05OyNtXzCfaoyKt8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1507162/original/054823500_1487067551-batik_truntum.jpg",
    },
    {
      id: "11",
      category_id: "1",
      title: "Batik Tambal",
      poster:
        "https://upload.wikimedia.org/wikipedia/id/7/76/BatikTambal.JPG",
    },
    {
      id: "12",
      category_id: "2",
      title: "Batik Garutan",
      poster:
        "https://www.jelajahgarut.com/wp-content/uploads/2018/10/5-Motif-Batik-Garutan-bulu-Hayam-1024x619.jpg",
    },
    {
      id: "13",
      category_id: "1",
      title: "Batik Lereng",
      poster:
        "https://o-cdn-cas.oramiland.com/parenting/images/Batik_Parang_Lereng.width-800.format-webp.webp",
    },
    {
      id: "14",
      category_id: "1",
      title: "Batik Jlamprang",
      poster:
        "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Batik-Jlamprang-Pekalongan.jpg",
    },
    {
      id: "15",
      category_id: "4",
      title: "Batik Cendrawasih",
      poster:
        "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ketiknews/original/210803133618-mengu.jpg",
    },

];


export default function HomeScreen() {
  const [batik, setBatik] = useState(Kain);

  const filterBatik = (categoryId) => {
    if (categoryId === "A") {
      setBatik(Kain);
    } else {
      const filteredBatik = Kain.filter((item) => item.category_id === categoryId);
      setBatik(filteredBatik);
    }
  };

  const Header = () => (
    <View style={styles.header}>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => filterBatik(item.id)}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );

  return (
    <ImageBackground
        source={{ uri: "https://png.pngtree.com/thumb_back/fh260/background/20210807/pngtree-indonesian-batik-parang-image_758387.jpg" }}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>Batik Collection</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={batik}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 6,
          }}
          key={`numColumns-${2}`}
          ListHeaderComponent={Header}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  categoryList: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  categoryText: {
    marginHorizontal: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
  },
});
