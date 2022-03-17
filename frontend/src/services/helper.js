/**
 *  Set local storage item with time stamp
 */
export function setHtmlStorage(name, value, expires) {
  if (value) {
    // Set default expiration to 1 hour if undefined or null
    if (expires === undefined || expires === "null") {
      expires = 3600
    }
    // Schedule when the token should be expired
    const date = new Date()
    const schedule = Math.round(date.setSeconds(date.getSeconds() + expires) / 1000)
    // Set the actual value as well as the time
    localStorage.setItem(name, value)
    localStorage.setItem(`${name}_time`, schedule)
  }
}

/**
 * Remove local storage item and time stamp
 */
export function removeHtmlStorage(name) {
  localStorage.removeItem(name)
  localStorage.removeItem(`${name}_time`)
}

/**
 *  Check the expiration status of a local storage item
 */
export function statusHtmlStorage(name) {
  // Get current time
  const date = new Date()
  const current = Math.round(+date / 1000)
  // Pull the storage item's expiration
  let stored_time = localStorage.getItem(`${name}_time`)
  if (!stored_time === undefined || stored_time === "null") {
    stored_time = 0
  }
  // Determine if it is expired
  if (stored_time < current) {
    // If expired, remove it and return false
    removeHtmlStorage(name)
    return false
  }
  // If not, return true
  return 1
}
