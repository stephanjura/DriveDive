import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { AddCarSchema } from '../../form/schemas';
import { Container, Col, FormCheck, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';
import fileIcon from '../../assets/images/upload-img-icon.png';

// Import styles
import './style.scss';
import { Link } from 'react-router-dom';
import Googlemap from '../../component/googlemap/googlemap';

const initialValues = {
    VehicleTitle: '',
    Year: '',
    Make: '',
    Model: '',
    StockNumber: '',
    VINNumber: '',
    RegularPrice: '',
    SalePrice: '',
    RequestPrice: '',
    VehicleLocation: '',
    toggle: 'false',
    checked: [],
};

function AddCar(props) {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: AddCarSchema,
        onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        },
    });
    console.log(errors);


  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Add Car"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Add Car', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper cdfs-add-car-page">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                    <div className="cdfs-add-car-form-wrapper">
                        <form className="cdfs-car-form" onSubmit={handleSubmit}>
                            <div className="cdfs-av-section">
                                <div className="cdfs-av-section-heading">
                                    <h4 class="cdfs-av-title">Add Vehicle Details</h4>
                                </div>
                                <Row className="row-gap">
                                    <Col md={12}>
                                        <div className="input-control">
                                        <input
                                            className="form-control"
                                            type="text"
                                            autoComplete="off"
                                            name="VehicleTitle"
                                            id="vehicletitle"
                                            value={values.VehicleTitle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Title"
                                        />
                                        <p className="note">If the title is not entered then it will be auto-generated using Year, Make, and Model.</p>
                                        {errors.VehicleTitle && touched.VehicleTitle ? (
                                            <p className="error">{errors.VehicleTitle}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="input-control">
                                        <label>Year*</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            autoComplete="off"
                                            name="Year"
                                            id="year"
                                            value={values.Year}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Year"
                                        />
                                        {errors.Year && touched.Year ? (
                                            <p className="error">{errors.Year}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="input-control">
                                        <label>Make*</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="Make"
                                            value={values.Make}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Make"
                                        />
                                        {errors.Make && touched.Make ? (
                                            <p className="error">{errors.Make}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="input-control">
                                        <label>Model*</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="Model"
                                            value={values.Model}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Model"
                                        />
                                        {errors.Model && touched.Model ? (
                                            <p className="error">{errors.Model}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control">
                                        <label>Stock Number</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="StockNumber"
                                            value={values.StockNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Stock Number"
                                        />
                                        {errors.StockNumber && touched.StockNumber ? (
                                            <p className="error">{errors.StockNumber}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control">
                                        <label>VIN Number</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="VINNumber"
                                            value={values.VINNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter VIN Number"
                                        />
                                        {errors.VINNumber && touched.VINNumber ? (
                                            <p className="error">{errors.VINNumber}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control">
                                        <label>Regular Price*</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="RegularPrice"
                                            value={values.RegularPrice}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Regular Price"
                                        />
                                        {errors.RegularPrice && touched.RegularPrice ? (
                                            <p className="error">{errors.RegularPrice}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control">
                                        <label>Sale Price</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name="SalePrice"
                                            value={values.SalePrice}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Sale Price"
                                        />
                                        {errors.SalePrice && touched.SalePrice ? (
                                            <p className="error">{errors.SalePrice}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control request-radio">
                                            <label>Enable Request Price</label>
                                            <div className="radio-Box">
                                                <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    label="1"
                                                    name="group1"
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label p-0" for="flexRadioDefault1">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    label="2"
                                                    name="group1"
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label p-0" for="flexRadioDefault2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="input-control">
                                        <label>Request Price Label</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="RequestPrice"
                                            value={values.RequestPrice}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Request Price Label"
                                        />
                                        {errors.RequestPrice && touched.RequestPrice ? (
                                            <p className="error">{errors.RequestPrice}</p>
                                        ) : null}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="cdfs-av-section">
                                <div className="cdfs-av-section-heading">
                                    <h4 class="cdfs-av-title">Vehicle Images</h4>
                                </div>
                                <div className="cdfs-av-section-content">
                                    <div className="input-control">
                                        <label>Upload Images <span class="upload-image-limit">(Upload Limit: <span class="upload-image-limit-count">10</span>)</span></label>
                                        <div className="cdfs-image-upload">
                                            <div className="select-file-info">
                                                <div className="select-file-icon"><img src={fileIcon} alt="File Icon" /></div>
                                                <div className="select-file-note">Drag and drop images here, <span>OR</span></div>
                                            </div>
                                            <Link to="#" class="button select-image">Choose Files</Link>
                                            <input type="file" id="car-imgs" name="car_images[]" class="form-control" multiple="" data-image_size_limit="4194304"></input>
                                        </div>
                                        <div class="cdfs-image-upload-size-limit">Image Size Limit: 4 Mb (4194304 Bytes)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cdfs-av-section">
                                <div className="cdfs-av-section-heading">
                                    <h4 class="cdfs-av-title">Vehicle Location</h4>
                                </div>
                                <div className="cdfs-av-section-content">
                                    <div className="input-control">
                                        <input
                                            className="form-control"
                                            type="text"
                                            autoComplete="off"
                                            name="VehicleLocation"
                                            id="vehicleLocation"
                                            value={values.VehicleLocation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Vehicle Location"
                                        />
                                        {errors.VehicleLocation && touched.VehicleLocation ? (
                                            <p className="error">{errors.VehicleLocation}</p>
                                        ) : null}
                                    </div>
                                    <div className="input-location">
                                        <Googlemap />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group cdfs-submit-button">
                                <button className="button red" disabled={isSubmitting} type="submit">Submit Details</button>
                            </div>
                        </form>
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

export default AddCar;
