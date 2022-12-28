import './commonLayout.css'
import Header from "../components/header";
import Navbar from "../components/navbar";
import { ReactNode } from 'react';

interface IPropsCommonLayout {
  children: ReactNode;
}

function commonLayout(props: IPropsCommonLayout) {
  const { children } = props;
  
  return (
    <div>
      <Header />
      <div className="container d-flex align-items-start">
        <Navbar />
        <div className="content px-3 w-100">{children}</div>
      </div>
    </div>
  );
}

export default commonLayout;
