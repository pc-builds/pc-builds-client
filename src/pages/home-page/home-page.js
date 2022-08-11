import {
    Distance,
    FlexContainer,
    Hero,
    Section,
  } from '../../components-stateless';
  import styled from 'styled-components';
  import { FunnelTeaser } from '../../components';
  import { theme } from '../../utils';
import { FunnelTeaserSlice } from './slices';
  
  const ContactHeader = styled.h2`
    font-size: 1.8rem;
    letter-spacing: -1px;
    line-height: 1.2;
    margin-bottom: 0.8rem;
  `;
  
  const ContactDescription = styled.h3`
    font-size: 1rem;
    line-height: 1.8;
    font-weight: 400;
    color: #666666;
    max-width: 500px;
  `;
  
  const ContactButton = styled.button`
    color: white;
    border-radius: 20px;
    text-transform: none;
    margin-top: 8px;
  `;
  
  export default function HomePage() {
    return (
      <>
        <div>
          <Section>
            <Hero />
          </Section>
  
          <Section background={theme.colors.bg.contrast}>
            <FunnelTeaserSlice />
          </Section>
  
          <FlexContainer
            flexDirection="column"
            alignItems="center"
            style={{
              textAlign: 'center',
              padding: '0px 24px',
              marginBottom: '160px',
              marginTop: '120px',
            }}
          >
            <ContactHeader>
              Saknar du något verktyg eller information?
            </ContactHeader>
            <ContactDescription>
              Denna hemsida är i ett tidigt stadie och därför vill vi gärna veta
              vad som skulle förenkla din vardag som småsparare och investerare.
            </ContactDescription>
            <ContactButton>Kontakta oss</ContactButton>
          </FlexContainer>
        </div>
      </>
    );
  }
  