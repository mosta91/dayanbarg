import { useStaticQuery, graphql } from "gatsby";
import GlobalLayout from "./global-layout";
import WaveBackground from "../bg/wave-background";
import Navbar from "../nav/navbar";
import ThemeToggle from "./theme-toggle";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../seo";
import tw from "twin.macro";

// direction: rtl;
const Container = tw.div`
  grid
  grid-cols-6
  gap-y-20
  px-0
  py-0
  mx-0
  my-0
  bg-cover
`;

const NavContainer = tw.nav`
  grid
  grid-cols-12
  justify-between
  justify-items-center
  py-8
  px-12
  gap-y-4

  row-start-1  
  col-start-1
  col-end-7
  justify-self-stretch

  z-10
  border-b-gray-500/10
  border-b-2
  `;

const Header = tw.div`
  row-start-1
  row-end-3
  col-start-1
  col-end-4
`;

const Footer = tw.div`
  col-start-1
  col-end-7
`;

const MainContainer = tw.main`
  grid
  justify-items-stretch
  place-content-stretch
  items-stretch  
  
  row-start-2
  row-end-3
  col-start-1
  col-end-7
  mx-8
  sm:mx-16
  lg:col-start-2
  lg:col-end-6
  lg:mx-0
  self-stretch
  justify-self-stretch  
  
  z-10  
  my-16  
  
  `;
// line-height: 32px;

type LayoutProps = {
  pageTitle: string;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <GlobalLayout>
      <Container>
        <SEO />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <NavContainer>
          <div className="col-span-12 justify-self-center md:justify-self-start md:col-span-2">
            <StaticImage
              src="../../images/dayanbarg.png"
              alt="Codise"
              width={120}
              height={36}
            />
          </div>
          <div className="col-span-12 row-start-2 col-start-1 md:col-span-8 md:row-start-1 md:col-start-3">
            <Navbar></Navbar>
          </div>
          <div className="col-span-2 col-start-11 row-start-2 md:col-span-2 md:row-start-1 md:col-start-11 justify-self-end">
            <ThemeToggle></ThemeToggle>
          </div>
        </NavContainer>
        {/* <Header>
          <WaveBackground isTop={true}></WaveBackground>
        </Header> */}

        <MainContainer>{children}</MainContainer>

        <Footer>
          <WaveBackground isTop={false}></WaveBackground>
        </Footer>
      </Container>
    </GlobalLayout>
  );
};

export default Layout;
