"use client"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

import React from "react"
import {CalenderProps} from "../types"
import {DateRange} from "react-date-range"

const Calender = ({value, onChange, disabledDates}: CalenderProps) => {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction={"vertical"}
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  )
}

export default Calender
