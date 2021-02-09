import {
  Dispatch,
  SetStateAction,
  useRef,
  MouseEventHandler,
  MutableRefObject
} from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import {
  Card,
  FieldSection,
  ImageContainer,
  Wrapper,
  AltField,
  List,
  ButtonWrapper,
  Button
} from './Modal.styled';
import { LoadingWrapper, Loading } from '../../styles/utils';
import InputField from '../InputField';
const CandidateById = loader('../../graphql/queries/candidate.graphql');

interface IModalOpen {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  candidate: number | undefined;
}

export default function Modal({
  modalOpen,
  setModalOpen,
  candidate
}: IModalOpen) {
  const { data, loading, error } = useQuery(CandidateById, {
    variables: {
      id: candidate
    }
  });

  const modalRef = useRef();

  const handleClose: MouseEventHandler<HTMLDivElement> = e => {
    if (modalRef.current === e.target) {
      setModalOpen(!modalOpen);
    }
  };

  if (loading) {
    return (
      <Wrapper
        open={modalOpen}
        ref={(modalRef as unknown) as MutableRefObject<HTMLDivElement>}
        onClick={handleClose}
      >
        <Card>
          <LoadingWrapper location='modal'>
            <Loading />
          </LoadingWrapper>
        </Card>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper
        open={modalOpen}
        ref={(modalRef as unknown) as MutableRefObject<HTMLDivElement>}
        onClick={handleClose}
      >
        <Card>
          <LoadingWrapper>
            <h1>Error...</h1>
          </LoadingWrapper>
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      open={modalOpen}
      ref={(modalRef as unknown) as MutableRefObject<HTMLDivElement>}
      onClick={handleClose}
    >
      <Card>
        <ImageContainer>
          <img src='https://dummyimage.com/100x100/000/fff' alt='' />
        </ImageContainer>
        <FieldSection>
          <InputField
            name='firstName'
            text='First Name'
            type='text'
            value={data.candidateById.firstName}
          />
          <InputField
            name='middleName'
            text='Middle Name'
            type='text'
            value={
              data.candidateById.middleName ? data.candidateById.middleName : ''
            }
          />
          <InputField
            name='lastName'
            text='Last Name'
            type='text'
            value={data.candidateById.lastName}
          />
        </FieldSection>
        <FieldSection>
          <InputField
            name='dateOfBirth'
            text='Date Of Birth'
            type='text'
            value={data.candidateById.dateOfBirth}
          />
          <InputField
            name='jobTitle'
            text='Job Title'
            type='text'
            value={data.candidateById.jobTitle}
          />
        </FieldSection>
        <FieldSection>
          <InputField
            name='phone'
            text='Phone'
            type='tel'
            value={data.candidateById.phone}
          />
          <InputField
            name='email'
            text='Email'
            type='email'
            value={data.candidateById.email}
          />
        </FieldSection>
        <FieldSection>
          <InputField
            name='address1'
            text='Address 1'
            type='text'
            value={data.candidateById.address.address1}
          />
        </FieldSection>
        <FieldSection>
          <InputField
            name='address2'
            text='Address 2'
            type='text'
            value={data.candidateById.address.address2}
          />
        </FieldSection>
        <FieldSection>
          <InputField
            name='city'
            text='City'
            type='text'
            value={data.candidateById.address.city}
          />
          <InputField
            name='province'
            text='Province'
            type='text'
            value={data.candidateById.address.province.name}
          />
          <InputField
            name='postalCode'
            text='Postal Code'
            type='text'
            value={data.candidateById.address.postalCode}
          />
          <InputField
            name='country'
            text='Country'
            type='text'
            value={data.candidateById.address.country}
          />
        </FieldSection>
        <FieldSection>
          <AltField>
            <label htmlFor='languages'>Languages</label>
            <List>
              {data.candidateById.languages.map((language: string) => (
                <li key={language}>{language}</li>
              ))}
            </List>
          </AltField>
          <AltField>
            <label htmlFor='skills'>skills</label>
            <List>
              {data.candidateById.skills.map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </List>
          </AltField>
        </FieldSection>
        <FieldSection>
          <InputField
            name='validDriversLicense'
            text={`Has A Valid Driver's License`}
            type='text'
            value={data.candidateById.validDriversLicense ? 'true' : 'false'}
          />
          <InputField
            name='ownVehicle'
            text='Has Own Vehicle'
            type='text'
            value={data.candidateById.ownVehicle ? 'true' : 'false'}
          />
          <InputField
            name='statusInCanada'
            text='Status In Canada'
            type='text'
            value={data.candidateById.statusInCanada}
          />
        </FieldSection>
        <ButtonWrapper>
          <Button disabled>Save</Button>
          <Button variant='red'>Delete</Button>
        </ButtonWrapper>
      </Card>
    </Wrapper>
  );
}
