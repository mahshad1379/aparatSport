import CTASection from "../components/CTASection";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPart from "../components/MainPart";
import OptionBox from "../components/OptionBox";
import QuestionBox from "../components/QuestionBox";
import TVPart from "../components/TvPart";
import { AppStyle, UpSide } from "./styles.js";
import "./styles";

function App() {
  return (
    <AppStyle>
      <UpSide>
        <Header />
        <MainPart />
      </UpSide>
      <TVPart />
      <OptionBox />
      <Comments />
      <CTASection />
      <QuestionBox />
      <Footer />
    </AppStyle>
  );
}

export default App;
