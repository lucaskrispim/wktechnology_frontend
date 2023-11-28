import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/requests";
import { KindReceivesPage } from "../../types/people"

const ReceiveTable = () => {

  const [kindReceivesData, setKindReceivesData] = useState<KindReceivesPage>({});


  useEffect(() => {
    axios.get(`${BASE_URL}/pessoa/imcMedioPorFaixaEtaria`)
      .then(response => {
        const kindReceivespage = {content:Object.entries(response.data).map(([kind,count]) => ({kind,count}))} as KindReceivesPage;
        
        setKindReceivesData(kindReceivespage);
        
      })
  }, [kindReceivesData]);

  return (
    <>
    <div className="card h-100">
      <div className="card-body">
      <div className="row" >
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Faixa Etária</th>
              <th>Imc médio</th>
            </tr>
          </thead>
          <tbody>

            {
              kindReceivesData.content?.map(x => (
                <tr>
                  <td>{x.kind} </td>
                  <td> {x.count} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default ReceiveTable;