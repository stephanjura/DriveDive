// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import VideoPopup from '../../component/video';

function VideoCounter(params) {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="video-btn">
            <div className="video-box">
              <VideoPopup
                theme="video-style-2"
                size="lg"
                videoURL="https://player.vimeo.com/video/783455878?h=46672b3b96"
              />
            </div>
            <div className="section-title-new text-center">
              <h3 className="title text-white mt-4">Want To Know More About? Play Our Promotional Video Now!</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoCounter;
