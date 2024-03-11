function calculateFee() {
  const attendingLeague = document.getElementById("attendingLeague").value;
  const sprintFlown = document.getElementById("sprintFlown").checked;
  const xcFlown = document.getElementById("xcFlown").checked;
  const firstSprint = document.getElementById("firstSprint").checked;
  const firstXc = document.getElementById("firstXc").checked;

  const membershipFee = getMembershipFee(
    attendingLeague,
    sprintFlown,
    xcFlown,
    firstSprint,
    firstXc
  );
  document.getElementById(
    "membershipFee"
  ).textContent = `Your membership fee is: $${membershipFee}`;
}

function getMembershipFee(attendingLeague, sprintFlown, xcFlown, firstSprint = true, firstXc = true) {
  // First-time Sprint is free
  if (attendingLeague === "Sprint" && !sprintFlown) {
    return 0;
  }

  // First-time XC without Sprint is $25
  if (attendingLeague === "XC" && !xcFlown && !sprintFlown) {
    return 25;
  }

  // Sprint only or Both leagues with Sprint flown but not XC
  if ((attendingLeague === "Sprint" || (attendingLeague === "Both" && sprintFlown && !xcFlown)) && firstSprint) {
    return 25;
  }

  // XC only or Both leagues with both flown before
  if (attendingLeague === "XC" || (attendingLeague === "Both" && sprintFlown && xcFlown)) {
    return 50;
  }

  // Late Sprint renewal is $40
  if (attendingLeague === "Sprint" && !firstSprint) {
    return 40;
  }

  // Late XC renewal is $75
  if (attendingLeague === "XC" && !firstXc) {
    return 75;
  }

  // Default case, if none of the above conditions are met
  return 50;
}


document.getElementById('membershipForm').addEventListener('change', calculateFee);

calculateFee();