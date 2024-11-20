import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";

const batiks = [
  {
    id: "1",
    category_id: "2",
    title: "Batik Mega Mendung",
    poster:
      "https://cdn.idntimes.com/content-images/community/2021/06/megamendung-batik-pattern-4518352-1280-feaf7d2462bf2a1f995dc958b71e0295-61cde43ce1961a9b23ef92f494b7dd5c.jpg",
    overview:
      "Batik Mega Mendung adalah motif batik yang berasal dari Cirebon, Jawa Barat. Batik Mega Mendung memiliki motif seperti gumpalan awan di langit.",
  },
  {
    id: "2",
    category_id: "1",
    title: "Batik Ceplok",
    poster:
      "https://cdn.idntimes.com/content-images/post/20220907/batik-ceplok-kesatrian-cd05fce426218983e150556b23ad7f49.jpg",
    overview:
      "Batik Ceplok berasal dari daerah Bantul, Daerah Istimewa Yogyakarta. Batik Ceplok memiliki motif seperti buah aren yang dibelah menjadi empat dan disusun pada setiap sudutnya.",
  },
  {
    id: "3",
    category_id: "1",
    title: "Batik Kawung",
    poster:
      "https://cdn.idntimes.com/content-images/community/2022/10/148649853-439715323953567-8040594929136017311-n-05b992a0ef71382bfd91851a2ae52382-cbdf1bab34ad9610bac164083133de9c.jpg",
    overview:
      "Batik Kawung merupakan batik yang berasal dari Daerah Istimewa Yogyakarta. Batik Kawung juga termasuk salah satu batik tertua di Indonesia, bahkan hingga ratusan tahun yang lalu.",
  },
  {
    id: "4",
    category_id: "1",
    title: "Batik Parang",
    poster:
      "https://cdn.idntimes.com/content-images/community/2021/06/contoh-gambar-motif-batik-parang-solo-1280x720-feaf7d2462bf2a1f995dc958b71e0295-3656e38d735bc11a0364f25140a7e89d.jpg",
    overview:
      "Macam-macam batik berikutnya adalah batik Parang yang berasal dari Kota Solo. Batik ini memiliki motif seperti gulungan ombak yang disusun secara miring.",
  },
  {
    id: "5",
    category_id: "1",
    title: "Batik Tujuh Rupa",
    poster:
      "https://cdn.idntimes.com/content-images/post/20231012/motif-batik-tujuh-rupa-6ad4545263a35de78b69a6f974586f4e.jpeg",
    overview:
      "Salah satu daerah di Indonesia yang terkenal sebagai Kota Batik adalah Pekalongan. Banyak sekali pengrajin batik yang ada di kota ini.",
  },
  {
    id: "6",
    category_id: "2",
    title: "Batik Gentongan",
    poster:
      "https://awsimages.detik.net.id/community/media/visual/2023/10/02/batik-gentongan-madura_169.jpeg?w=1200",
    overview:
      "Batik Gentongan berasal dari Madura. Batik ini menggunakan teknik celup warna alami dan dikenal dengan corak yang cerah dan khas.",
  },
  {
    id: "7",
    category_id: "3",
    title: "Batik Lasem",
    poster:
      "https://akcdn.detik.net.id/visual/2022/01/24/batik-lasem-adalah-bentuk-akulturasi-budaya-indonesia-dan-tiongkok_169.jpeg?w=650",
    overview:
      "Batik Lasem berasal dari Lasem, Jawa Tengah. Batik ini dikenal dengan warna merah cerahnya, yang mendapat pengaruh dari budaya Tiongkok.",
  },
  {
    id: "8",
    category_id: "2",
    title: "Batik Priyangan",
    poster:
      "https://pdbifiles.nos.jkt-1.neo.id/files/2018/05/26/fennec_fox_BatikPriyangan.PNG",
    overview:
      "Batik Priyangan berasal dari Tasikmalaya, Jawa Barat. Motifnya sering kali menggambarkan floradan fauna dengan warna yang lebih natural.",
  },
  {
    id: "9",
    category_id: "1",
    title: "Batik Sekar Jagad",
    poster:
      "https://javanologi.uns.ac.id/wp-content/uploads/sites/26/2022/10/sekarjagad-1.jpg",
    overview:
      "Batik Sekar Jagad adalah motif batik dari Yogyakarta dan Solo yang melambangkan keindahan dan keberagaman dunia.",
  },
  {
    id: "10",
    category_id: "1",
    title: "Batik Truntum",
    poster:
      "https://cdn0-production-images-kly.akamaized.net/ZFKj4hz9jMs05OyNtXzCfaoyKt8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1507162/original/054823500_1487067551-batik_truntum.jpg",
    overview:
      "Batik Truntum diciptakan oleh permaisuri dari Keraton Solo. Motif ini melambangkan cinta yang tulus dan abadi.",
  },
  {
    id: "11",
    category_id: "1",
    title: "Batik Tambal",
    poster:
      "https://upload.wikimedia.org/wikipedia/id/7/76/BatikTambal.JPG",
    overview:
      "Batik Tambal berasal dari Yogyakarta. Motif ini melambangkan harapan akan kehidupan yang lebih baik dan menyembuhkan hal-hal yang rusak.",
  },
  {
    id: "12",
    category_id: "2",
    title: "Batik Garutan",
    poster:
      "https://www.jelajahgarut.com/wp-content/uploads/2018/10/5-Motif-Batik-Garutan-bulu-Hayam-1024x619.jpg",
    overview:
      "Batik Garutan berasal dari Garut, Jawa Barat. Motifnya sederhana dan biasanya menggambarkan unsur alam seperti daun dan bunga.",
  },
  {
    id: "13",
    category_id: "1",
    title: "Batik Lereng",
    poster:
      "https://o-cdn-cas.oramiland.com/parenting/images/Batik_Parang_Lereng.width-800.format-webp.webp",
    overview:
      "Batik Lereng adalah motif khas dari Solo. Motif ini menggambarkan lereng gunung dan biasanya dipakai dalam upacara adat.",
  },
  {
    id: "14",
    category_id: "1",
    title: "Batik Jlamprang",
    poster:
      "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Batik-Jlamprang-Pekalongan.jpg",
    overview:
      "Batik Jlamprang berasal dari Pekalongan. Motifnya terinspirasi dari budaya India dan Arab, dengan pola geometris yang khas.",
  },
  {
    id: "15",
    category_id: "4",
    title: "Batik Cendrawasih",
    poster:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ketiknews/original/210803133618-mengu.jpg",
    overview:
      "Batik Cendrawasih terinspirasi dari burung Cendrawasih yang berasal dari Papua. Motif ini melambangkan keindahan dan keagungan.",
  },
  ];

  const Detail = () => {
    const { kain } = useLocalSearchParams();
    const daerah = batiks.filter(function (item) {
      return item.id === kain;
    });
  
    console.log(daerah);

    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "auto",
          alignItems: "center",
          padding: 16,
        }}
      >
      <View 
        style={{ 
          alignItems: "center", 
          marginBottom: 20 }}>
        <Image
          source={{ uri: daerah[0].poster }}
          style={{ width: 300, height: 200, borderRadius: 8 }}
          resizeMode="cover"
        />
        <Text 
          style={{ fontSize: 24, 
          fontWeight: "bold", 
          marginTop: 5 }}>
          {daerah[0].title}</Text>
        <Text 
          style={{ fontSize: 16, 
          textAlign: "center", 
          marginTop: 5, 
          paddingHorizontal: 16,}}>
          {daerah[0].overview}
          
        </Text>
      </View>

        <Link href="/" 
          style={{ 
            marginTop: 20, 
            padding: 10, 
            backgroundColor: "#3498db", 
            borderRadius: 8 }}>
        <Text 
          style={{ 
            color: "white", 
            fontWeight: "bold" }}>Back</Text>
        </Link>

      </SafeAreaView>
    );
  };

  export default Detail;
  