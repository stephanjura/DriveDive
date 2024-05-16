import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { EnquiryFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  Message: '',
};

function EnquiryForm(props) {
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
    validationSchema: EnquiryFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`enquiry-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`enquiry-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={12}>
              <div className="input-control">
                <label>Name*</label>
                <input
                  type="name"
                  autoComplete="off"
                  name="Username"
                  id="name"
                  value={values.Username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                {errors.Username && touched.Username ? (
                  <p className="error">{errors.Username}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Email address*</label>
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Message*</label>
                <textarea
                  rows={5}
                  name="Message"
                  value={values.Message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                />
                {errors.Message && touched.Message ? (
                  <p className="error">{errors.Message}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <button
                  className="button red"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
