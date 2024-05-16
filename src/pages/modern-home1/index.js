import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import { PostStyle3 } from '../../component/blog';
import { VehicleShowcase3 } from '../../component/car-list';
import {CounterstyleFour} from '../../component/counter/counter';

// Site Data
import BlogList from '../../data/blog-list';
import CarList from '../../data/car-list';
import videoImage from '../../assets/images/modern-demo/video-bg-image.webp';
import appBG from '../../assets/images/modern-demo/section-bg-map.webp';

// Page Section
import ModernBanner1 from '../../banner/modern-banner-1';
import AboutSection from './about-section';
import ClientLogoSection from './client-logo';
import CustomFilters from '../../form/custom-filters';
import VideoCounter from './video-counter';
import DownloadApp from './download-app';

// SCSS
import './home.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModernHome1() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <ModernBanner1 />
          
          {/* Car Search section*/}
          <CustomFilters className="search-block-new" />

          {/* Infobox section*/}
          <section className="section-ptb bg-gradient-grey">
            <Container>
              <Row className="row align-items-center mb-lg-4">
                <Col lg={6}>
                  <SectionTitle
                    title="We Provides Best Solution EV Vehicles"
                    extraClass="mb-0"
                  />
                </Col>
                <Col lg={6}>
                  <p className="mb-0">Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites.</p>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1">
                    <InfoBox className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-travel"
                      title="Charging Station"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Read More"
                      linkurl="#"
                    />
                    <InfoBox className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-car-repair"
                      title="Auto Return Service"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Read More"
                      linkurl="#"
                    />
                    <InfoBox className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-disc-brake"
                      title="Brake Check & Services"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Read More"
                      linkurl="#"
                    />
                    <InfoBox className="mt-4"
                      icontype="default"
                      iconshape="default"
                      icon="glyph-icon flaticon-wallet"
                      title="Best Prices In District"
                      description="Galley simply dummy text lorem Ipsum is of the printin k a of type and"
                      linktext="Read More"
                      linkurl="#"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Feature Car section*/}
          <section className="feature-car section-pt">
            <Container>
              <Row>
                <Col lg={8} md={12} className="offset-lg-2">
                  <SectionTitle
                    extraClass="section-title-new text-center mb-2"
                    title="Our Featured Cars"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    {CarList.map((val, index) => {
                        return (
                          <VehicleShowcase3
                            className="car-item-grid"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            carPrice={val.carPrice}
                            carNewPrice={val.carNewPrice}
                            id={val.id}
                            attri={val.attributes}
                            lightboxImages={val.gallery}
                          />
                        );
                      })}
                    </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section-ptb provides-best-solution">
            <AboutSection />
          </section>
          
          {/* Client Logo section*/}
          <section className="section-pb">
            <ClientLogoSection />
          </section>
          
          {/* Video section*/}
          <section className="section-ptb video-section" style={{backgroundImage: `url(${videoImage})`}}>
            <VideoCounter />
          </section>
          
          {/* Counter section*/}
          <section className="">
            <Container>
              <Row className="bg-primary new-counter-box mx-0">
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="400"
                    countSuffix="k"
                    countTitle="Vehicles Stock"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="25"
                    countSuffix="+"
                    countTitle="Years Experience"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="3990"
                    countSuffix="+"
                    countTitle="Satisfied Clients"
                  />
                </Col>
                <Col xl={3} lg={6} md={6}>
                  <CounterstyleFour
                    className="text-center"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="150"
                    countSuffix="+"
                    countTitle="Dealer Review"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          
          {/* Download App section*/}
          <section className="section-mtb download-application">
            <div className="section-overlay" data-overlay-opacity="0.2" style={{backgroundImage: `url(${appBG})`}}></div>
            <DownloadApp />
          </section>

          {/* Latest news  section*/}
          <section className="section-pb latest-news-section">
            <Container>
              <Row className="row justify-content-center">
                <Col md={8}>
                  <SectionTitle
                    extraClass="text-center section-title-new"
                    title="Our Recent News & Articles"
                    content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 1,
                      },
                      570: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 2,
                      },
                      1199: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {BlogList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <PostStyle3
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>
          
        </div>
      </div>
    </>
  );
}

export default ModernHome1;
