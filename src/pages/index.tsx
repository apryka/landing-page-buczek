import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Logo } from "../components/logo";
import { Download } from "../components/download";
import { Headline } from "../components/headline";
import { Subheader } from "../components/subheader";
import { Button } from "../components/button";
import { List } from "../components/list";
import { Text } from "../components/text";
import { Container } from "../components/container";

import ScanIcon from "../images/svg/scan-icon.svg";
import CardIcon from "../images/svg/card-icon.svg";
import RewardIcon from "../images/svg/reward-icon.svg";
import DownloadIcon from "../images/svg/download-icon.svg";

const LogoContainer = styled.div`
  text-align: ${(props) => (props.theme.screens.lg ? "center" : "left")};
  padding-top: ${(props) => (props.theme.screens.lg ? "45px" : "67px")};
`;

const StyledPara = styled.p`
  margin: 10px 0 34px 0;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-family: Nunito, sans-serif;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

const HeroTextContainer = styled.div`
  padding-top: ${(props) => (props.theme.screens.lg ? "76px" : "172px")};
  padding-bottom: ${(props) => (props.theme.screens.lg ? "100px" : "194px")};
`;

const GridImageContainer = styled.div`
  max-width: ${(props) => (props.theme.screens.lg ? "318px" : "464px")};
  margin: auto;
  width: 100%;
`;

const AppImageContainer = styled.div`
  max-width: ${(props) => (props.theme.screens.lg ? "320px" : "570px")};
  margin: auto;
  margin-top: ${(props) => {
    if (props.theme.screens.sm) return "-80px";
    if (props.theme.screens.md) return "-100px";
    if (props.theme.screens.lg) return "-120px";
    return "auto";
  }};
`;

const DownloadBtnContainer = styled.div`
  margin-top: ${(props) => (props.theme.screens.lg ? "40px" : "86px")};
`;

const DesktopTextGrid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 114px;
`;

const DesktopImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 40%;
  flex-shrink: 0;
`;

const DesktopGrid = styled.div`
  display: flex;
  column-gap: 196px;
  align-items: center;
`;

const DesktopAppImageWrapper = styled.div`
  position: relative;
`;

const DesktopTextContainer = styled.div`
  width: 48%;
  margin-right: 4%;
