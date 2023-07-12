import { useRef } from "react";

export default function useModal() {
  const overlay = useRef();
  const modal = useRef();
  const openModal = () => {
    overlay.current?.classList.add("overlay--open");
  };
  const closeModal = () => {
    overlay.current?.classList.remove("overlay--open");
  };
  const toggleModal = () => {
    overlay.current?.classList.toggle("overlay--open");
  };
  return {
    openModal,
    closeModal,
    toggleModal,
    modal,
    overlay,
  };
}
