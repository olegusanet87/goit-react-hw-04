import css from '../SearchBar/SearchBar.module.css'
import { Formik, Form, Field } from 'formik';
import { IoSearchSharp } from "react-icons/io5";

import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar ({ onSearch })  {
    return (
         <div className={css.container}>
        <header className={css.header}>
            <Formik
                initialValues={{ query: '' }}
                onSubmit={(values, actions ) => {
                    if (values.query === '') {
                        toast.error('Oops, empty search bar! Please enter a query!');
                    }
                    onSearch(values.query);
                    actions.resetForm();
                }}
            >
                <Form className={css.form}>
                    <Field
                    className={css.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button className={css.button} type="submit" >
                        <IoSearchSharp size={16} />
                    </button>

                    <Toaster 
        position="top-right"
        reverseOrder={false}/>
                </Form>
            </Formik>
            </header>
            </div>
    );
}
