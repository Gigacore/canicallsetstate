import styled from 'styled-components';
import Router from 'next/router';

import { RED, AMBER, GREEN } from '../constants/themeColors';

export default function Base({ example, conditionalCall, canCall, cannotCall, details, lifecycle }) {

    const Title = styled.h1`
      font-size: 20px;
      text-align: center;
      font-family: 'Noto Sans KR', sans-serif;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    `

    const Header = styled.header`
      padding: 20px 0;
      background: #eeeeee;
      color: #000;
      border-bottom: 1px solid #fff;
    `

    const CaseWrapper = styled.div`
      height: 70px;
      color: ${conditionalCall ? '#000' : '#fff'};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: ${canCall ? GREEN : conditionalCall ? AMBER : RED};

      @media (max-width: 768px) {
        height: 40px;
      }
    `

    const Case = styled.h3`
      text-transform: uppercase;
      font-weight: bold;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 22px;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    `

    const CourierAlt = styled.span`
      font-family: 'Source Code Pro', monospace;
      font-weight: bold;
      font-size: 28px;
    `

    const Content = styled.div`
      height: 100%;
      overflow: hidden;
    `

    const DropDown = styled.select`
      background: #fff;
      border: none;
      height: 70px;
      width: auto;
      font-family: 'Source Code Pro', monospace;
      font-weight: bold;
      font-size: 20px;
      padding: 0 20px;
      border-radius: 0;
      margin: 0 15px;

      @media (max-width: 768px) {
        font-size: 14px;
        height: 50px;
        margin: 20px 15px;
        width: 80%;
      }
    `

    const Answer = styled.section`
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    const Details = styled.div`
      padding: 25px;
      font-family: 'Noto Sans KR', sans-serif;
      text-align: justify;
      background: #fff;
      color: #000;
      line-height: 24px;
      max-width: 800px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    `

    const SourceCode = styled.pre`
      font-family: 'Source Code Pro', monospace;
      color: #fff;
      background: #222;
      width: 100%;
      max-width: 800px;
      border-radius: 10px;
      padding: 25px 0;
      line-height: 22px;

      @media (max-width: 768px) {
        border-radius: 0;
        padding: 10px 0;
        font-size: 12px;
        overflow-x: scroll;
      }
    `

    const Footer = styled.footer`
      position: absolute;
      width: 100%;
      height: 30px;
      text-align: center;
      bottom: 0;
      font-family: 'Noto Sans KR', sans-serif;

      a {
        text-decoration: none;
        border-bottom: dotted 1px #ccc;
        color: #263238;
        font-size: 14px;
        background: #fafafa;
      }
    `;

    let selectElem = React.createRef();

    const lifeCycles = [
      'constructor',
      'componentDidMount',
      'componentDidUpdate',
      'componentWillUnmount',
      'UNSAFE_componentWillMount',
      'UNSAFE_componentWillReceiveProps',
      'UNSAFE_componentWillUpdate',
      'render'
    ];

    const handleDropdown = () => Router.push(`/${selectElem.current.value}`);

    return (
      <Content>
        <Header>
          <Title>Can I call <CourierAlt>setState()</CourierAlt> in
            <DropDown
              onChange={handleDropdown}
              ref={selectElem}
              defaultValue={lifecycle}
            >
              {lifeCycles.map((item, i) => (
                <option
                  value={item}
                  key={i}
                >
                  {`${item}()`}
                </option>
              ))}
            </DropDown> ?
          </Title>
        </Header>
        <Answer>
          <CaseWrapper
            canCall={canCall}
            cannotCall={cannotCall}
            conditionalCall={conditionalCall}
          >
            <Case>
              {canCall ? "Yes" : conditionalCall ? "Yes (with condition)" : "No"}
            </Case>
          </CaseWrapper>
          <Details canCall={canCall} cannotCall={cannotCall}>
            <p>{details}</p>
          </Details>
          {example && (
            <SourceCode>
              {example}
            </SourceCode>
          )}
        </Answer>
        <Footer>
          <a href="https://github.com/Gigacore/canicallsetstate" target="_blank" rel="noreferrer">FORK IT ON GITHUB</a> / <a href="https://twitter.com/Gigacore" target="_blank" rel="noreferrer">BY: @GIGACORE</a>
        </Footer>
      </Content>
    )
}
