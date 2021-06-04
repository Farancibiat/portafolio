import emailjs from "emailjs-com";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      redirect: false
    },
    actions: {
      setRedirect: value => setStore({ redirect: value }),
      sendMsg:(mailInfo)=>{
        console.log(mailInfo["email"]);
        emailjs.send(
        "service_327kjia",
        "template_9eywuhh",
        {
          name: mailInfo["full_name"],
          message: mailInfo["msg"],
          sendermail: mailInfo["email"]
        },
        "user_YA75D2LJZ1zDtDECKXzWB"
      );
      setStore({ redirect: false })
    }
  }
}
};
export default getState;
