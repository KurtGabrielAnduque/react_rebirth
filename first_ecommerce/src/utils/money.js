

function money(moneyCents) {
  return (
    `$${(moneyCents/100).toFixed(2)}`
  );
}

export default money