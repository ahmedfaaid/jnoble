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
  Field,
  Wrapper,
  List,
  ButtonWrapper,
  Button
} from './Modal.styled';
import { LoadingWrapper, Loading } from '../../styles/utils';
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
          <Field>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              value={data.candidateById.firstName}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='middleName'>Middle Name</label>
            <input
              type='text'
              name='middleName'
              value={
                data.candidateById.middleName
                  ? data.candidateById.middleName
                  : ''
              }
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={data.candidateById.lastName}
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='dateOfBirth'>Date Of Birth</label>
            <input
              type='date'
              name='dateOfBirth'
              value={data.candidateById.dateOfBirth}
            />
          </Field>
          <Field>
            <label htmlFor='jobTitle'>Job Title</label>
            <input
              type='text'
              name='jobTitle'
              value={data.candidateById.jobTitle}
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              name='phone'
              value={data.candidateById.phone}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={data.candidateById.email}
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='address1'>Address 1</label>
            <input
              type='text'
              name='address1'
              value={data.candidateById.address.address1}
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='address2'>Address 2</label>
            <input
              type='text'
              name='address1'
              value={
                data.candidateById.address.address2
                  ? data.candidateById.address.address2
                  : ''
              }
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              value={data.candidateById.address.city}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='province'>Province</label>
            <input
              type='text'
              name='province'
              value={data.candidateById.address.province.name}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='postalCode'>Postal Code</label>
            <input
              type='text'
              name='postalCode'
              value={data.candidateById.address.postalCode}
              readOnly
            />
          </Field>
          <Field>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              name='country'
              value={data.candidateById.address.country}
              readOnly
            />
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='languages'>Languages</label>
            <List>
              {data.candidateById.languages.map((language: string) => (
                <li key={language}>{language}</li>
              ))}
            </List>
          </Field>
          <Field>
            <label htmlFor='skills'>skills</label>
            <List>
              {data.candidateById.skills.map((skill: string) => (
                <li key={skill}>{skill}</li>
              ))}
            </List>
          </Field>
        </FieldSection>
        <FieldSection>
          <Field>
            <label htmlFor='validDriversLicense'>
              Has A Valid Driver's License
            </label>
            <select
              name='validDriversLicense'
              value={data.candidateById.validDriversLicense ? 'true' : 'false'}
              disabled
            >
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </Field>
          <Field>
            <label htmlFor='ownVehicle'>Has Own Vehicle</label>
            <select
              name='ownVehicle'
              value={data.candidateById.ownVehicle ? 'true' : 'false'}
              disabled
            >
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </Field>
          <Field>
            <label htmlFor='statusInCanada'>Status In Canada</label>
            <input
              type='text'
              name='statusInCanada'
              value={data.candidateById.statusInCanada}
            />
          </Field>
        </FieldSection>
        <ButtonWrapper>
          <Button disabled>Save</Button>
          <Button variant='red'>Delete</Button>
        </ButtonWrapper>
      </Card>
    </Wrapper>
  );
}
