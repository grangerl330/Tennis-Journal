import React from 'react'

const UpdateSuccessModal = (props) => {
  return (
    <div className="modal fade mt-5 pt-5" id="updateSuccessModal">
      <div className="modal-dialog modal-lg w-50">
        <div className="modal-content">
          <div className="modal-body text-center my-auto">
            <h5 className="mx-auto mb-3">{props.attribute} successfully updated</h5>
            <button className="btn btn-success text-white w-25" data-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateSuccessModal
