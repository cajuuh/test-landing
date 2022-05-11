import { toast } from "react-toastify";

const ToasterProps = {
  message: "",
  notifyFunction: Function,
};

const ToasterComponent = (ToasterProps) => {
  ToasterProps.notifyFunction = () => {
    toast("🦄 " + ToasterProps.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
};

export default ToasterComponent;
