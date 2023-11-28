import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/requests";
import { AvgSexPage } from "../../types/people"

const AvgTable = () => {

  const [avgSexData, setAvgSexData] = useState<AvgSexPage>({});


  useEffect(() => {
    axios.get(`${BASE_URL}/pessoa/mediaDeIdadePorSexo`)
      .then(response => {
        const avgSexpage = {content:Object.entries(response.data).map(([sexo, avg]) => ({ sexo, avg }))} as AvgSexPage;
        
        setAvgSexData(avgSexpage);
        
      })
  }, [avgSexData]);

  return (
    <>
    <div className="card h-100">
      <div className="card-body">
      <div className="row" >
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Sexo</th>
              <th>Idade Média</th>
            </tr>
          </thead>
          <tbody>

            {
              avgSexData.content?.map(x => (
                <tr>
                  <td>{x.sexo[0]} </td>
                  <td> {x.avg} </td>
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

export default AvgTable;