`;

const DesktopImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 56%;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Hero = styled.div`
  background-image: ${(props) => props.theme.screens.lg
      ? `url("data:image/svg+xml,%3Csvg width='360' height='643' viewBox='0 0 360 643' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M361 0H-1V636.5C53.1667 628 109 610 208 631.5C270.3 645.03 344.833 645 361 636.5V0Z' fill='%233B2E2D'/%3E%3C/svg%3E%0A")`
      : `url("data:image/svg+xml,%3Csvg width='1920' height='776' viewBox='0 0 1920 776' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-3 0H1923V721.5C1923 721.5 1692.5 802.557 1394 765.252C1095.5 727.948 808.5 691.08 515.5 734.766C222.5 778.451 -3 765.252 -3 765.252L-3 0Z' fill='%233B2E2D'/%3E%3C/svg%3E")`
    };
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20px;
`;

const App = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 260) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      app: file(name: { eq: "app" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 715) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      grid: allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/grid-/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 464) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();

  return (
    <Layout>
      <SEO />
      <Hero>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeroTextContainer>
            <Headline fontSize={breakpoints.lg ? "30px" : "36px"}>
              <strong>ZBIERAJ WIRTUALNE PIECZ??TKI,</strong>
              <br />ODBIERAJ NAGRODY!
            </Headline>
            <StyledPara>
              Zbierz 20 wirtualnych piecz??tek i zyskaj 10 z?? na kolejne zakupy.
              <br/>
              Kupuj kaw?? i zbieraj piecz??tki a 11 kaw?? otrzymasz gratis.
            </StyledPara>
            <TopButtonsContainer>
              <Button>Do????czam do promocji!</Button>
            </TopButtonsContainer>
          </HeroTextContainer>
        </Container>
      </Hero>
      <Container>
        {breakpoints.lg ? (
          <>
            <AppImageContainer>
              <Img fluid={query.app.childImageSharp.fluid} alt="app" />
            </AppImageContainer>
            <Subheader marginTop={52} marginBottom={10}>
              TYLKO 4 KROKI
            </Subheader>
            <Headline marginBottom={80} color="#3B2E2D">
              <strong>CO MUSISZ ZROBI?? BY</strong> SKORZYSTA?? Z PROMOCJI?
            </Headline>
          </>
        ) : (
          <DesktopAppImageWrapper>
            <DesktopTextContainer>
              <Subheader marginTop={56} marginBottom={10}>
                TYLKO 4 KROKI
              </Subheader>
              <Headline marginBottom={80} fontSize="36px" color="#3B2E2D">
                <strong>CO MUSISZ ZROBI?? BY</strong> SKORZYSTA?? Z PROMOCJI?
              </Headline>
            </DesktopTextContainer>
            <DesktopImage>
              <Img fluid={query.app.childImageSharp.fluid} alt="app" />
            </DesktopImage>
          </DesktopAppImageWrapper>
        )}
        <List
          items={[
            {
              icon: <DownloadIcon />,
              text: "Pobierz aplikacj?? BUCZEK",
            },
            {
              icon: <ScanIcon />,
              text: "Zeskanuj kod QR z paragonu lub poka?? sw??j kod u??ytkownika sprzedawcy",
            },
            {
              icon: <CardIcon />,
              text: "Piecz??tka zostaje dodana do Twojej wirtualnej karty",
            },
            {
              icon: <RewardIcon />,
              text: "Zebrane piecz??tki wymieniaj na nagrody!",
            },
          ]}
        />
        <Subheader
          marginTop={breakpoints.lg ? 80 : 140}
          marginBottom={6}
          textAlign="center"
          color='#95989A'
        >
          JAK DZIA??A APLIKACJA BUCZEK?
        </Subheader>
        <Headline
          marginBottom={breakpoints.lg ? 20 : 44}
          color="#3B2E2D"
          textAlign="center"
          fontSize={breakpoints.lg ? "30px" : "36px"}
        >
          <strong>POZNAJ</strong> APLIKACJ??
        </Headline>
        {breakpoints.lg ? (
          <>
            <GridImageContainer>
              <Img
                fluid={query.grid.edges[0].node.childImageSharp.fluid}
                alt=""
              />
            </GridImageContainer>
            <Headline
              marginBottom={20}
              color="#3B2E2D"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>NIE PRZEGAPISZ</strong>
              <br /> ??ADNEJ OKAZJI
            </Headline>
            <Text>
            Ju?? nigdy nie przepadn?? Ci nagrody. Gdy wype??nisz kart?? okre??lon?? ilo??ci?? piecz??tek - automatycznie dostaniesz powiadomienie ??e nagroda czeka do odebrania!
            Wybieraj??c si?? na miasto w ??atwy spos??b sprawdzisz gdzie zahaczy?? by odebra?? benefity.
            </Text>
            <Headline
              marginBottom={20}
              marginTop={40}
              color="#3B2E2D"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>WIESZ, GDZIE ZYSKUJESZ</strong> <br />W OKOLICY
            </Headline>
            <Text>
            Dzi??ki zak??adce "okolica" w aplikacji widzisz, gdzie znajduj?? si?? najbli??sze piekarnie Buczek, w kt??rych mo??esz korzysta?? z promocji.
            Zawsze wiesz, gdzie wpa????, by skorzysta?? z benefit??w.
            </Text>
            <GridImageContainer>
              <Img
                fluid={query.grid.edges[1].node.childImageSharp.fluid}
                alt=""
              />
            </GridImageContainer>
            <Headline
              marginBottom={20}
              color="#3B2E2D"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>JAK TO DZIA??A?</strong>
            </Headline>
            <Text>
              Aplikacja Buczek dzia??a do zar??wno zakup??w na miejscu, jak i us??ugi z dowozem na do domu.
              Niezale??nie od tego jak i co zamawiasz, zawsze zostaniesz nagrodzony.
            </Text>
            <DownloadBtnContainer>
              <Button href="/">
                Pobierz aplikacj??
              </Button>
            </DownloadBtnContainer>
          </>
        ) : (
          <DesktopGrid>
            <DesktopTextGrid>
              <div>
                <Headline
                  marginBottom={20}
                  color="#3B2E2D"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>NIE PRZEGAPISZ</strong>
                  <br /> ??ADNEJ OKAZJI
                </Headline>
                <Text>
                Ju?? nigdy nie przepadn?? Ci nagrody. Gdy wype??nisz kart?? okre??lon?? ilo??ci?? piecz??tek - automatycznie dostaniesz powiadomienie ??e nagroda czeka do odebrania!
                Wybieraj??c si?? na miasto w ??atwy spos??b sprawdzisz gdzie zahaczy?? by odebra?? benefity.
                </Text>
              </div>
              <div>
                <Headline
                  marginBottom={20}
                  marginTop={40}
                  color="#3B2E2D"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>WIESZ, GDZIE ZYSKUJESZ</strong> W OKOLICY
                </Headline>
                <Text>
                Dzi??ki zak??adce "okolica" w aplikacji widzisz, gdzie znajduj?? si?? najbli??sze piekarnie Buczek, w kt??rych mo??esz korzysta?? z promocji.
                Zawsze wiesz, gdzie wpa????, by skorzysta?? z benefit??w.
                </Text>
              </div>
              <div>
                <Headline
                  marginBottom={20}
                  color="#3B2E2D"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>JAK TO DZIA??A?</strong>
                </Headline>
                <Text>
                Aplikacja Buczek dzia??a do zar??wno zakup??w na miejscu, jak i us??ugi z dowozem na do domu.
                Niezale??nie od tego jak i co zamawiasz, zawsze zostaniesz nagrodzony.
                </Text>
                <DownloadBtnContainer>
                  <Button href="/">
                    Pobierz aplikacj??
                  </Button>
                </DownloadBtnContainer>
              </div>
            </DesktopTextGrid>
            <DesktopImageGrid>
              <GridImageContainer>
                <Img
                  fluid={query.grid.edges[0].node.childImageSharp.fluid}
                  alt=""
                />
              </GridImageContainer>
              <GridImageContainer>
                <Img
                  fluid={query.grid.edges[1].node.childImageSharp.fluid}
                  alt=""
                />
              </GridImageContainer>
            </DesktopImageGrid>
          </DesktopGrid>
        )}
      </Container>
      <Download />
    </Layout>
  );
};

export default App;
