import React, { FC, ReactNode } from 'react'
import * as ST from './styled'
import { ReactComponent as Close } from 'assets/icons/cancel.svg'

interface ISelectProps {
  children: ReactNode
  show: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const DefaultPopup: FC<ISelectProps> = ({
  children,
  show,
  onClose,
}: ISelectProps) => {
  const handleClose = (): void => {
    onClose(!show)
  }

  return (
    <>
      {show ? (
        <ST.ModalOverlay onClick={handleClose}>
          <ST.Modal
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            <ST.ModalContent>
              <ST.Close onClick={handleClose}>
                <Close />
              </ST.Close>
              {children}
            </ST.ModalContent>
          </ST.Modal>
        </ST.ModalOverlay>
      ) : null}
    </>
  )
}

export default DefaultPopup
