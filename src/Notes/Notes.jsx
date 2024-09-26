import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const DataTable = ({ searchTerm }) => {
  const data = [
      { id: 1, nom: 'Doumbia', prenom: 'Awa', numero: '00000', code: '12WE',description: 'lorem' },
     
  ];

  const filteredData = data.filter(item =>
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="table-responsive">

      <table className="table table-bordered">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Numero</th>
                  <th>Code</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {filteredData.map(item => (
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nom}</td>
                      <td>{item.prenom}</td>
                      <td>{item.numero}</td>
                      <td>{item.code}</td>
                      <td>
          <Link to='/detail' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Voir</button>
          </Link>
        
          
         
      </td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
  );
};
export default function Notes() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ marginTop: '-45%', width: '80%', marginLeft: '15%' }}>
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document" id='add'>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Nouveau Etudiants</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Nom:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Prenom:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Numero:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Code:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Ajouter</button>
      </div>
    </div>
  </div>
</div> */}

                <h1 className="h3 mb-2 text-gray-800">Etudiants</h1>
                 
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Listes des Etudiants</h6>
                    </div>
                    
                    <div className="card-body">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="form-control mb-3"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <DataTable searchTerm={searchTerm} />
                    </div>
                </div>
            </div>
        </div>
  )
}
