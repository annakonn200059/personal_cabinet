import React, { useState } from 'react'
import * as ST from './styled'
import DefaultPopup from 'components/ui/modals/defaultModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { postContact } from 'api/contacts'
import { IAddContact, IAddContactInputs, IPostContact } from 'types/contacts'
import { onEnterSubmit } from 'utils/onEnterSubmit'

const AddContactInputs = ({
  setContactsList,
  stateUser,
  closeModal,
}: IAddContactInputs) => {
  const [errorText, setErrorText] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const handleIsDisabled = (): void => {
    setIsDisabled((prevState) => !prevState)
  }

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { name: '', phoneNumber: '' },
    onSubmit: async () => {
      handleIsDisabled()
      const newContact: IPostContact = {
        name: values.name,
        phoneNumber: values.phoneNumber,
        idUser: stateUser.user.id,
      }
      postContact({ ...newContact })
        .then((resp) => {
          handleIsDisabled()
          setContactsList(resp)
          closeModal()
        })
        .catch((e) => {
          setErrorText(e.response.data)
        })
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required field missed'),
      phoneNumber: Yup.string().required('Required field missed'),
    }),
  })
  return (
    <>
      <ST.InputsContainer>
        <ST.Input
          placeholder={'ann'}
          value={values.name}
          onChange={handleChange}
          id={'name'}
          name={'name'}
        />
        <ST.Input
          placeholder={'+7(927)-144-00-00'}
          value={values.phoneNumber}
          onChange={handleChange}
          id={'phoneNumber'}
          name={'phoneNumber'}
          onKeyDown={(e) => onEnterSubmit(e, handleSubmit)}
        />
        <ST.ErrorText>{errorText ? errorText : ''}</ST.ErrorText>
      </ST.InputsContainer>
      <ST.SubmitButton
        type={'submit'}
        disabled={isDisabled}
        onClick={() => {
          handleSubmit()
        }}
      >
        Add
      </ST.SubmitButton>
    </>
  )
}

export const AddContact = ({ setContactsList, stateUser }: IAddContact) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleModal = (): void => {
    setShowModal(!showModal)
  }
  return (
    <>
      <ST.AddContactContainer>
        <ST.AddContactButton onClick={() => handleModal()}>
          ADD CONTACT
        </ST.AddContactButton>
      </ST.AddContactContainer>
      <DefaultPopup
        children={
          <AddContactInputs
            setContactsList={setContactsList}
            stateUser={stateUser}
            closeModal={() => handleModal()}
          />
        }
        show={showModal}
        onClose={handleModal}
      />
    </>
  )
}
