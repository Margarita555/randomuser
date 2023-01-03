import { BannerImage } from "../../assets";
import { StyledImage } from "./styles";

const HomePage = () => {
  return (
    <section>
      <StyledImage src={BannerImage} alt="banner" />
    </section>
  );
};
export default HomePage;
