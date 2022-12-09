/* eslint-disable react/style-prop-object */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { connect } from 'react-redux'
import { genUUId } from '../../utils/uniId'
import SelectField from '../../components/ui/select_field';
import Button from '../../components/ui/button';


const schema = yup.object().shape({
  breed: yup.string().required(),
})

const BreedIndex = ({ breedLists, breedList, getBreeds, getBreed, loading, subBreedList, getSubBreed, getSubBreedList, subBreedListShow, resetMessages }) => {

  const [numberOfBreeds, setNumberOfBreeds] = useState(1);
  const { hook, register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      breed: '',
      sub_breed: '',
      number_of_breed: 0,
    },
    resolver: yupResolver(schema)
  });



  useEffect(() => {
    getBreeds();
    getSubBreed();
    resetMessages();
  }, [])

  const resetFilter = () => {
    reset();
    resetMessages();
  }

  const submitForm = (data) => {

    if (data?.breed !== "" && data?.sub_breed !== "") {
      getSubBreedList(data)
    }

    if (data?.breed !== "" && data?.sub_breed === "") {
      getBreed(data)
    }
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
              name='sub_breed'
              colClass="col-md-3"
              hook={register}
              id="select-sub-breed"
              inputClassName="form-control"
              label="Sub breed"
              labelClass="col-form-label col-form-label-sm"
              options={subBreedList}
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
              options={[1, 2, 3, 4, 6, 7, 8, 9]}
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
                        <img src={breed} alt="Lights" style={{ width: "200px", height:'150px' }} />
                      </div>
                    </div>

                  )) : subBreedListShow.length > 0 ? (
                    subBreedListShow.filter((_, index) => !(index >= numberOfBreeds))
                      .map((breed, index) => {
                        return (
                          <div className="col-md-3" key={breed + " " + genUUId}>
                            <div className="thumbnail">
                              <img src={breed} alt="Lights" style={{ width: "200px", height:'150px' }} />
                            </div>
                          </div>
                        )
                      }

                      )

                  ) : (
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
  subBreedList: state.breed.sub_breed,
  subBreedListShow: state.breed.sub_breed_list,
  loading: state.loading.effects.breed.getBreed || state.loading.effects.breed.getSubBreedList

})


const mapDispatch = (state) => ({
  getBreeds: () => state.breed.getBreeds(),
  getBreed: (breed) => state.breed.getBreed(breed),
  getSubBreed: () => state.breed.getSubBreed(),
  getSubBreedList: (filter) => state.breed.getSubBreedList(filter),
  resetMessages: () => state.breed.resetMessages(),

})


const BreedIndexContainer = connect(mapState, mapDispatch)(BreedIndex);

export default BreedIndexContainer