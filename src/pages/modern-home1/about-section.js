// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';
import Button from '../../component/button/button';

// Site Data
import aboutImg from '../../assets/images/modern-demo/about-info-image.webp';

function AboutSection(props) {

  const listItems = [
    { id: 1, item: 'What maintenance does an electric car need?', url: '/'},
    { id: 2, item: 'Analyse each tyre for any excess tread wear.', url: '/blog',},
    { id: 3, item: 'Access control put an electric vehicle charge.', url: '/about-us',},
    { id: 4, item: 'Your unconscious mind now knows.', url: '/team'},
    { id: 5, item: 'Each tyre for any excess tread wear.', url: '/404'},
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-col-left col-image">
              <div className="image-overlay-text">
                <img className="img-fluid" src={aboutImg} alt="" />
                <h3 className="overlay-textbox">We Create Health Programs For Everyone</h3>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="section-col-right col-content">
              <SectionTitle
                extraClass="section-title-new"
                title="We Provides Best Solution Vehicles"
                content="Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites."
              />
              <List className="list-new mb-3 pb-2" icon="fas fa-check" data={listItems} />
              <Button btnClass="btn-lg me-3" btnText="Our Services" btnURL="/about-us" />
              <div className="call-box call-box-custom d-inline-flex align-items-center">
                <div className="icon"><i className="fas fa-phone"></i></div>
                <div className="call-box-text">
                  <div className="content">Call Anytime</div>
                  <Link to="#"><h6>+ 88 ( 9800 ) 6802</h6></Link>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutSection;
