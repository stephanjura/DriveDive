import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Navigation, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import '../../component/car-list/carlist.scss';
import FeatureInfo from '../../component/feature-info';
import List from '../../component/list';
import VehicleShowcase1 from '../../component/car-list';
import TabsPGS from '../../component/tabs/tabs';

// Template
import CarDetailsGeneralInformation from '../../template/car-detail-general-information';
import CarDetailsFeaturesOptions from '../../template/car-detail-features-options';
import CarDetailsVehicleOverview from '../../template/car-detail-vehicle-overview';

// Form
import EnquiryForm from '../../form/enquiry-form';
import FinancingCalculatorForm from '../../form/financing-calculator-form';

// Widget
import { SocialInfo03 } from '../../widget/social-info/social-info';

// Site Data
import CarList, { ExtraFeatureItems } from '../../data/car-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarDetails() {
  // Single Post Dynaic ID
  let { id } = useParams();
  const cardata = CarList.find((e) => e.id === parseInt(id));

  // Tab Content List Items
  const [data1] = useState(CarDetailsGeneralInformation);
  const [data2] = useState(CarDetailsFeaturesOptions);
  const [data3] = useState(CarDetailsVehicleOverview);

  // Details Modal

  const [showModal, setShowModal] = useState(null);
  const openModal = (modalId) => {
    setShowModal(modalId);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  // Swiper Thumbnail
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title={cardata.carName}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Details', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="car-details section-ptb">
            <Container>
              <Row>
                <Col lg={8} md={7}>
                  <div className="car-title">
                    <h3>{cardata.carName}</h3>
                    <p className="car-description">{cardata.description}</p>
                  </div>
                </Col>
                <Col lg={4} md={5} className="text-lg-end">
                  <div className="car-price">
                    <span className="old-price">
                      <i className="fa-solid fa-dollar-sign"></i>
                      {cardata.carPrice}
                    </span>
                    <span className="new-price">
                      <i className="fa-solid fa-dollar-sign"></i>
                      {cardata.carNewPrice}
                    </span>
                  </div>
                  <span>Plus Taxes & Licensing</span>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="details-nav">
                    <ul className="list-unstyled">
                      {cardata.leadForm &&
                        cardata.leadForm.map((modal, index) => (
                          <li key={index}>
                            <Link
                              key={modal.id}
                              onClick={() => openModal(modal.id)}
                            >
                              <i className={modal.icon}></i>
                              {modal.title}
                            </Link>
                          </li>
                        ))}
                      <li>
                        <Link to="#" onClick={() => window.print()}>
                          <i className="fa-solid fa-print"></i>Print this page
                        </Link>
                      </li>
                    </ul>
                    {cardata.leadForm &&
                      cardata.leadForm.map((modal, index) => (
                        <Modal
                          size={modal.size}
                          className="car-details-model"
                          show={showModal === modal.id}
                          onHide={closeModal}
                          key={index}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>{modal.title}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>{modal.form}</Modal.Body>
                        </Modal>
                      ))}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={7}>
                  <div className="car-img-slider">
                    {/* <img className="w-100" src={cardata.imgSrc} alt="" /> */}
                    {cardata.gallery ? (
                      <div className="thumbnail-image-slider">
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          loop={true}
                          navigation={true}
                          modules={[A11y, FreeMode, Navigation, Thumbs]}
                          thumbs={{ swiper: thumbsSwiper }}
                        >
                          {cardata.gallery.map((val, ind) => {
                            if (ind < 5) {
                              return (
                                <SwiperSlide key={ind}>
                                  <img
                                    className="w-100"
                                    src={val.image}
                                    alt=""
                                  />
                                </SwiperSlide>
                              );
                            }
                            return null;
                          })}
                        </Swiper>
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          loop={true}
                          spaceBetween={0}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper"
                        >
                          {cardata.gallery.map((val, ind) => {
                            if (ind < 5) {
                              return (
                                <SwiperSlide key={ind}>
                                  <img
                                    className="w-100"
                                    src={val.image}
                                    alt=""
                                  />
                                </SwiperSlide>
                              );
                            }
                            return null;
                          })}
                        </Swiper>
                      </div>
                    ) : (
                      {
                        /* <img className=" w-100" src={val.image} alt="" />*/
                      }
                    )}
                  </div>
                  <div className="car-detail-tab">
                    <TabsPGS
                      extraClass=""
                      tabActive="0"
                      tabsTitle={[
                        { id: 1, title: 'General Information' },
                        {
                          id: 2,
                          title: 'Features & Options',
                        },
                        {
                          id: 3,
                          title: 'Vehicle Overview',
                        },
                      ]}
                      tabsContent={[
                        { id: 31, content: data1 },
                        { id: 32, content: data2 },
                        { id: 33, content: data3 },
                      ]}
                    />
                  </div>
                  <div className="extra-feature">
                    <h6>extra feature</h6>
                    <List icon="fas fa-check" data={ExtraFeatureItems} />
                  </div>
                  <div className="feature-car">
                    <h6>Recently Vehicle</h6>
                    <Swiper
                      modules={[Navigation, A11y]}
                      navigation
                      spaceBetween={15}
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
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {CarList.map((val, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <VehicleShowcase1
                              className="bg-light recent-slid"
                              key={index}
                              imgSrc={val.imgSrc}
                              carName={val.carName}
                              carPrice={val.carPrice}
                              carNewPrice={val.carNewPrice}
                              registrationDate={val.registrationDate}
                              transmission={val.transmission}
                              mileage={val.mileage}
                              list={val.review}
                              id={val.id}
                              attri={val.attributes}
                              lightboxImages={val.gallery}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </Col>
                <Col lg={4} md={5}>
                  <div className="car-details-sidebar">
                    <div className="details-block details-weight">
                      <h5 className="weight-title">Description</h5>
                      <ul className="car-details-list">
                        {cardata.attributes
                          ? cardata.attributes.map((val, index) => {
                              return (
                                <li key={index}>
                                  <span>{val.title}</span>
                                  <strong className="text-end">
                                    {val.specification}
                                  </strong>
                                </li>
                              );
                            })
                          : 'Description not found'}
                      </ul>
                    </div>
                    <div className="details-social details-weight">
                      <h5 className="weight-title">Share now</h5>
                      <SocialInfo03 />
                    </div>
                    <div className="details-form details-weight">
                      <h5 className="weight-title">Send Enquiry</h5>
                      <EnquiryForm />
                    </div>
                    <div className="details-phone details-weight">
                      <FeatureInfo
                        className="feature-box-style-03 grey-border"
                        icon="fa fa-headphones"
                        title="1-888-345-888"
                        content="Call our seller to get the best price "
                      />
                    </div>
                    <div className="details-form details-weight">
                      <h5 className="weight-title">Financing Calculator</h5>
                      <FinancingCalculatorForm />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
