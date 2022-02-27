import { getGreeting } from "./GreetingHelpers"

describe("#getGreeting", () => {
  test("should return Good Morning if time is between midnight-noon", () => {
    const midnight = getGreeting(0)
    const midMorning = getGreeting(5)
    const noon = getGreeting(12)

    expect(midnight).toBe("Good Morning")
    expect(midMorning).toBe("Good Morning")
    expect(noon).not.toBe("Good Morning")
  })

  test("should return Good Afternoon if time is between noon-5pm", () => {
    const noon = getGreeting(12)
    const midAfternoon = getGreeting(16)
    const at5PM = getGreeting(17)

    expect(noon).toBe("Good Afternoon")
    expect(midAfternoon).toBe("Good Afternoon")
    expect(at5PM).not.toBe("Good Afternoon")
  })

  test("should return Good Evening if time is between 5pm-8pm", () => {
    const at5PM = getGreeting(17)
    const midEvening = getGreeting(18)
    const at8PM = getGreeting(20)

    expect(at5PM).toBe("Good Evening")
    expect(midEvening).toBe("Good Evening")
    expect(at8PM).not.toBe("Good Evening")
  })

  test("should return Good Night if time is between 8pm-midnight", () => {
    const at8PM = getGreeting(20)
    const past8PM = getGreeting(21)
    const midnight = getGreeting(0)

    expect(at8PM).toBe("Good Night")
    expect(past8PM).toBe("Good Night")
    expect(midnight).not.toBe("Good Night")
  })
})
