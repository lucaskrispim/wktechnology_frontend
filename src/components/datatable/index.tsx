import axios from "axios";
import Pagination from "../pagination";
import { useState, useEffect } from "react";
import { PeoplePage } from "../../types/people";
import { BASE_URL } from "../../utils/requests";

const DataTable = () => {

  const [activePage, setActivePage] = useState(0);


  const [page, setPage] = useState<PeoplePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/pessoa/${activePage}/${10}`)
      .then(response => {
        setPage(response.data);
      })
  }, [activePage]);

  const changePage = (index:number) =>{
    setActivePage(index);
  }

  const formatarString = (word:string) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    <>
    <div className="card h-100">
      <div className="card-body">
      <div className="row" >
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>Data Nascimento</th>
              <th>Sexo</th>
              <th> Tipo Sanguíneo</th>
            </tr>
          </thead>
          <tbody>

            {
              page.content?.map(x => (
                <tr key={x.id}>
                  <td>{x.nome} </td>
                  <td> {x.altura} </td>
                  <td> {x.peso} </td>
                  <td> {x.dataNasc} </td>
                  <td> {formatarString(x.sexo)} </td>
                  <td> {x.tipoSanguineo} </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
      <div className="row d-flex justify-content-center m-1">
      <Pagination page={page} onPageChange={changePage} /> 
      </div>
    </>
  );
}

export default DataTable;