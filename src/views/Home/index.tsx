import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon } from '@glide-finance/uikit'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
// import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import { ProtocolUpdater } from 'state/info/updaters'
import Hero from './components/Hero'
import Rocket from './components/Rocket'
// import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
// import MetricsSection from './components/MetricsSection'
import PitchSection from './components/PitchSection'
import DetailsSection from './components/DetailsSection'
import PartnersSection from './components/PartnersSection'
// import WinSection from './components/WinSection'
// import FarmsPoolsRow from './components/FarmsPoolsRow'
import CakeDataRow from './components/CakeDataRow'
// import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

const Wrapper = styled.div``

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  padding-bottom: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

const StyledPageSection = styled(PageSection)`
  padding-top: 32px;
  padding-botom: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 0px;
    padding-bottom: 10vh;
  }
`

// const UserBannerWrapper = styled(Container)`
//   z-index: 1;
//   position: absolute;
//   width: 100%;
//   top: 0px;
//   left: 50%;
//   transform: translate(-50%, 0);
//   padding-left: 0px;
//   padding-right: 0px;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     padding-left: 24px;
//     padding-right: 24px;
//   }
// `

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Home: React.FC = () => {
  // const { theme } = useTheme()
  const { t } = useTranslation()
  const pageWrapperEl = useRef<HTMLDivElement>(null)
  const { account } = useWeb3React()

  const scrollToTop = (): void => {
    pageWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  // const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <ProtocolUpdater />
      <Wrapper ref={pageWrapperEl}>
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <StyledHeroSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          // background={
          //   theme.isDark
          //     ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
          //     : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
          // }
          index={2}
          hasCurvedDivider={false}
        >
          <Hero />
        </StyledHeroSection>
        <StyledPageSection index={2} hasCurvedDivider={false}>
          <CakeDataRow />
          <Rocket />
        </StyledPageSection>
        <StyledPageSection index={2} hasCurvedDivider={false}>
          <PitchSection />
        </StyledPageSection>
        <StyledHeroSection innerProps={{ style: { margin: '0', width: '100%' } }} index={2} hasCurvedDivider={false}>
          <DetailsSection />
        </StyledHeroSection>
        <StyledHeroSection innerProps={{ style: { margin: '0', width: '100%' } }} index={2} hasCurvedDivider={false}>
          <PartnersSection />
        </StyledHeroSection>
        <ScrollButtonContainer>
          <Button scale="md" variant="text" onClick={scrollToTop}>
            {t('Return To Top')}
            <ChevronUpIcon color="primary" />
          </Button>
        </ScrollButtonContainer>
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData} />
      </PageSection> */}
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
        <FarmsPoolsRow />
      </PageSection> */}
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
        {/* <StyledPageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
      </StyledPageSection> */}
        {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection> */}
      </Wrapper>
    </>
  )
}

export default Home
