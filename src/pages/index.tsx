/* eslint-disable import/no-named-as-default */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, PersonRow, TableCell } from '@/components/styled'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Head from 'next/head'
import { useEffect } from 'react'
import { addNewRow, getAllPersonsRequest, setEditPerson } from '@/redux/reducers/persons/reducer'
import { getNewRowMode, getPersons } from '@/redux/reducers/persons/selectors'
import { IPerson } from '@/redux/reducers/persons/types'
import TableRow from '@/components/TableRow'
import TableNewRow from '@/components/TableNewRow'

const Home = () => {
  const dispatch = useAppDispatch()
  const persons = useAppSelector(getPersons)
  const newRow = useAppSelector(getNewRowMode)

  useEffect(() => {
    dispatch(getAllPersonsRequest())
  }, [dispatch])

  const handleAddNewRow = () => {
    dispatch(setEditPerson({ name: '', age: 0, about: '', id: 0 }))
    dispatch(addNewRow())
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {newRow ? (
          <>
            <PersonRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>About Person</TableCell>
              <TableCell>Actions</TableCell>
            </PersonRow>
            <TableNewRow />
          </>
        ) : (
          <>
            <PersonRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>About Person</TableCell>
              <TableCell>Actions</TableCell>
            </PersonRow>
            <div>
              {persons?.map((item: IPerson) => {
                return (
                  <TableRow
                    key={item.id}
                    name={item.name}
                    age={item.age}
                    id={item.id}
                    about={item.about}
                  />
                )
              })}
              <div className="flex justify-center">
                <Button background="green" onClick={handleAddNewRow}>
                  Add New Row
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
