import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
