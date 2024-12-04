import React from "react";
import Icon from "../../../../Icon/index";
import { FaShareAlt } from "react-icons/fa";
import Timer from "../../../../component/Timer";
import {
  ContentDetail,
  ContentText,
  LeftContent,
  LivePlayContainer,
  LivePlayContent,
  LivePlayReporter,
  LivePlayTimer,
  LivePlayWarning,
  ReporterName,
  RightContent,
  ShareIcon,
  Title,
  Result,
  ResultText,
  Tags,
  WarningText,
} from "./style";
import Tag from "../../components/Tag/index";
import { MainContainer } from "../../../../config/globalStyle";

const TopPart = ({ data }) => {
  return (
    <MainContainer>
      <LivePlayContainer>
        <LivePlayContent>
          <ContentText>
            <RightContent>
              <Title>{data.title}</Title>
            </RightContent>
            <LeftContent>
              <LivePlayTimer>
                <Timer time={data.platform_data.match_start_date} />
                {data.live_status == "end_with_result" && (
                  <Result>
                    <ResultText>نتیجه :</ResultText>
                    {data.result_team2}-{data.result_team1}
                  </Result>
                )}
              </LivePlayTimer>
              <ShareIcon>
                <FaShareAlt />
              </ShareIcon>
            </LeftContent>
          </ContentText>
          <ContentDetail>
            <LivePlayReporter>
              <Icon
                name={"reportMic"}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
              <ReporterName>{data.reporter_name}</ReporterName>
            </LivePlayReporter>
            <Tags>
              {data.tag_config.map((t) => (
                <Tag tag={t[1]} />
              ))}
            </Tags>
          </ContentDetail>
        </LivePlayContent>
        {data.extra_alert && (
          <LivePlayWarning>
            <Icon
              name={"warning"}
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            />
            <WarningText>{data.extra_alert.text}</WarningText>
          </LivePlayWarning>
        )}
      </LivePlayContainer>
    </MainContainer>
  );
};

export default TopPart;
