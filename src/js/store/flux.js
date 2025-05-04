import emailjs from "@emailjs/browser";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      sendMsg: (mailInfo) => {
        emailjs.send(
          "service_yhcp95e",
          "template_9eywuhh",
          {
            name: mailInfo["full_name"],
            message: mailInfo["msg"],
            sendermail: mailInfo["email"],
          },
          "user_YA75D2LJZ1zDtDECKXzWB"
        )
        .then((result) => {
          console.log("Mensaje enviado con éxito:", result.text);
        })
        .catch((error) => {
          console.error("Error al enviar mensaje:", error.text);
        });
      },
    },
  };
};
export default getState;
