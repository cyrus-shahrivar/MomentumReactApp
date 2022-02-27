/**
 * @description Greeting function based on local hour in day
 * @param {string} currentHour
 * @returns {string} greeting
 */
export function getGreeting(currentHour) {
  if (currentHour < 12) return "Good Morning"
  if (currentHour < 17) return "Good Afternoon"
  if (currentHour < 20) return "Good Evening"
  return "Good Night"
}
