import { getGreeting } from "./GreetingHelpers"

describe("#getGreeting", () => {
  test("should return Good Morning if time is between midnight-noon", () => {
    const morningGreeting = "Good Morning"

    const midnight = getGreeting(0)
    const midMorning = getGreeting(5)
    const noon = getGreeting(12)

    expect(midnight).toBe(morningGreeting)
    expect(midMorning).toBe(morningGreeting)
    expect(noon).not.toBe(morningGreeting)
  })

  test("should return Good Afternoon if time is between noon-5pm", () => {
    const afternoonGreeting = "Good Afternoon"

    const noon = getGreeting(12)
    const midAfternoon = getGreeting(16)
    const at5PM = getGreeting(17)

    expect(noon).toBe(afternoonGreeting)
    expect(midAfternoon).toBe(afternoonGreeting)
    expect(at5PM).not.toBe(afternoonGreeting)
  })

  test("should return Good Evening if time is between 5pm-8pm", () => {
    const eveningGreeting = "Good Evening"

    const at5PM = getGreeting(17)
    const midEvening = getGreeting(18)
    const at8PM = getGreeting(20)

    expect(at5PM).toBe(eveningGreeting)
    expect(midEvening).toBe(eveningGreeting)
    expect(at8PM).not.toBe(eveningGreeting)
  })

  test("should return Good Night if time is between 8pm-midnight", () => {
    const nightGreeting = "Good Night"

    const at8PM = getGreeting(20)
    const past8PM = getGreeting(21)
    const midnight = getGreeting(0)

    expect(at8PM).toBe(nightGreeting)
    expect(past8PM).toBe(nightGreeting)
    expect(midnight).not.toBe(nightGreeting)
  })
})
