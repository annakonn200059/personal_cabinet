import React, { FC, useState } from 'react'
import * as ST from './styled'
import { ReactComponent as Search } from 'assets/icons/search.svg'
import { getSearchContacts } from 'api/contacts/index'
import { IPostContactResponse } from 'types/contacts'
import { onEnterSubmit } from 'utils/onEnterSubmit'

interface ISearchContacts {
  setContactsList: React.Dispatch<React.SetStateAction<IPostContactResponse[]>>
  userId: number
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchContactsField: FC<ISearchContacts> = ({
  setContactsList,
  userId,
  setIsLoading,
}: ISearchContacts) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleContactsListWithSearch = (): void => {
    setIsLoading(true)
    getSearchContacts(searchValue, userId).then((searchedContacts) =>
      setContactsList(searchedContacts)
    )
    setIsLoading(false)
  }

  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value)
  }

  return (
    <ST.InputBlock>
      <ST.SearchInput
        placeholder={'Search'}
        value={searchValue}
        onChange={handleChangeSearchInput}
        onKeyDown={(e) => onEnterSubmit(e, handleContactsListWithSearch)}
      />
      <Search onClick={() => handleContactsListWithSearch()} />
    </ST.InputBlock>
  )
}
