import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

const cars = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Benz' },
    { id: 3, name: 'BMW' },
    { id: 4, name: 'Hyundai' },
    { id: 5, name: 'Genesis' },
]

export default function ListBox() {
    const [selectedCar, setSelectedCar] = useState(cars[0])

    return (
        <Listbox value={selectedCar} onChange={setSelectedCar}>
            <ListboxButton className='drop-btn'>
                {selectedCar.name}
            </ListboxButton>
            <ListboxOptions anchor='bottom' className='drop-list'>
                {cars.map((person) => (
                    <ListboxOption
                        key={person.id}
                        value={person}
                        className='drop-item'>
                        {person.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}
