import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import Navbar from "../components/navbar/Navbar";
import prova from "../../public/assets/images/prova.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Image src={prova} />
    </>
  );
}
