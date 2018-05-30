import React from 'react'
import ReactModal from 'react-modal'
import '../styles/model.css';

export const UserDeleteModal = (props) => {
  // console.log(`I am in UserDeleteModal`)
  return (
    <div>
      <main role="main" className="container">
        <ReactModal
          isOpen={!!props.selectedUser}  // Boolean describing if the modal should be shown or not.
          contentLabel='Selected UserId' // String indicating how the content container should be announced to screenreaders
          role="dialog"   // String indicating the role of the modal, allowing the 'dialog' role to be applied if desired.       
          className="Modal pt-7" >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col">
                      <h6><i className="fa fa fa-forward" aria-hidden="true"></i>
                        Delete <span className="badge badge-success">{`UserId = ${props.selectedUser}`}</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Are you sure you want to delete User?</h5>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <button className="btn btn-outline-danger btn-md btn-block custom-button" onClick={props.afterOpenModal}>Delete </button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-outline-secondary btn-md btn-block custom-button" onClick={props.closeModal}>Cancel </button>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </ReactModal>

      </main>
    </div>
  )


}

ReactModal.setAppElement(document.getElementById('app'));
