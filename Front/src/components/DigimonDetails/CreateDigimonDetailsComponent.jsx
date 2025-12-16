import { createDigimon } from '@/api/digimonFetch'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import {object, string} from 'yup'

export default function CreateDigimonDetailsComponent(props) {

    const { setDigimonHasChanged, closeDigimonCreation, digimonHasChanged } = props
    /* 
        const [nombre, setNombre] = useState('')
        const [tipo, setTipo] = useState('')
        const [evolucion, setEvolucion] = useState('')
    
        const handlerOnChangeNombre = (e) =>{
            setNombre(e.target.value)
        }
        const handlerOnChangeTipo = (e) =>{
            setTipo(e.target.value)
        }    
        const handlerOnChangeEvolucion = (e) =>{
            setEvolucion(e.target.value)
        }
        const crearDigimon = async () => {
            await createDigimon( JSON.stringify({
                nombre,
                tipo,
                evolucion
            }))
            setDigimonHasChanged(!digimonHasChanged)
            closeDigimonCreation()
        }
     */
    const crearDigimon = async (opts) => {
        await createDigimon(JSON.stringify(opts))
        setDigimonHasChanged(!digimonHasChanged)
        closeDigimonCreation()
    }
    //Esquema de validación
    const validationSchemaYup = object({
        nombre: string().required(),
        tipo: string().required(),
        evolucion: string().required()
    })

    return (
        <div>
            <h2>Crear Digimon</h2>
            <div>
                <Formik
                    initialValues={{
                        nombre: '',
                        tipo: '',
                        evolucion: ''
                    }}
                    onSubmit={(values) => crearDigimon(values)} validationSchema={validationSchemaYup}>
                    {
                        ({ }) => (<Form>
                            <div>
                                <span>Nombre: </span>
                                <Field type='text' name='nombre' placeholder='Nombre...' />
                                <ErrorMessage name='nombre' component='div' />
                            </div>
                            <div>
                                <span>Tipo</span>
                                <Field type='text' name='tipo' placerholder='Tipo...' />
                                <ErrorMessage name='tipo' component='div' />
                            </div>
                            <div>
                                <span>Evolución</span>
                                <Field type='text' name='evolucion' placerholder='Evolucion...' />
                                <ErrorMessage name='evolucion' component='div' />
                            </div>
                            <button type='submit'>Crear Digimon</button>
                        </Form>)
                    }
                </Formik>


                {/*                  <div>
                <span>Nombre: </span>
                <input value={nombre} onChange={handlerOnChangeNombre} />
            </div>
            <div>
                <span>Tipo: </span>
                <input value={tipo} onChange={handlerOnChangeTipo} />
            </div>                    <div>
                <span>Evolucion: </span>
                <input value={evolucion} onChange={handlerOnChangeEvolucion} />
            </div>
            <div>
                <button onClick={crearDigimon}>Crear</button>
            </div>
        </div>
 */}

            </div>
        </div>
    )
}
