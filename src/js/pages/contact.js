import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTranslations } from "../store/LanguageContext";
import { EnvelopeFill, Send, Person, ChatText } from "react-bootstrap-icons";
import { Context } from "../store/appContext";
import "../styles/common.css"; 
import "../styles/experience.css";
import BodyFooter from "../component/bodyFooter";

const Contact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const { t, language } = useTranslations();

  React.useEffect(() => {
    document.title = t('contactPage.pageTitle') + " - Felipe Arancibia";
  }, [t, language]);
  
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      msg: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required('contactPage.validation.nameRequired'),
      email: Yup.string()
        .email('contactPage.validation.emailInvalid')
        .required('contactPage.validation.emailRequired'),
      msg: Yup.string().required('contactPage.validation.messageRequired'),
    }),
    onSubmit: (values) => {
      actions.sendMsg(values);
      navigate('/');
    },
  });

  const inputStyle = {
    backgroundColor: "rgba(33, 37, 41, 0.95)",
    color: "rgba(255, 255, 255, 0.9)",
    border: "none"
  };

  return (
    <>
      <div className="bodyFrame">
        <div className="contentScroller">
          <div className="px-4 py-4">
            {/* Hero Section */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="text-center text-warning mb-4" style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <EnvelopeFill className="me-2" /> {t('contactPage.pageTitle')}
                </h1>
                <p className="lead text-light mb-4">
                  {t('contactPage.pageSubtitle')}
                </p>
              </div>
            </div>
            
            <form onSubmit={formik.handleSubmit} className="p-lg-4">
              {/* Full Name input */}
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text bg-warning text-dark border-0">
                    <Person />
                  </span>
                  <input
                    placeholder={t('contactPage.formFullNamePlaceholder')}
                    className="form-control bg-dark text-light border-0"
                    id="full_name"
                    name="full_name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.full_name}
                    style={inputStyle}
                  />
                </div>
                {formik.errors.full_name && formik.touched.full_name ? (
                  <div className="text-warning mt-2 small">
                    {t(formik.errors.full_name)}
                  </div>
                ) : null}
              </div>

              {/* Email input */}
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text bg-warning text-dark border-0">
                    <EnvelopeFill />
                  </span>
                  <input
                    placeholder={t('contactPage.formEmailPlaceholder')}
                    className="form-control bg-dark text-light border-0"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={inputStyle}
                  />
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-warning mt-2 small">
                    {t(formik.errors.email)}
                  </div>
                ) : null}
              </div>

              {/* Message input */}
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text bg-warning text-dark border-0">
                    <ChatText />
                  </span>
                  <textarea
                    placeholder={t('contactPage.formMessagePlaceholder')}
                    className="form-control bg-dark text-light border-0"
                    id="msg"
                    name="msg"
                    rows="5"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msg}
                    style={inputStyle}
                  />
                </div>
                {formik.errors.msg && formik.touched.msg ? (
                  <div className="text-warning mt-2 small">
                    {t(formik.errors.msg)}
                  </div>
                ) : null}
              </div>

              {/* Submit button */}
              <div className="text-center mt-4">
                <button className="btn btn-warning px-5 py-2" type="submit">
                  {t('contactPage.formSubmitButton')} <Send className="ms-2" />
                </button>
                <p className="text-light mt-3 small">
                  {t('contactPage.formSubmitNote')}
                </p>
              </div>
            </form>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
}
export default Contact;
