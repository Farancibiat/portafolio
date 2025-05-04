import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { EnvelopeFill, Send, Person, ChatText } from "react-bootstrap-icons";
import { Context } from "../store/appContext";

import BodyFooter from "../component/bodyFooter";

const Contact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      msg: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Nombre es requerido."),
      email: Yup.string()
        .email("Email inválido.")
        .required("Email es requerido."),
      msg: Yup.string().required("No olvides agregar tu mensaje."),
    }),
    onSubmit: (values) => {
      actions.sendMsg(values);
      navigate('/');
    },
  });

  return (
    <>
      <div className="bodyFrame">
        <div className="container contentScroller">
          <div className="container my-4 px-4 py-5 bg-dark card" style={{ border: "none", borderRadius: "15px" }}>
            {/* Hero Section */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold text-warning mb-3">
                  Contacto <EnvelopeFill className="ms-2" />
                </h1>
                <p className="lead text-light mb-4">
                  ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a transformar tus ideas en soluciones web.
                </p>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                  <form onSubmit={formik.handleSubmit}>
                    {/* Full Name input */}
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text bg-warning text-dark">
                          <Person />
                        </span>
                        <input
                          placeholder="Nombre completo"
                          className="form-control bg-dark text-light border-dark"
                          id="full_name"
                          name="full_name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.full_name}
                        />
                      </div>
                      {formik.errors.full_name && formik.touched.full_name ? (
                        <div className="text-warning mt-2 small">
                          {formik.errors.full_name}
                        </div>
                      ) : null}
                    </div>

                    {/* Email input */}
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text bg-warning text-dark">
                          <EnvelopeFill />
                        </span>
                        <input
                          placeholder="Correo electrónico"
                          className="form-control bg-dark text-light border-dark"
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                      {formik.errors.email && formik.touched.email ? (
                        <div className="text-warning mt-2 small">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>

                    {/* Message input */}
                    <div className="mb-4">
                      <div className="input-group">
                        <span className="input-group-text bg-warning text-dark">
                          <ChatText />
                        </span>
                        <textarea
                          placeholder="Cuéntame sobre tu proyecto o consulta"
                          className="form-control bg-dark text-light border-dark"
                          id="msg"
                          name="msg"
                          rows="5"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.msg}
                        />
                      </div>
                      {formik.errors.msg && formik.touched.msg ? (
                        <div className="text-warning mt-2 small">
                          {formik.errors.msg}
                        </div>
                      ) : null}
                    </div>

                    {/* Submit button */}
                    <div className="text-center mt-4">
                      <button className="btn btn-warning px-5 py-2" type="submit">
                        Enviar mensaje <Send className="ms-2" />
                      </button>
                      <p className="text-muted mt-3 small">
                        Al enviar este formulario, recibirás una copia en el correo electrónico proporcionado.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
}
export default Contact;
