import React, { useState } from 'react'

function AddForm({ onAdd }) {
  const [personName, setPersonName] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!personName || !imgUrl) {
      alert('Please add a name and url')
      return
    }

    onAdd({ personName, imgUrl })
    setImgUrl('')
    setPersonName('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          className="addform-name"
          placeholder="Add name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          style={{ display: 'block' }}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          className="addform-img"
          placeholder="Add image url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          style={{ display: 'block' }}
        />
      </div>

      <input type="submit" value="Add User" style={{ display: 'block' }} />
    </form>
  )
}

export default AddForm
