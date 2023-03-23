/* eslint-disable default-case */
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  deletePersonRequest,
  setEditPerson,
  updatePersonRequest,
} from '@/redux/reducers/persons/reducer'
import { getOnePerson } from '@/redux/reducers/persons/selectors'
import { IPerson } from '@/redux/reducers/persons/types'
import { ChangeEvent, FC, useState } from 'react'
import { Button, PersonRow, TableCell, TableEditCell } from '../styled'

const TableRow: FC<IPerson> = ({ id, name, age, about }) => {
  const dispatch = useAppDispatch()
  const editPerson = useAppSelector(getOnePerson)
  const [deleteMode, setDeleteMode] = useState(false)

  const handleRowChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name: fieldName } = e.target
    if (fieldName === 'age') {
      if (/^[0-9]*$/.test(value)) {
        dispatch(setEditPerson({ ...editPerson, [fieldName]: value }))
      }
    } else dispatch(setEditPerson({ ...editPerson, [fieldName]: value }))
  }

  const setEditMode = () => {
    dispatch(setEditPerson({ id, name, age, about }))
  }

  const disableEditMode = () => {
    dispatch(setEditPerson(null))
  }

  const handleSavePerson = () => {
    dispatch(updatePersonRequest(editPerson))
  }

  const handleDeletePerson = () => {
    if (!deleteMode) {
      setDeleteMode(true)
    } else {
      dispatch(deletePersonRequest(String(id)))
      setDeleteMode(false)
    }
  }

  if (editPerson && editPerson.id === id) {
    return (
      <PersonRow key={id} id={String(id)}>
        <TableCell>{id}</TableCell>
        <TableEditCell name="name" value={editPerson.name} onChange={handleRowChange} />
        <TableEditCell name="age" value={editPerson.age} onChange={handleRowChange} />
        <TableEditCell name="about" value={editPerson.about} onChange={handleRowChange} />
        <TableCell>
          <Button background="green" type="button" onClick={handleSavePerson}>
            Save
          </Button>
          <Button background="red" type="button" onClick={disableEditMode}>
            Cancel
          </Button>
        </TableCell>
      </PersonRow>
    )
  }
  return (
    <PersonRow key={id} id={String(id)}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{age}</TableCell>
      <TableCell>{about}</TableCell>
      <TableCell>
        {deleteMode ? (
          <>
            <Button background="green" type="button" onClick={handleDeletePerson}>
              Confirm
            </Button>
            <Button background="red" type="button" onClick={() => setDeleteMode(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button background="green" type="button" onClick={setEditMode}>
              Edit
            </Button>
            <Button background="red" type="button" onClick={handleDeletePerson}>
              Delete
            </Button>
          </>
        )}
      </TableCell>
    </PersonRow>
  )
}

export default TableRow
