import './defaultLayout.css'
import Header from "../components/header";
import Navbar from "../components/navbar";

function DefaultLayout(props: any) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="container-fluid d-flex align-items-start">
        <Navbar />
        <div className="content px-3">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
