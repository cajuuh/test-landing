import React from "react";
import Timer from "../Countdown/Timer";
import Preloader from "../Preloader/Preloader";
import Optin from "../Optin/Optin";
import { toast, ToastContainer } from "react-toastify";
import { randomElement } from "../../Util/functions";
import { nomes } from "../../Util/constants";
import "./Home.style.css";
import "react-toastify/dist/ReactToastify.css";

const HomeScreen = (props) => {
  const notifyFunction = () => {
    // criar componente Toaster
    toast(randomElement(nomes) + " Acabou de se cadastrar!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  setInterval(() => {
    notifyFunction();
  }, 5000);

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>
            Nome do Site
            <br />
            Está Chegando Pakas Meu!
          </h1>
          <Timer />
          <Optin />
          <Preloader />
          <ToastContainer // Adicionar ao componente Toaster
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
