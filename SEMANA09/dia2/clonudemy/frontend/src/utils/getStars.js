export default function getStars(course) {
  if (!course) return;
  let starsComplete = Math.trunc(course.stars);
  let starsHalf = 0;
  const decimal = course.stars - starsComplete;
  let starsEmpty = 5 - starsComplete - (decimal ? 1 : 0);
  if ((decimal && decimal < 0.5) || decimal === 0.5) starsHalf += 1;
  else if (decimal) starsComplete += 1;
  const stars = [];
  for (let i = 1; i <= starsComplete; i++) {
    stars.push("complete");
  }
  for (let i = 1; i <= starsHalf; i++) {
    stars.push("half");
  }
  for (let i = 1; i <= starsEmpty; i++) {
    stars.push("empty");
  }
  return stars;
}
