import CTASection from "../section/CTASection";
import Comments from "../section/Comments";
import Footer from "../section/Footer";
import Header from "../section/Header";
import MainPart from "../section/MainPart";
import OptionBox from "../section/OptionBox";
import QuestionBox from "../section/QuestionBox";
import TVPart from "../section/TvPart";
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
