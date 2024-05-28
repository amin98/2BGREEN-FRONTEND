import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductApi from '../../apis/ProductAPI';

const InputField = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div className='space-y-2'>
    <label
      htmlFor={id}
      className='inline-block text-lg font-medium text-gray-800 mt-2.5'
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      className='block w-full px-3 py-2 text-lg border border-gray-200 rounded-lg shadow-sm pe-11 focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50 disabled:pointer-events-none'
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      name={id}
    />
  </div>
);

const TextAreaField = ({ label, id, value, onChange, placeholder, rows }) => (
  <div className='space-y-2'>
    <label
      htmlFor={id}
      className='inline-block text-lg font-medium text-gray-800 mt-2.5'
    >
      {label}
    </label>
    <textarea
      id={id}
      className='block w-full px-3 py-2 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50 disabled:pointer-events-none'
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={id}
    />
  </div>
);

const SelectField = ({ label, id, value, onChange, options }) => (
  <div className='space-y-2'>
    <label
      htmlFor={id}
      className='inline-block text-lg font-medium text-gray-800 mt-2.5'
    >
      {label}
    </label>
    <select
      id={id}
      className='block w-full px-3 py-2 text-lg border border-gray-200 rounded-lg shadow-sm pe-9 focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50 disabled:pointer-events-none'
      value={value}
      onChange={onChange}
      name={id}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const CreateProduct = () => {
  const initialProduct = {
    sku: '',
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: '',
    productImage: '',
    length: 0,
    width: 0,
    height: 0,
    availability: true,
    warranty: '',
  };

  const [product, setProduct] = useState(initialProduct);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleInput = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
  };

  const saveProduct = async event => {
    event.preventDefault();
    try {
      const data = { ...product, productImage: fileName };
      console.log('Product data:', data); // Log the product data to the console
      const response = await ProductApi.addProduct(data);
      if (response.status === 201) {
        setSubmitted(true);
        console.log('Product saved:', response);
        navigate('/');
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const newProduct = () => {
    setProduct(initialProduct);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className='text-center'>
        <h4 className='mb-4 text-2xl font-bold text-primary'>
          Product submitted successfully!
        </h4>
        <button
          className='inline-flex items-center px-4 py-3 text-lg font-semibold border border-transparent rounded-lg text-secondary bg-primary gap-x-2 hover:bg-secondary hover:text-primary disabled:opacity-50 disabled:pointer-events-none'
          onClick={newProduct}
        >
          Add another product
        </button>
        <Link
          to='/admin-portal'
          className='inline-flex items-center px-4 py-3 mt-3 text-lg font-semibold text-center border rounded-lg border-t-secondary transparent hover:text-secondary hover:bg-primary gap-x-2 disabled:opacity-50 disabled:pointer-events-none'
        >
          Back to admin portal
        </Link>
      </div>
    );
  }

  return (
    <div className='mx-5 lg:mx-[100px] px-4 py-10 w-5/6'>
      <h1 className='mb-5 text-2xl font-bold text-primary'>
        Product toevoegen
      </h1>
      <form onSubmit={saveProduct}>
        <div className='p-6 bg-white border shadow rounded-xl'>
          <InputField
            label='SKU'
            id='sku'
            type='text'
            value={product.sku}
            onChange={handleInput}
            placeholder='Enter SKU'
            required
          />
          <InputField
            label='Name'
            id='name'
            type='text'
            value={product.name}
            onChange={handleInput}
            placeholder='Enter name'
            required
          />
          <TextAreaField
            label='Description'
            id='description'
            value={product.description}
            onChange={handleInput}
            placeholder='A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page.'
            rows={6}
            required
          />
          <InputField
            label='Price'
            id='price'
            type='number'
            value={product.price}
            onChange={handleInput}
            placeholder='Enter price'
            required
          />
          <InputField
            label='Quantity'
            id='quantity'
            type='number'
            value={product.quantity}
            onChange={handleInput}
            placeholder='Enter quantity'
            required
          />
          <SelectField
            label='Category'
            id='category'
            value={product.category}
            onChange={handleInput}
            options={[
              { value: '', label: 'Select a category' },
              { value: 'laden', label: 'Laden' },
              { value: 'groendaken', label: 'Groendaken' },
              { value: 'zonnepanelen', label: 'Zonnepanelen' },
            ]}
          />
          <div className='space-y-2'>
            <label
              htmlFor='af-submit-app-upload-images'
              className='inline-block text-lg font-medium text-gray-800 mt-2.5'
            >
              Preview image
            </label>
            <label
              htmlFor='af-submit-app-upload-images'
              className='block p-4 text-center border-2 border-gray-200 border-dashed rounded-lg cursor-pointer group sm:p-7 focus:outline-none focus:ring-1 focus:ring-secondary'
            >
              <input
                id='af-submit-app-upload-images'
                name='af-submit-app-upload-images'
                type='file'
                className='sr-only'
                onChange={handleFileChange}
              />
              {fileName ? (
                <span className='block mt-2 text-lg text-gray-800'>
                  {fileName}
                </span>
              ) : (
                <>
                  <span className='block mt-2 text-lg text-gray-800'>
                    Blader door uw apparaat of{' '}
                    <span className='ml-1 group-hover:text-primary text-primary hover:text-secondary'>
                      sleep uw bestanden.
                    </span>
                  </span>
                  <span className='block mt-1 text-xs text-gray-500 dark:text-neutral-500'>
                    Maximum file size is 2 MB
                  </span>
                </>
              )}
            </label>
          </div>
          <InputField
            label='Length'
            id='length'
            type='number'
            value={product.length}
            onChange={handleInput}
            placeholder='Enter length'
            required
          />
          <InputField
            label='Width'
            id='width'
            type='number'
            value={product.width}
            onChange={handleInput}
            placeholder='Enter width'
            required
          />
          <InputField
            label='Height'
            id='height'
            type='number'
            value={product.height}
            onChange={handleInput}
            placeholder='Enter height'
            required
          />
          <SelectField
            label='Availability'
            id='availability'
            value={product.availability}
            onChange={handleInput}
            options={[
              { value: 'true', label: 'Available' },
              { value: 'false', label: 'Not Available' },
            ]}
          />
          <InputField
            label='Warranty'
            id='warranty'
            type='text'
            value={product.warranty}
            onChange={handleInput}
            placeholder='Enter warranty period'
            required
          />

          <div className='flex justify-start mt-5 gap-x-2'>
            <button
              type='submit'
              className='inline-flex items-center px-4 py-2 text-lg font-semibold border border-transparent rounded-xl bg-primary text-secondary gap-x-2 hover:bg-secondary hover:text-primary disabled:opacity-50 disabled:pointer-events-none'
            >
              Submit your product
            </button>
            <Link
              to='/admin-portal'
              className='inline-flex items-center px-4 py-2 text-lg font-semibold border border-transparent rounded-xl bg-primary text-secondary gap-x-2 hover:bg-secondary hover:text-primary disabled:opacity-50 disabled:pointer-events-none'
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
