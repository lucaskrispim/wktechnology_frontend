import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import DataTable from "../../components/datatable";
import Barchart from "../../components/barchart";
import AvgTable from "../../components/avgagebysextable";
import ReceiveTable from "../../components/receivestable";

const DashBoard = () => {
  return (
    <>
      <Navbar title="Blood Monitor"/>
      <div className="container">

        <div className="row">

          <div className="col-sm-6 mb-2">
          <Barchart title="Doadores por estado" urlPath="countEstados"/>
          </div>
          <div className="col-sm-4 mb-2">
          <Barchart title="Número de doadores por receptor" urlPath="quantidadeDeDoadoresPorRecptor"/>
          </div>
          <div className="col-sm-2 mb-2">
            {/* <div className="row">
              <AvgTable/>
            </div> */}
            
              <ReceiveTable/>
            
          </div>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
  }
  
  export default DashBoard;