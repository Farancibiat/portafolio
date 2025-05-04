import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { EnvelopeFill } from "react-bootstrap-icons";
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
          <div className="container mt-4 px-5 pb-5 pt-3 bg-dark card" style={{ border: "none" }}>
            <div className="text-center text-warning my-4" style={{ fontSize: "2rem", fontWeight: "500" }}>
              <EnvelopeFill/> Contacto
            </div>
            <p className="text-light">
              Al enviar este formulario, te llegará una copia al correo que
              ingreses. <br />
              Te contactaré lo antes posible.
            </p>
            <form onSubmit={formik.handleSubmit}>
              {/* Full Name input and error msg alternative*/}
              <div className="mb-3">
                <div className="row">
                  <input
                    placeholder="Nombre"
                    className="form-control"
                    id="full_name"
                    name="full_name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.full_name}
                  />
                  {formik.errors.full_name && formik.touched.full_name ? (
                    <div className="text-warning mt-1">
                      *{formik.errors.full_name}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Email input and error msg alternative */}
              <div className="mb-3">
                <div className="row">
                  <input
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-warning mt-1">
                      *{formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Message input and error msg alternative */}
              <div className="mb-3">
                <div className="row">
                  <textarea
                    placeholder="Mensaje"
                    className="form-control"
                    id="msg"
                    name="msg"
                    rows="4"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msg}
                  />
                  {formik.errors.msg && formik.touched.msg ? (
                    <div className="text-warning mt-1">
                      *{formik.errors.msg}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Submit button and return to contacts link*/}
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-warning" type="submit">
                  Enviar
                </button>
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
