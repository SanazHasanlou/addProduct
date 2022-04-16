import { useState } from 'react';
import "./Form.css";

const Form = ({ onAdd }) => {
  const [ title, setTitle ] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    onAdd({ title });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={submitForm} className="add-product-form">
        <div className="form-input">
          <input
            type="text"
            placeholder="Add Product"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
