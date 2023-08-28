import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import Trophy from "../public/trophy.png";
import Gift from "../public/gift.png";

const TestModals = () => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  return (
    <div className="relative flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5 ">
        <button
          className="border border-blue-100 text-gray-800 hover:text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
          font-bold px-6 h-12 rounded-md hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={handleOpenSecondModal}
        >
          Découvrez notre système de fidélisation <AiFillFire className="text-xl" />
        </button>
      </div>

      {showSecondModal ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-1/2 p-4 text-center">
            <div className="mx-auto mb-4">
              <Image src={Gift} width={100} height={100} objectFit="contain" />
            </div>
            <h2 className="text-base mt-2 text-gray-400 dark:text-gray-300 font-semibold">
              Pour chaque commande effectuée, vous gagnez 1 Tito qui est l'équivalent de 10€.
              Profitez-en pour vous faire plaisir !
            </h2>
            <div className="flex justify-center mt-4">
              <button
                className="px-6 py-2 border border-red-100 hover:bg-red-700 hover:text-white rounded-md text-red-600 hover:shadow-lg font-semibold"
                onClick={handleCloseSecondModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;
