// Section 03 — Values, truthiness and expressions

// "Full", "1 seat left", or "12 seats left".
export function seatLabel(course) {
  
  const seats = course.seatsLeft;

  const avaliableSeats = seats === 0 ? "Full" : ( seats === 1 ? "1 seat left" : `${seats} seats left`);

  return avaliableSeats;

}

// The course's description, or "No description yet." ONLY when it is
// null or undefined. An empty string "" is a real value and is kept.
export function descriptionOrDefault(course) {
  
  const courseDescription = course.description ?? "No description yet." ;

  return courseDescription;

}

// "3 in planner" for a positive count, and null (not 0, not "") for zero.
export function plannerBadge(count) {
  
  const response = count === 0 ? null : `${count} in planner`;

  return response;

}
