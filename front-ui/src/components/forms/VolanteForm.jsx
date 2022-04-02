// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

// import { MyCheckbox, MyTextInput, MySelect } from './formikComponents';

// const VolanteForm = () => {
//     return (
//       <>
//         <h1>Subscribe!</h1>
//         <Formik
//           initialValues={{
//             volanteIdentificacion: '',
//             fecha: '',
//             proveedorIdentificacion: '',
//             items: [
//               {
//                 itemId: '',
//                 cantidad: '',
//               },
//             ], // added for our select
//           }}
//           validationSchema={Yup.object({
//             volanteIdentificacion: Yup.string()
//               .required('Required'),
//             proveedorIdentificacion: Yup.string()
//               .required('Required'),
//             items: Yup.object()
//               .required('Required'),
//           })}
//           onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//             }, 400);
//             alert(JSON.stringify(values, null, 2));
//           }}
//         >
//           <Form>
//             <MyTextInput
//               label="Volante Consecutivo"
//               name="volanteIdentificacion"
//               type="text"
//               placeholder="Jane"
//             />

//             <label
//             label="Fecha" 
//             name="Fecha">
//                 {`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}
//             </label>
  
//             <MyTextInput
//               label="Proveedor"
//               name="proveedorIdentificacion"
//               type="text"
//             />
  
//             <button type="submit">Submit</button>
//           </Form>
//         </Formik>
//       </>
//     );
// };

// export default VolanteForm

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const VolanteForm = () => {
  return (
    <>
      <h1>Gestión Volante</h1>
      <Formik
        initialValues={{
        volanteIdentificacion: '',
        fecha: '',
        proveedorIdentificacion: '',
        items: [
            {
            itemId: '',
            cantidad: '',
            },
        ], // added for our select
        }}
        validationSchema={Yup.object({
        volanteIdentificacion: Yup.string()
            .required('Required'),
        proveedorIdentificacion: Yup.string()
            .required('Required'),
        items: Yup.object()
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
             <MyTextInput
              label="Volante Consecutivo"
              name="volanteIdentificacion"
              type="text"
              placeholder="Jane"
            />

            {/* <label
            label="Fecha" 
            name="Fecha">
                {`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}
            </label> */}
  
            <MyTextInput
              label="Proveedor"
              name="proveedorIdentificacion"
              type="text"
            />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default VolanteForm