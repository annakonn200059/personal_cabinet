import React, { FC, useState } from 'react'
import * as ST from './styled'
import DefaultPopup from 'components/ui/modals/defaultModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { postContact } from 'api/contacts'
import { IAddContact, IAddContactInputs, IPostContact } from 'types/contacts'
import { onEnterSubmit } from 'utils/onEnterSubmit'
import NumberFormat from 'react-number-format'

const AddContactInputs: FC<IAddContactInputs> = ({
  setContactsList,
  stateUser,
  closeModal,
}: IAddContactInputs) => {
  const [errorText, setErrorText] = useState<string>('')

  const handleIsDisabled = (): boolean => {
    return !(values.phoneNumber.replace(/[^\d]/g, '').length === 11)
  }

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { name: '', phoneNumber: '' },
    onSubmit: async () => {
      const newContact: IPostContact = {
        name: values.name,
        phoneNumber: values.phoneNumber,
        idUser: stateUser.user.id,
      }
      postContact({ ...newContact })
        .then((resp) => {
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
          placeholder={'Ivan'}
          value={values.name}
          onChange={handleChange}
          id={'name'}
          name={'name'}
        />
        <NumberFormat
          placeholder={'+7(XXX)-XXX-XX-XX'}
          customInput={ST.Input}
          format="+7 (###) ###-##-##"
          value={values.phoneNumber}
          onChange={handleChange}
          id={'phoneNumber'}
          name={'phoneNumber'}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            onEnterSubmit(e, handleSubmit)
          }
        />
        <ST.ErrorText>{errorText ? errorText : ''}</ST.ErrorText>
      </ST.InputsContainer>
      <ST.SubmitButton
        type={'submit'}
        disabled={handleIsDisabled()}
        onClick={() => {
          handleSubmit()
        }}
      >
        Add
      </ST.SubmitButton>
    </>
  )
}

export const AddContact: FC<IAddContact> = ({
  setContactsList,
  stateUser,
}: IAddContact) => {
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
        <DefaultPopup
          children={
            <AddContactInputs
              setContactsList={setContactsList}
              stateUser={stateUser}
              closeModal={() => {
                handleModal()
              }}
            />
          }
          show={showModal}
          onClose={handleModal}
        />
      </ST.AddContactContainer>
    </>
  )
}
