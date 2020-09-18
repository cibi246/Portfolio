import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { breakpoints } from '../components/Media';
// import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import ProjectRow2 from '../components/ProjectRow2';
import HeadingWrap from '../components/HeadingWrap';
import '../index.css';
import { Float } from '../styles';

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SkillTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        color: black;
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        span {
            font-size: 20px;
            margin-right: 5px;
            color: #b4e1e7;
        }
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;

const SubParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`
    #     #      #######                             ### 
    #     # #       #    #    # ###### #####  ###### ### 
    #     # #       #    #    # #      #    # #      ### 
    ####### #       #    ###### #####  #    # #####   #  
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #      ### 
    #     # #       #    #    # ###### #    # ###### ### `);
        console.log('This website was designed and built by Manivannan Baskaran ');
    }

    render() {
        return (
            <>
                <Layout>
                    <Helmet>
                        <title>
                            Manivannan Baskaran - Full Stack Developer
                        </title>
                        <meta
                            name='title'
                            content='Manivannan Baskaran - Full Stack Developer'
                        />
                        <meta
                            name='description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:title'
                            content='Manivannan Baskaran - Front End Developer - Manivannan'
                        />
                        <meta
                            property='og:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        {/* <meta property='og:image' content={LandingImage} />
                        <meta
                            property='twitter:card'
                            content='summary_large_image'
                        /> */}
                        <meta
                            property='twitter:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        {/* <meta property='twitter:image' content={LandingImage} /> */}
                        <html lang='en' />
                    </Helmet>
                    <HeadingWrap />
                    {/* <HeadingImage /> */}
                    <Container
                        style={{
                            alignItems: 'start',
                            margin: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextContentWrap>
                            <Paragraph>
                                I'm a developer
                                currently working on web development and design.
                                <br />
                                <br />
                                As I've grown as a developer, I've worked
                                alongside senior designers and developers who
                                have raised my standards for whats expected of
                                any web application.
                            </Paragraph>
                        </TextContentWrap>
                        <TextContentWrap>
                            <Paragraph>
                                Through these experiences, I've had the
                                opportunity to create memorable products that
                                are not only enjoyable to use but are written in
                                code that's maintainable and easy to understand.
                            </Paragraph>
                        </TextContentWrap>
                    </Container>
                    <Container>
                        <SubContainer>
                            <SkillContent>
                                <TextContent>
                                    <Heading>My Skills</Heading>
                                    <Paragraph>
                                        Through my studies, I've gained a solid
                                        understanding of computer science and
                                        web development concepts, and have
                                        dedicated a lot of my free time to apply
                                        these concepts to real-world scenarios
                                        and applications.
                                    </Paragraph>
                                </TextContent>
                                <SkillTable>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Javascript ES6
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> HTML & CSS
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Angular
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> Java
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> JEE
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span>{' '}
                                            Microservices
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Git
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> SQL
                                        </Paragraph>
                                    </row>
                                </SkillTable>
                            </SkillContent>
                        </SubContainer>
                    </Container>
                    <SubContainer>
                        <TextContent>
                            <Heading>What I've been working on </Heading>
                            <Paragraph>
                                I like to stay busy and always have a project in
                                the works. Take a look at some of the
                                applications, articles, and companies I've
                                dedicated my time to.
                            </Paragraph>
                        </TextContent>
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow2 />
                    </SubContainer>
                </Layout>
                <Footer instagramDisplay='flex' />
            </>
        );
    }
}

export default Page;
