import {
  Dispatch,
  SetStateAction,
  useRef,
  MouseEventHandler,
  MutableRefObject
} from 'react';
import { Card, Wrapper } from './Modal.styled';

interface IModalOpen {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ modalOpen, setModalOpen }: IModalOpen) {
  const modalRef = useRef();

  const handleClose: MouseEventHandler<HTMLDivElement> = e => {
    if (modalRef.current === e.target) {
      setModalOpen(!modalOpen);
    }
  };

  return (
    <Wrapper
      open={modalOpen}
      ref={(modalRef as unknown) as MutableRefObject<HTMLDivElement>}
      onClick={handleClose}
    >
      <Card>
        <div></div>
      </Card>
    </Wrapper>
  );
}
