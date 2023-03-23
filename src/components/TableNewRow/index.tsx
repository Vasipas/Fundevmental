/* eslint-disable default-case */
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addNewRow,
  addPersonRequest,
  deletePersonRequest,
  setEditPerson,
  updatePersonRequest,
} from '@/redux/reducers/persons/reducer'
import { getOnePerson } from '@/redux/reducers/persons/selectors'
import { IPerson } from '@/redux/reducers/persons/types'
import { ChangeEvent, FC } from 'react'
import { Button, PersonRow, TableCell, TableEditCell } from '../styled'

const TableNewRow: FC = () => {
  const dispatch = useAppDispatch()
  const editPerson = useAppSelector(getOnePerson)

  const handleRowChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name: fieldName } = e.target
    if (fieldName === 'age') {
      if (/^[0-9]*$/.test(value)) {
        dispatch(setEditPerson({ ...editPerson, [fieldName]: value }))
      }
    } else dispatch(setEditPerson({ ...editPerson, [fieldName]: value }))
  }

  const disableEditMode = () => {
    dispatch(setEditPerson(null))
    dispatch(addNewRow())
  }

  const handleSavePerson = () => {
    dispatch(addPersonRequest(editPerson))
  }

  return (
    <PersonRow>
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

export default TableNewRow
