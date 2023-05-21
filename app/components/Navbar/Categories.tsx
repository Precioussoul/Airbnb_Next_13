"use client"
import React from "react"
import Container from "../Container"
import {TbBeach} from "react-icons/tb"
import {GiWindmill} from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import CategoryBox from "../CategoryBox"

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Beach",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
]

const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            description={category.description}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
