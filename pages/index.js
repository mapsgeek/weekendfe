import { useState, useRef } from "react"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"
import styled from "styled-components"
import { format, addDays } from "date-fns"
import Router from "next/router"

import ContentContainer from "../components/ContentContainer"
import PlacePicker from "../components/PlacePickerLocations"
import DatePicker from "../components/DatePicker"
import Interests from "../components/Interests"
import useOnClickOutside from "../components/useOnClickOutside"
import PlacesToVisit from "../components/PlacesToVisit"
import Stepper from "../components/Stepper"
import useUrl from "../components/useUrl"

const NomadForm = styled.div`
  max-width: 816px;
`

const StyledOrigin = styled.div`
  max-width: 756px;
`

const today = new Date()
const day = 60 * 60 * 24 * 1000

const defaultValues = {
  adults: 2,
  interest: "drinks",
  flyFrom: { id: "brno_cz", name: "Brno" },
  dateFrom: new Date(),
  dateTo: new Date(today.getTime() + day * 7),
  places: [[{ name: "Italy", id: "IT", code: "IT" }, [2, 5]]]
}

const TopPart = ({ flyFrom, flyTo, dateFrom, dateTo, adults }) => {
  const [tripFrom, setFrom] = useUrl(
    flyFrom || defaultValues.flyFrom,
    "flyFrom",
    item => (item ? item.id : undefined)
  )
  const [tripAdults, setAdults] = useUrl(adults, "adults")

  const [showDestination, setDestinationVisibility] = useState(
    Boolean(flyTo)
  )
  const [tripTo, setDestination] = useUrl(flyTo, "flyTo", item =>
    item ? item.id : undefined
  )

  const [showReturnDate, setReturnDateVisibility] = useState(
    Boolean(dateTo)
  )
  const [departureDate, setDepartureDate] = useUrl(
    dateFrom ? new Date(dateFrom) : defaultValues.dateFrom,
    "dateFrom",
    date => format(date, "YYYY-MM-DD")
  )
  const [
    departureDatePickerOpened,
    setDepartureDatePickerVisibility
  ] = useState(false)

  const [returnDate, setReturnDate] = useUrl(
    dateTo ? new Date(dateTo) : addDays(new Date(), 10),
    "dateTo",
    date => (date ? format(date, "YYYY-MM-DD") : undefined)
  )
  const [
    returnDatePickerOpened,
    setReturnDatePickerVisibility
  ] = useState(false)

  const selectDepartureDate = date => {
    setDepartureDate(date.date)
    setDepartureDatePickerVisibility(false)
  }

  const selectReturnDate = date => {
    setReturnDate(date.date)
    setReturnDatePickerVisibility(false)
  }

  const departureDatepickerRef = useRef()
  useOnClickOutside(departureDatepickerRef, () =>
    setDepartureDatePickerVisibility(false)
  )

  const returnDatepickerRef = useRef()
  useOnClickOutside(returnDatepickerRef, () =>
    setReturnDatePickerVisibility(false)
  )

  return (
    <Stack spaceAfter="largest">
      <Stack direction="row" justify="end">
        <Stack basis="calc(25% - 16px)" shrink={false} grow={false}>
          <Stepper
            min={1}
            max={20}
            defaultValue={tripAdults}
            onChange={setAdults}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <PlacePicker
          label="From"
          defaultValue={tripFrom}
          onChange={setFrom}
        />
        <DatePicker
          openRef={departureDatepickerRef}
          label="Departure"
          onFocus={() => setDepartureDatePickerVisibility(true)}
          shown={departureDatePickerOpened}
          currentDate={departureDate}
          onDateSelected={selectDepartureDate}
        />
      </Stack>
      {(showDestination || showReturnDate) && (
        <Stack direction="row">
          {showDestination && (
            <PlacePicker
              label="To"
              defaultValue={tripTo}
              onChange={setDestination}
            />
          )}
          {showReturnDate && (
            <DatePicker
              openRef={returnDatepickerRef}
              label="Arrival"
              onFocus={() => setReturnDatePickerVisibility(true)}
              shown={returnDatePickerOpened}
              currentDate={returnDate}
              onDateSelected={selectReturnDate}
            />
          )}
        </Stack>
      )}
      <Stack direction="row">
        <Checkbox
          label="Return to origin"
          checked={!showDestination}
          onChange={e => {
            setDestinationVisibility(!e.target.checked)
            setDestination(null)
          }}
        />
        <Checkbox
          label="Set return date"
          checked={showReturnDate}
          onChange={e => {
            setReturnDateVisibility(e.target.checked)
            setReturnDate(
              showReturnDate ? null : defaultValues.dateTo
            )
          }}
        />
      </Stack>
    </Stack>
  )
}

const placesToUrl = places =>
  places
    .map(([place, days]) => [place && place.code, days])
    .toString()
    .replace(/,/g, "-")

const changePlacesState = newPlaces => {
  const newUrl = {
    pathname: Router.pathname,
    query: {
      ...Router.query,
      stopovers: placesToUrl(newPlaces)
    }
  }
  // eslint-disable-next-line fp/no-mutating-methods
  Router.push(newUrl, newUrl, { shallow: true })
}

const getPlaceFromString = val =>
  typeof val === "string"
    ? { name: `[${val}]`, code: val, id: val }
    : val

// Mexico,2,5,Poland,1,3 => [["Mexico", defaultDays]]
const UrlToPlaces = url => {
  if (!url) return undefined
  const items = url.split("-")
  const result = []
  // eslint-disable-next-line
  for (let i = 0; i < items.length; i += 3)
    // eslint-disable-next-line fp/no-mutating-methods
    result.push([
      getPlaceFromString(items[i]),
      [items[i + 1], items[i + 2]]
    ])
  return result
}

const FlyForm = ({ query, places }) => (
  <ContentContainer>
    <Heading type="title1" spaceAfter="largest">
      What are you interested in?
    </Heading>
    <Interests
      defaultValue={query.interest || defaultValues.interest}
    />
    <NomadForm>
      <StyledOrigin>
        <Heading type="title1" spaceAfter="medium">
          What destinations do you want to visit?
        </Heading>
        <TopPart
          {...query}
          adults={query.adults || defaultValues.adults}
          flyFrom={query.flyFrom}
          flyTo={query.flyTo}
        />
      </StyledOrigin>
      <PlacesToVisit
        onChange={changePlacesState}
        defaultValue={places}
        onSearchClick={selectedPlaces => {
          const values = { ...defaultValues, ...Router.query }
          const newUrl = {
            pathname: `${BASE_URL}/result`,
            query: {
              ...values,
              dateFrom: format(
                new Date(values.dateFrom),
                "DD/MM/YYYY"
              ),
              flyFrom:
                typeof values.flyFrom === "string"
                  ? values.flyFrom
                  : values.flyFrom.id,
              dateTo:
                values.dateTo &&
                format(new Date(values.dateTo), "DD/MM/YYYY"),
              stopovers: placesToUrl(selectedPlaces),
              places: undefined
            }
          }
          Router.push(newUrl) // eslint-disable-line
        }}
      />
    </NomadForm>
  </ContentContainer>
)

FlyForm.getInitialProps = async ({ req, query }) => {
  const places = UrlToPlaces(query.stopovers) || defaultValues.places
  return { query, places }
}

export default FlyForm
