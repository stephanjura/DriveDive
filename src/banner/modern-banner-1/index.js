import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Site Data
import BannerImg1 from '../../assets/images/banner/modern-home1/home-bg-text.webp';
import BannerImg2 from '../../assets/images/banner/modern-home1/main-home-car.webp';

// SCSS
import './style.scss';

function ModernBanner1() {
  return (
    <>
      <section className="banner section-bg-half">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="banner-bg-text">
                <img className="img-fluid" src={BannerImg1} alt="Banner Text" />
              </div>
              <img className="img-fluid banner-car" src={BannerImg2} alt="Banner Text" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ModernBanner1;
