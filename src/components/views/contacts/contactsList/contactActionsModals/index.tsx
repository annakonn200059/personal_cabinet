import React, { FC, useState } from 'react'
import * as ST from './styled'
import { IContact, IPostContact, IPostContactResponse } from 'types/contacts'
import { useFormik } from 'formik'
import { patchContact } from 'api/contacts'
import { onEnterSubmit } from 'utils/onEnterSubmit'
import NumberFormat from 'react-number-format'

interface IConfirmDelete {
  onDelete: () => void
  closeModal: () => void
}

interface IEditContact {
  idContact: number
  closeModal: () => void
  contactInfo: IPostContact
  updateContactListItem: (updatedContact: IPostContactResponse) => void
}

export const ConfirmDelete: FC<IConfirmDelete> = ({
  onDelete,
  closeModal,
}: IConfirmDelete) => {
  return (
    <>
      <ST.ModalText>Do you really want to delete this contact?</ST.ModalText>
      <ST.ConfirmButton
        onClick={() => {
          onDelete()
          closeModal()
        }}
      >
        Yes
      </ST.ConfirmButton>
    </>
  )
}

export const ModalEditContact: FC<IEditContact> = ({
  idContact,
  closeModal,
  contactInfo,
  updateContactListItem,
}: IEditContact) => {
  const [errorText, setErrorText] = useState<string>('')

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { ...contactInfo },
    onSubmit: async () => {
      const changedFields: IContact = {}
      Object.keys(contactInfo).forEach((contactField) => {
        if (values[contactField])
          changedFields[contactField] = values[contactField]
        else changedFields[contactField] = contactInfo[contactField]
      })
      patchContact({ idContact: idContact, args: changedFields })
        .then((resp) => {
          updateContactListItem(resp)
          closeModal()
        })
        .catch((e) => {
          setErrorText(e.response.data)
        })
    },
  })

  const handleIsDisabled = (): boolean => {
    if (values.phoneNumber) {
      return !(values.phoneNumber.replace(/[^\d]/g, '').length === 11)
    }
    return false
  }

  return (
    <>
      <ST.ModalText>Edit this contact</ST.ModalText>
      <ST.InputsContainer>
        <ST.InputWrapper>
          <label htmlFor="name">Name</label>
          <ST.Input
            placeholder={'Ivan'}
            value={values.name}
            onChange={handleChange}
            id={'name'}
            name={'name'}
          />
        </ST.InputWrapper>

        <ST.InputWrapper>
          <label htmlFor="phoneNumber">Phone number</label>
          <NumberFormat
            placeholder={'+7(XXX)-XXX-XX-XX'}
            customInput={ST.Input}
            format="+7 (###) ###-##-##"
            mask="_"
            value={values.phoneNumber}
            onChange={handleChange}
            id={'phoneNumber'}
            name={'phoneNumber'}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              onEnterSubmit(e, handleSubmit)
            }
          />
        </ST.InputWrapper>
        <ST.ErrorText>{errorText ? errorText : ''}</ST.ErrorText>
      </ST.InputsContainer>
      <ST.SubmitButton
        type={'submit'}
        disabled={handleIsDisabled()}
        onClick={() => {
          handleSubmit()
        }}
      >
        Edit
      </ST.SubmitButton>
    </>
  )
}
