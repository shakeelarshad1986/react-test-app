import React, { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { connect } from 'react-redux'
import SelectField from '../../components/ui/select_field';
import Button from '../../components/ui/button';
import { genUUId } from '../../utils/uniId';


const schema = yup.object().shape({
    breed: yup.string().required(),
})

const Title2 = ({ breedLists, breedList, getBreeds, getBreed, loading, resetMessages }) => {

    const [numberOfBreeds, setNumberOfBreeds] = useState(1);
    const {hook, register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            breed: '',
            number_of_breed: 0,
        },
        resolver: yupResolver(schema)
    });



    useEffect(() => {
        getBreeds();
        resetMessages();
    }, [])

    const resetFilter = () => {
        reset();
        resetMessages();
    }

    const submitForm = (data) => {
        getBreed(data);
    }


    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="row">
                        <SelectField
                            breedLists={breedLists}
                            colClass="col-md-3"
                            error={errors?.breed}
                            hook={register}
                            id="select-breed"
                            inputClassName="form-control"
                            label="Breed"
                            labelClass="col-form-label col-form-label-sm"
                            name='breed'
                        />
                        <SelectField
                            name='no_of_breed'
                            colClass="col-md-2"
                            hook={register}
                            id="number-of-breed"
                            inputClassName="form-control"
                            label="No of Images"
                            labelClass="col-form-label col-form-label-sm"
                            onChange={(e) => setNumberOfBreeds(e.target.value)}
                            options={['', 1, 2, 3, 4, 6, 7, 8, 9]}
                            flag
                        />

                        <Button
                            btnClass="success"
                            styles="27px"
                            btnContainer="col-md-2"
                            label="View Images"
                            type="submit"
                        />

                        <Button
                            btnClass="danger"
                            styles="27px"
                            btnContainer="col-md-2"
                            label="Reset"
                            type="button"
                            onClick={resetFilter}
                        />
                    </div>
                </form>

            </div>


            {/* Show images */}
            {
                loading ? (<h2 style={{ marginBottom: "15px", marginLeft: "15px" }}>Loading......</h2>) : (
                    <div className="container-fluid" style={{ marginTop: "20px", marginBottom: "10px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Breed Images</h2>
                        <div className="row">

                            {
                                breedList.length > 0 ? breedList.filter((_, index) => !(index >= numberOfBreeds))
                                    .map((breed, index) => (
                                        <div className="col-md-3" key={breed + " " + genUUId}>
                                            <div className="thumbnail">
                                                <img src={breed} alt="Lights" style={{ width: "200px", height: '150px' }} />
                                            </div>
                                        </div>

                                    )) : (
                                    <div className="col-md-12">
                                        <h2>There is no breed for the above category</h2>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                )
            }

        </>
    )
}

const mapState = (state) => ({
    breedLists: state.breed.breeds,
    breedList: state.breed.breed,
    loading: state.loading.effects.breed.getBreed
})


const mapDispatch = (state) => ({
    getBreeds: () => state.breed.getBreeds(),
    getBreed: (breed) => state.breed.getBreed(breed),
    resetMessages: () => state.breed.resetMessages(),

})


const BreedTitle2Container = connect(mapState, mapDispatch)(Title2);
export default BreedTitle2Container