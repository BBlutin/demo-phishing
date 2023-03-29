/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, Fragment } from "react";
import { useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();
  const mail = searchParams.get("mail");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen h-screen text-neutral-800">
        <div className="w-[450px] border rounded-lg flex flex-col items-center border-neutral-300 p-10">
          <div className="relative w-full h-[60px]">
            <Link href="https://google.fr" target="_blank">
              <Image
                src="/logo-google.png"
                alt="Google"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <h1 className="text-[24px] text-center">Sécurité du compte</h1>
          <p className="text-[16px] text-center mt-2">
            Réinitialisez votre mot de passe Google
          </p>
          <div className="mt-3">
            <div className="pl-[4px] pr-2 py-[4px] flex mx-auto border rounded-2xl border-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-[4px] stroke-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-[14px] text-neutral-600 font-medium">
                {mail}
              </span>
            </div>
          </div>
          <input
            type="password"
            className="w-full px-3 py-4 mt-6 border text-[16px] rounded-md border-neutral-300 placeholder:text-neutral-500"
            placeholder="Mot de passe actuel"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <div className="flex justify-end w-full mt-10">
            <button
              className="text-[14px] text-white rounded-md bg-blue-500 font-medium px-6 py-2 hover:bg-blue-600 transition-all"
              onClick={openModal}
            >
              Suivant
            </button>
          </div>
        </div>
        <div className="mt-8 w-[450px] flex space-x-6 text-[12px]">
          <Link
            href="https://support.google.com/accounts?hl=fr&p=account_iph"
            target="_blank"
          >
            Aide
          </Link>
          <Link
            href="https://accounts.google.com/TOS?loc=FR&hl=fr&privacy=true"
            target="_blank"
          >
            Confidentialité
          </Link>
          <Link
            href="https://accounts.google.com/TOS?loc=FR&hl=fr"
            target="_blank"
          >
            Conditions d'utilisation
          </Link>
        </div>
      </main>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Attention !
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Si il s'agissait d'une véritable tentative d'hameçonnage,
                      votre mot de passe:{" "}
                      <span className="font-bold">{password}</span> associé au
                      compte: <span className="font-bold">{mail}</span> aurait
                      été envoyé a des personnes malveillantes ayant désormais
                      un accès total à votre compte Google.
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none "
                      onClick={closeModal}
                    >
                      J'ai compris, merci!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
