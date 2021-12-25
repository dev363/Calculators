import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";

export default (props) => {
  return (
    <ThemeProvider>
      <Header></Header>
      <Container>{props.children}</Container>
      <Footer></Footer>
    </ThemeProvider>
  );
};

const ThemeProvider = (props) => {
  return <div>{props.children}</div>;
};
