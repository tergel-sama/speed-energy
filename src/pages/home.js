import Layout from "../components/layout";
import Header from "../components/header";
import CustomSilder from "../components/customslide";
import AboutUs from "../components/aboutus";
import SpecialProd from "../components/specialprod";

export default function Home() {
  return (
    <>
      <Header />
      <CustomSilder />
      <Layout>
        <AboutUs />
      </Layout>
      <SpecialProd />
    </>
  );
}
